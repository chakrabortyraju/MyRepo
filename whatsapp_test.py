#!/usr/bin/env python3
"""
Additional test to verify WhatsApp URL content
"""

import requests
import urllib.parse

BASE_URL = "https://agro-store-10.preview.emergentagent.com/api"

def test_whatsapp_url_content():
    """Test that WhatsApp URL contains properly encoded order details"""
    
    # Get product IDs first
    response = requests.get(f"{BASE_URL}/products")
    products = response.json()
    
    if len(products) < 2:
        print("❌ Not enough products for test")
        return
    
    # Create order
    order_data = {
        "items": [
            {
                "product_id": products[0]['id'],
                "name": "A2 Desi Cow Milk",
                "unit": "1 litre", 
                "price": 120,
                "qty": 2
            },
            {
                "product_id": products[1]['id'],
                "name": "Fresh Farm Paneer",
                "unit": "250 g",
                "price": 220,
                "qty": 1
            }
        ],
        "customer": {
            "name": "Ravi Kumar",
            "phone": "+91 9876543210",
            "address": "Green Park",
            "city": "Delhi", 
            "pincode": "110016",
            "notes": "Deliver after 5pm"
        }
    }
    
    response = requests.post(f"{BASE_URL}/orders", json=order_data)
    
    if response.status_code == 200:
        data = response.json()
        whatsapp_url = data['whatsapp_url']
        
        # Extract the text parameter
        parsed_url = urllib.parse.urlparse(whatsapp_url)
        query_params = urllib.parse.parse_qs(parsed_url.query)
        
        if 'text' in query_params:
            encoded_text = query_params['text'][0]
            decoded_text = urllib.parse.unquote(encoded_text)
            
            print("✅ WhatsApp URL Analysis:")
            print(f"URL: {whatsapp_url}")
            print("\n📱 Decoded Message:")
            print(decoded_text)
            
            # Check for key elements
            checks = [
                ("Namaste Phagoli!", "Namaste Phagoli!" in decoded_text),
                ("Order code", "PHG-" in decoded_text),
                ("A2 Desi Cow Milk", "A2 Desi Cow Milk" in decoded_text),
                ("Fresh Farm Paneer", "Fresh Farm Paneer" in decoded_text),
                ("Subtotal: ₹460", "₹460" in decoded_text),
                ("Customer name", "Ravi Kumar" in decoded_text),
                ("Customer phone", "+91 9876543210" in decoded_text),
                ("Address", "Green Park" in decoded_text),
                ("City", "Delhi" in decoded_text),
                ("PIN", "110016" in decoded_text),
                ("Notes", "Deliver after 5pm" in decoded_text)
            ]
            
            print("\n🔍 Content Verification:")
            all_passed = True
            for check_name, passed in checks:
                status = "✅" if passed else "❌"
                print(f"{status} {check_name}")
                if not passed:
                    all_passed = False
            
            if all_passed:
                print("\n✅ All WhatsApp URL content checks passed!")
            else:
                print("\n❌ Some WhatsApp URL content checks failed!")
                
        else:
            print("❌ No text parameter in WhatsApp URL")
    else:
        print(f"❌ Failed to create order: {response.status_code}")

if __name__ == "__main__":
    test_whatsapp_url_content()