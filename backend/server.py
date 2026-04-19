from fastapi import FastAPI, APIRouter, HTTPException, Query
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import random
import string
import urllib.parse
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any, Literal
import uuid
from datetime import datetime, timezone

from seed_products import SEED_PRODUCTS

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

WHATSAPP_NUMBER = os.environ.get('WHATSAPP_NUMBER', '919999996287')
WHATSAPP_DISPLAY = '+91 99999 96287'

app = FastAPI()
api = APIRouter(prefix="/api")


# ---------- Models ----------
class Product(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    category_id: str
    name: str
    description: str
    price: int  # INR
    unit: str
    image: str
    in_stock: bool = True
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class CartItem(BaseModel):
    product_id: str
    name: str
    unit: str
    price: int
    qty: int


class Customer(BaseModel):
    name: str
    phone: str
    address: Optional[str] = ''
    city: Optional[str] = ''
    pincode: Optional[str] = ''
    notes: Optional[str] = ''


class OrderCreate(BaseModel):
    items: List[CartItem]
    customer: Customer


class EnquiryCreate(BaseModel):
    type: Literal['booking', 'experience', 'partnership', 'contact']
    data: Dict[str, Any]


# ---------- Helpers ----------
def _order_code() -> str:
    stamp = datetime.now().strftime('%Y%m%d')
    rand = ''.join(random.choices(string.ascii_uppercase + string.digits, k=4))
    return f"PHG-{stamp}-{rand}"


def _wa_url(text: str) -> str:
    return f"https://wa.me/{WHATSAPP_NUMBER}?text={urllib.parse.quote(text)}"


def _build_order_message(order_code: str, items: List[CartItem], subtotal: int, cust: Customer) -> str:
    lines = [f"Namaste Phagoli! \U0001F33F", "", f"I'd like to place an order (#{order_code}):", ""]
    for it in items:
        lines.append(f"\u2022 {it.name} ({it.unit}) \u00d7 {it.qty} \u2014 \u20b9{it.price * it.qty}")
    lines += ["", f"*Subtotal: \u20b9{subtotal}*", "",
              f"Name: {cust.name}",
              f"Phone: {cust.phone}"]
    if cust.address: lines.append(f"Address: {cust.address}")
    if cust.city: lines.append(f"City: {cust.city}")
    if cust.pincode: lines.append(f"PIN: {cust.pincode}")
    if cust.notes: lines += ["", f"Notes: {cust.notes}"]
    return "\n".join(lines)


def _build_enquiry_message(etype: str, data: Dict[str, Any]) -> str:
    title_map = {
        'booking': 'Farmstay Booking Enquiry',
        'experience': 'Experience Reservation',
        'partnership': 'Partnership Enquiry',
        'contact': 'New Enquiry',
    }
    lines = [f"Namaste Phagoli! \U0001F33F", "", f"*{title_map.get(etype, 'Enquiry')}*", ""]
    for k, v in data.items():
        if v is None or v == '':
            continue
        pretty = k.replace('_', ' ').title()
        lines.append(f"\u2022 {pretty}: {v}")
    return "\n".join(lines)


def _clean(doc: dict) -> dict:
    doc.pop('_id', None)
    return doc


# ---------- Routes ----------
@api.get("/")
async def root():
    return {"message": "Phagoli API", "whatsapp": WHATSAPP_DISPLAY}


@api.get("/whatsapp-config")
async def wa_config():
    return {"number": WHATSAPP_NUMBER, "display": WHATSAPP_DISPLAY}


@api.get("/products", response_model=List[Product])
async def list_products(category: Optional[str] = Query(None)):
    q = {"category_id": category} if category else {}
    docs = await db.products.find(q).sort("created_at", 1).to_list(500)
    return [Product(**_clean(d)) for d in docs]


@api.get("/products/{product_id}", response_model=Product)
async def get_product(product_id: str):
    doc = await db.products.find_one({"id": product_id})
    if not doc:
        raise HTTPException(404, "Product not found")
    return Product(**_clean(doc))


@api.post("/orders")
async def create_order(payload: OrderCreate):
    if not payload.items:
        raise HTTPException(400, "Cart is empty")
    if not payload.customer.name or not payload.customer.phone:
        raise HTTPException(400, "Name and phone are required")
    subtotal = sum(i.price * i.qty for i in payload.items)
    order_code = _order_code()
    msg = _build_order_message(order_code, payload.items, subtotal, payload.customer)
    whatsapp_url = _wa_url(msg)
    doc = {
        "id": str(uuid.uuid4()),
        "order_code": order_code,
        "items": [i.dict() for i in payload.items],
        "subtotal": subtotal,
        "customer": payload.customer.dict(),
        "whatsapp_url": whatsapp_url,
        "created_at": datetime.now(timezone.utc),
    }
    await db.orders.insert_one(doc)
    return {"id": doc["id"], "order_code": order_code, "subtotal": subtotal, "whatsapp_url": whatsapp_url}


@api.post("/enquiries")
async def create_enquiry(payload: EnquiryCreate):
    if not payload.data:
        raise HTTPException(400, "Enquiry data required")
    msg = _build_enquiry_message(payload.type, payload.data)
    whatsapp_url = _wa_url(msg)
    doc = {
        "id": str(uuid.uuid4()),
        "type": payload.type,
        "data": payload.data,
        "whatsapp_url": whatsapp_url,
        "created_at": datetime.now(timezone.utc),
    }
    await db.enquiries.insert_one(doc)
    return {"id": doc["id"], "whatsapp_url": whatsapp_url}


# ---------- Startup: seed products ----------
@app.on_event("startup")
async def seed_on_startup():
    try:
        count = await db.products.count_documents({})
        if count == 0:
            docs = []
            for p in SEED_PRODUCTS:
                docs.append({
                    "id": str(uuid.uuid4()),
                    "category_id": p["category_id"],
                    "name": p["name"],
                    "description": p["description"],
                    "price": p["price"],
                    "unit": p["unit"],
                    "image": p["image"],
                    "in_stock": True,
                    "created_at": datetime.now(timezone.utc),
                })
            if docs:
                await db.products.insert_many(docs)
                logger.info(f"Seeded {len(docs)} products")
    except Exception as e:
        logger.error(f"Seed failed: {e}")


app.include_router(api)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
