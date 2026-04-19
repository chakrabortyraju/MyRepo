# Phagoli — Full-Stack Contracts (WhatsApp Checkout)

## Goal
Make Phagoli full-stack. All ordering / enquiry flows go through **WhatsApp** (`+91 9999996287`), but every interaction is persisted in MongoDB first so we have a record.

## WhatsApp flow (shared)
1. Frontend collects customer info → POST to backend endpoint
2. Backend saves record, returns `id` + pre-built `whatsapp_url`
3. Frontend opens `whatsapp_url` in new tab (`wa.me/919999996287?text=...`)

## Data models (MongoDB)

### `products`
```
id: str (uuid), category_id: str, name: str, description: str,
price: int (INR), unit: str (e.g. "500g"), image: str, in_stock: bool, created_at: datetime
```

### `orders`
```
id: str, order_code: str (e.g. PHG-20260419-AB12), items: [{product_id, name, unit, price, qty}],
subtotal: int, customer: {name, phone, address, city, pincode, notes},
whatsapp_url: str, created_at: datetime
```

### `enquiries`
```
id: str, type: "booking"|"experience"|"partnership"|"contact",
data: dict (free-form), whatsapp_url: str, created_at: datetime
```

## API Endpoints (all `/api/...`)

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/products` | List all products (optional `?category=dairy`) |
| GET | `/api/products/{id}` | Single product |
| POST | `/api/orders` | Create order → returns `{id, order_code, whatsapp_url}` |
| POST | `/api/enquiries` | Create enquiry (booking/experience/partnership/contact) → returns `{id, whatsapp_url}` |
| GET | `/api/whatsapp-config` | Returns `{number, display}` for frontend links |

## Seed
On backend startup, if `products` collection is empty, insert ~25 seed products (5 per category).

## Frontend integration

### What changes from mock
- `Products.jsx` fetches from `/api/products`; "Explore Collection" expands to product list with **Add to Cart**
- `Cart` context (localStorage + state) — slide-over drawer with items, qty, subtotal, checkout form
- Checkout submits to `/api/orders` → opens `whatsapp_url`
- `Farmstay.jsx` Book buttons → booking modal → POST `/api/enquiries` (type=booking) → WhatsApp
- `Experiences.jsx` Reserve → POST `/api/enquiries` (type=experience) → WhatsApp
- `Partnership.jsx` buttons → POST `/api/enquiries` (type=partnership) → WhatsApp
- `Contact.jsx` form → POST `/api/enquiries` (type=contact) → WhatsApp (optional, toast on success)

### What stays mocked
- Testimonials, Journal cards (static content)
- Hero slideshow imagery

## Env
- Backend: `WHATSAPP_NUMBER=919999996287` added to `/app/backend/.env`
- Frontend: uses `REACT_APP_BACKEND_URL` as before
