#!/usr/bin/env python3
"""
Comprehensive backend testing for Phagoli API
Tests all endpoints with real data and validation
"""

import requests
import json
import sys
from typing import Dict, List, Any
import urllib.parse

# Backend URL from frontend/.env
BASE_URL = "https://agro-store-10.preview.emergentagent.com/api"

class PhagoliBETest:
    def __init__(self):
        self.base_url = BASE_URL
        self.session = requests.Session()
        self.session.headers.update({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
        self.test_results = []
        self.product_ids = []
        
    def log_result(self, test_name: str, passed: bool, details: str = ""):
        """Log test result"""
        status = "✅ PASS" if passed else "❌ FAIL"
        self.test_results.append({
            'test': test_name,
            'passed': passed,
            'details': details
        })
        print(f"{status}: {test_name}")
        if details:
            print(f"   Details: {details}")
        print()
    
    def test_root_endpoint(self):
        """Test GET /api/ endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/")
            
            if response.status_code == 200:
                data = response.json()
                expected_message = "Phagoli API"
                expected_whatsapp = "+91 99999 96287"
                
                if (data.get("message") == expected_message and 
                    data.get("whatsapp") == expected_whatsapp):
                    self.log_result("Root endpoint", True, f"Response: {data}")
                else:
                    self.log_result("Root endpoint", False, 
                                  f"Unexpected response: {data}")
            else:
                self.log_result("Root endpoint", False, 
                              f"Status: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_result("Root endpoint", False, f"Exception: {str(e)}")
    
    def test_whatsapp_config(self):
        """Test GET /api/whatsapp-config endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/whatsapp-config")
            
            if response.status_code == 200:
                data = response.json()
                expected_number = "919999996287"
                expected_display = "+91 99999 96287"
                
                if (data.get("number") == expected_number and 
                    data.get("display") == expected_display):
                    self.log_result("WhatsApp config", True, f"Response: {data}")
                else:
                    self.log_result("WhatsApp config", False, 
                                  f"Unexpected response: {data}")
            else:
                self.log_result("WhatsApp config", False, 
                              f"Status: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_result("WhatsApp config", False, f"Exception: {str(e)}")
    
    def test_products_list(self):
        """Test GET /api/products endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/products")
            
            if response.status_code == 200:
                data = response.json()
                
                if len(data) == 29:
                    # Check required fields in first product
                    if data:
                        product = data[0]
                        required_fields = ['id', 'category_id', 'name', 'description', 
                                         'price', 'unit', 'image', 'in_stock', 'created_at']
                        
                        missing_fields = [field for field in required_fields 
                                        if field not in product]
                        
                        if not missing_fields:
                            # Store product IDs for later tests
                            self.product_ids = [p['id'] for p in data]
                            self.log_result("Products list", True, 
                                          f"Found {len(data)} products with all required fields")
                        else:
                            self.log_result("Products list", False, 
                                          f"Missing fields: {missing_fields}")
                    else:
                        self.log_result("Products list", False, "Empty product list")
                else:
                    self.log_result("Products list", False, 
                                  f"Expected 29 products, got {len(data)}")
            else:
                self.log_result("Products list", False, 
                              f"Status: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_result("Products list", False, f"Exception: {str(e)}")
    
    def test_products_by_category(self):
        """Test GET /api/products?category=<category> for all categories"""
        categories = {
            'dairy': 5,
            'poultry': 4,
            'produce': 5,
            'grains': 5,
            'specialties': 5,
            'pooja': 5
        }
        
        for category, expected_count in categories.items():
            try:
                response = self.session.get(f"{self.base_url}/products", 
                                          params={'category': category})
                
                if response.status_code == 200:
                    data = response.json()
                    
                    if len(data) == expected_count:
                        # Verify all products belong to the category
                        all_correct_category = all(p.get('category_id') == category 
                                                 for p in data)
                        if all_correct_category:
                            self.log_result(f"Products category '{category}'", True, 
                                          f"Found {len(data)} products")
                        else:
                            self.log_result(f"Products category '{category}'", False, 
                                          "Some products have wrong category")
                    else:
                        self.log_result(f"Products category '{category}'", False, 
                                      f"Expected {expected_count}, got {len(data)}")
                else:
                    self.log_result(f"Products category '{category}'", False, 
                                  f"Status: {response.status_code}")
            except Exception as e:
                self.log_result(f"Products category '{category}'", False, 
                              f"Exception: {str(e)}")
    
    def test_single_product(self):
        """Test GET /api/products/{id} endpoint"""
        if not self.product_ids:
            self.log_result("Single product", False, "No product IDs available")
            return
        
        # Test with valid product ID
        try:
            product_id = self.product_ids[0]
            response = self.session.get(f"{self.base_url}/products/{product_id}")
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ['id', 'category_id', 'name', 'description', 
                                 'price', 'unit', 'image', 'in_stock', 'created_at']
                
                missing_fields = [field for field in required_fields 
                                if field not in data]
                
                if not missing_fields and data['id'] == product_id:
                    self.log_result("Single product (valid ID)", True, 
                                  f"Product: {data['name']}")
                else:
                    self.log_result("Single product (valid ID)", False, 
                                  f"Missing fields or wrong ID: {missing_fields}")
            else:
                self.log_result("Single product (valid ID)", False, 
                              f"Status: {response.status_code}")
        except Exception as e:
            self.log_result("Single product (valid ID)", False, f"Exception: {str(e)}")
        
        # Test with invalid product ID (404)
        try:
            fake_id = "fake-product-id-12345"
            response = self.session.get(f"{self.base_url}/products/{fake_id}")
            
            if response.status_code == 404:
                self.log_result("Single product (404 test)", True, 
                              "Correctly returned 404 for fake ID")
            else:
                self.log_result("Single product (404 test)", False, 
                              f"Expected 404, got {response.status_code}")
        except Exception as e:
            self.log_result("Single product (404 test)", False, f"Exception: {str(e)}")
    
    def test_create_order(self):
        """Test POST /api/orders endpoint"""
        if len(self.product_ids) < 2:
            self.log_result("Create order", False, "Need at least 2 product IDs")
            return
        
        # Valid order test
        order_data = {
            "items": [
                {
                    "product_id": self.product_ids[0],
                    "name": "A2 Desi Cow Milk",
                    "unit": "1 litre",
                    "price": 120,
                    "qty": 2
                },
                {
                    "product_id": self.product_ids[1],
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
        
        try:
            response = self.session.post(f"{self.base_url}/orders", 
                                       json=order_data)
            
            if response.status_code == 200:
                data = response.json()
                expected_subtotal = 460  # (120*2) + (220*1)
                
                required_fields = ['id', 'order_code', 'subtotal', 'whatsapp_url']
                missing_fields = [field for field in required_fields 
                                if field not in data]
                
                if not missing_fields:
                    # Verify order code format (PHG-YYYYMMDD-XXXX)
                    order_code = data['order_code']
                    code_valid = (order_code.startswith('PHG-') and 
                                len(order_code) == 17 and 
                                order_code[4:12].isdigit())
                    
                    # Verify subtotal
                    subtotal_correct = data['subtotal'] == expected_subtotal
                    
                    # Verify WhatsApp URL
                    whatsapp_url = data['whatsapp_url']
                    url_valid = (whatsapp_url.startswith('https://wa.me/919999996287?text=') and
                               urllib.parse.quote('Namaste Phagoli!') in whatsapp_url)
                    
                    if code_valid and subtotal_correct and url_valid:
                        self.log_result("Create order (valid)", True, 
                                      f"Order: {order_code}, Subtotal: ₹{data['subtotal']}")
                    else:
                        issues = []
                        if not code_valid: issues.append("invalid order code")
                        if not subtotal_correct: issues.append(f"wrong subtotal: {data['subtotal']}")
                        if not url_valid: issues.append("invalid WhatsApp URL")
                        self.log_result("Create order (valid)", False, 
                                      f"Issues: {', '.join(issues)}")
                else:
                    self.log_result("Create order (valid)", False, 
                                  f"Missing fields: {missing_fields}")
            else:
                self.log_result("Create order (valid)", False, 
                              f"Status: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_result("Create order (valid)", False, f"Exception: {str(e)}")
    
    def test_order_validation(self):
        """Test POST /api/orders validation"""
        # Test empty items array
        try:
            empty_items_data = {
                "items": [],
                "customer": {
                    "name": "Test User",
                    "phone": "+91 9876543210"
                }
            }
            response = self.session.post(f"{self.base_url}/orders", 
                                       json=empty_items_data)
            
            if response.status_code == 400:
                self.log_result("Order validation (empty items)", True, 
                              "Correctly rejected empty items")
            else:
                self.log_result("Order validation (empty items)", False, 
                              f"Expected 400, got {response.status_code}")
        except Exception as e:
            self.log_result("Order validation (empty items)", False, f"Exception: {str(e)}")
        
        # Test missing customer name
        try:
            missing_name_data = {
                "items": [{"product_id": "test", "name": "Test", "unit": "1", "price": 100, "qty": 1}],
                "customer": {
                    "phone": "+91 9876543210"
                }
            }
            response = self.session.post(f"{self.base_url}/orders", 
                                       json=missing_name_data)
            
            if response.status_code == 400:
                self.log_result("Order validation (missing name)", True, 
                              "Correctly rejected missing name")
            else:
                self.log_result("Order validation (missing name)", False, 
                              f"Expected 400, got {response.status_code}")
        except Exception as e:
            self.log_result("Order validation (missing name)", False, f"Exception: {str(e)}")
        
        # Test missing customer phone
        try:
            missing_phone_data = {
                "items": [{"product_id": "test", "name": "Test", "unit": "1", "price": 100, "qty": 1}],
                "customer": {
                    "name": "Test User"
                }
            }
            response = self.session.post(f"{self.base_url}/orders", 
                                       json=missing_phone_data)
            
            if response.status_code == 400:
                self.log_result("Order validation (missing phone)", True, 
                              "Correctly rejected missing phone")
            else:
                self.log_result("Order validation (missing phone)", False, 
                              f"Expected 400, got {response.status_code}")
        except Exception as e:
            self.log_result("Order validation (missing phone)", False, f"Exception: {str(e)}")
    
    def test_enquiries(self):
        """Test POST /api/enquiries for all 4 types"""
        enquiry_types = [
            {
                "type": "booking",
                "data": {
                    "room": "Deluxe Cottage",
                    "name": "Priya Sharma",
                    "phone": "+91 9876543210",
                    "checkin": "2024-03-15",
                    "checkout": "2024-03-17",
                    "guests": "2 adults"
                }
            },
            {
                "type": "experience",
                "data": {
                    "experience": "Farm Tour & Cooking",
                    "name": "Amit Patel",
                    "phone": "+91 9876543211",
                    "date": "2024-03-20",
                    "guests": "4 people"
                }
            },
            {
                "type": "partnership",
                "data": {
                    "kind": "Organic Supplier",
                    "name": "Rajesh Gupta",
                    "phone": "+91 9876543212",
                    "company": "Green Valley Farms"
                }
            },
            {
                "type": "contact",
                "data": {
                    "name": "Sunita Devi",
                    "email": "sunita@example.com",
                    "phone": "+91 9876543213",
                    "interest": "Bulk Orders",
                    "message": "Interested in monthly dairy supply for our restaurant"
                }
            }
        ]
        
        for enquiry in enquiry_types:
            try:
                response = self.session.post(f"{self.base_url}/enquiries", 
                                           json=enquiry)
                
                if response.status_code == 200:
                    data = response.json()
                    required_fields = ['id', 'whatsapp_url']
                    missing_fields = [field for field in required_fields 
                                    if field not in data]
                    
                    if not missing_fields:
                        # Verify WhatsApp URL
                        whatsapp_url = data['whatsapp_url']
                        url_valid = whatsapp_url.startswith('https://wa.me/919999996287?text=')
                        
                        if url_valid:
                            self.log_result(f"Enquiry ({enquiry['type']})", True, 
                                          f"Created with ID: {data['id']}")
                        else:
                            self.log_result(f"Enquiry ({enquiry['type']})", False, 
                                          "Invalid WhatsApp URL")
                    else:
                        self.log_result(f"Enquiry ({enquiry['type']})", False, 
                                      f"Missing fields: {missing_fields}")
                else:
                    self.log_result(f"Enquiry ({enquiry['type']})", False, 
                                  f"Status: {response.status_code}, Response: {response.text}")
            except Exception as e:
                self.log_result(f"Enquiry ({enquiry['type']})", False, f"Exception: {str(e)}")
    
    def test_enquiry_validation(self):
        """Test POST /api/enquiries validation"""
        # Test empty data
        try:
            empty_data = {
                "type": "contact",
                "data": {}
            }
            response = self.session.post(f"{self.base_url}/enquiries", 
                                       json=empty_data)
            
            if response.status_code == 400:
                self.log_result("Enquiry validation (empty data)", True, 
                              "Correctly rejected empty data")
            else:
                self.log_result("Enquiry validation (empty data)", False, 
                              f"Expected 400, got {response.status_code}")
        except Exception as e:
            self.log_result("Enquiry validation (empty data)", False, f"Exception: {str(e)}")
        
        # Test invalid type
        try:
            invalid_type_data = {
                "type": "random",
                "data": {"name": "Test", "phone": "123"}
            }
            response = self.session.post(f"{self.base_url}/enquiries", 
                                       json=invalid_type_data)
            
            if response.status_code in [400, 422]:
                self.log_result("Enquiry validation (invalid type)", True, 
                              f"Correctly rejected invalid type (status: {response.status_code})")
            else:
                self.log_result("Enquiry validation (invalid type)", False, 
                              f"Expected 400/422, got {response.status_code}")
        except Exception as e:
            self.log_result("Enquiry validation (invalid type)", False, f"Exception: {str(e)}")
    
    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 Starting Phagoli Backend API Tests")
        print(f"Testing against: {self.base_url}")
        print("=" * 60)
        
        # Run tests in order
        self.test_root_endpoint()
        self.test_whatsapp_config()
        self.test_products_list()
        self.test_products_by_category()
        self.test_single_product()
        self.test_create_order()
        self.test_order_validation()
        self.test_enquiries()
        self.test_enquiry_validation()
        
        # Summary
        print("=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        
        passed = sum(1 for result in self.test_results if result['passed'])
        total = len(self.test_results)
        
        print(f"Total Tests: {total}")
        print(f"Passed: {passed}")
        print(f"Failed: {total - passed}")
        print(f"Success Rate: {(passed/total)*100:.1f}%")
        
        if total - passed > 0:
            print("\n❌ FAILED TESTS:")
            for result in self.test_results:
                if not result['passed']:
                    print(f"  • {result['test']}: {result['details']}")
        
        return passed == total

if __name__ == "__main__":
    tester = PhagoliBETest()
    success = tester.run_all_tests()
    sys.exit(0 if success else 1)