"""Seed product catalog for Phagoli."""
from typing import List, Dict

SEED_PRODUCTS: List[Dict] = [
    # DAIRY
    {"category_id": "dairy", "name": "A2 Desi Cow Milk", "description": "Fresh A2 milk from grass-fed free range Desi Cows, bottled within the hour.", "price": 120, "unit": "1 litre", "image": "https://customer-assets.emergentagent.com/job_agro-store-10/artifacts/7wnf6yf2_A2%20Desi%20Cow%20Milk.jpeg"},
    {"category_id": "dairy", "name": "Cultured Bilona Ghee", "description": "Hand-churned bilona ghee from A2 milk \u2014 nutty, aromatic, long-cooked.", "price": 900, "unit": "500 g jar", "image": "https://images.unsplash.com/photo-1707425197195-240b7ad69047"},
    {"category_id": "dairy", "name": "Fresh Farm Paneer", "description": "Soft, full-fat paneer set daily from whole A2 milk. Zero additives.", "price": 220, "unit": "250 g", "image": "https://images.unsplash.com/photo-1642702602038-a8c777068f9f"},
    {"category_id": "dairy", "name": "Probiotic Desi Curd", "description": "Naturally set dahi in clay pots \u2014 thick, live cultures, mildly tangy.", "price": 100, "unit": "500 g", "image": "https://images.unsplash.com/photo-1581868164904-77b124b80242"},
    {"category_id": "dairy", "name": "White Farm Butter", "description": "Churned fresh from malai \u2014 salted on request.", "price": 350, "unit": "200 g", "image": "https://images.unsplash.com/photo-1587185717368-4d92f8de4ad2"},

    # PRODUCE
    {"category_id": "produce", "name": "Seasonal Veg Basket", "description": "A curated 5 kg basket of 6\u20138 seasonal organic vegetables from our permaculture plots.", "price": 650, "unit": "5 kg basket", "image": "https://images.unsplash.com/photo-1631021967261-c57ee4dfa9bb"},
    {"category_id": "produce", "name": "Salad Microgreens", "description": "Freshly snipped microgreens \u2014 sunflower, pea shoots, radish, broccoli.", "price": 180, "unit": "100 g", "image": "https://images.unsplash.com/photo-1535734668010-da0c7d3085f2"},
    {"category_id": "produce", "name": "Tree-Ripened Fruit Box", "description": "Whatever is ripe on the tree \u2014 plums, peaches, pears, malta oranges.", "price": 550, "unit": "3 kg box", "image": "https://images.unsplash.com/photo-1668029407328-4cba9084c3a4"},
    {"category_id": "produce", "name": "Heirloom Tomatoes", "description": "Open-pollinated heirloom varieties \u2014 tangy, sweet, for salads.", "price": 180, "unit": "1 kg", "image": "https://images.pexels.com/photos/32570774/pexels-photo-32570774.jpeg"},

    # GRAINS
    {"category_id": "grains", "name": "Stone-Ground Wheat Atta", "description": "Sharbati wheat, stone-milled weekly. Retains bran & germ.", "price": 450, "unit": "5 kg", "image": "https://images.unsplash.com/photo-1627485937980-221c88ac04f9"},
    {"category_id": "grains", "name": "Mandua (Ragi) Flour", "description": "Pahadi finger millet flour \u2014 earthy, rich in calcium.", "price": 180, "unit": "1 kg", "image": "https://images.unsplash.com/photo-1768729339998-909158957162"},
    {"category_id": "grains", "name": "Black Desi Chickpeas", "description": "Kala chana \u2014 unpolished, protein-rich, heritage variety.", "price": 220, "unit": "1 kg", "image": "https://images.pexels.com/photos/368689/pexels-photo-368689.jpeg"},
    {"category_id": "grains", "name": "Gahat (Horse Gram)", "description": "Pahadi gahat dal \u2014 protein powerhouse used in parathas & soups.", "price": 240, "unit": "1 kg", "image": "https://images.unsplash.com/photo-1763368392508-3d4bddfdd20a"},

    # SPECIALTIES
    {"category_id": "specialties", "name": "Raw Forest Honey", "description": "Wild, unfiltered honey from our hives on the forest edge. Crystallises naturally.", "price": 650, "unit": "500 g", "image": "https://images.unsplash.com/photo-1587049352851-8d4e89133924"},
    {"category_id": "specialties", "name": "Himalayan Herbal Tea", "description": "Blend of tulsi, lemongrass, rose petals and mint from our garden.", "price": 280, "unit": "100 g", "image": "https://images.unsplash.com/photo-1653937855510-ec3fd2036d98"},
    {"category_id": "specialties", "name": "Pahadi Mixed Pickle", "description": "Traditional achaar \u2014 galgal aam, nibu, tomato, chilli and seasonal adrak gajar achar.", "price": 240, "unit": "250 g jar", "image": "https://images.pexels.com/photos/35267279/pexels-photo-35267279.jpeg"},
    {"category_id": "specialties", "name": "Organic Camphor Wafers", "description": "Bhimseni camphor \u2014 pure, crystalline, for pooja and aroma.", "price": 300, "unit": "50 g", "image": "https://images.unsplash.com/photo-1540322112357-ebf4f8bfa63c"},
    {"category_id": "specialties", "name": "Cold-Pressed Mustard Oil", "description": "Wood-pressed kachi ghani mustard oil \u2014 pungent and nutty.", "price": 320, "unit": "1 litre", "image": "https://images.pexels.com/photos/12284682/pexels-photo-12284682.jpeg"},

    # POOJA (Pure Ganga Jal removed per request)
    {"category_id": "pooja", "name": "Cow-Dung Dhoop Cups", "description": "Dried desi cow-dung cups for hawan and daily pooja \u2014 zero chemicals.", "price": 180, "unit": "12 pieces", "image": "https://images.pexels.com/photos/37271694/pexels-photo-37271694.jpeg"},
    {"category_id": "pooja", "name": "Flower-Residue Agarbatti", "description": "Incense sticks hand-rolled from temple flower waste. Slow, fragrant burn.", "price": 120, "unit": "50 sticks", "image": "https://images.pexels.com/photos/35971137/pexels-photo-35971137.jpeg"},
    {"category_id": "pooja", "name": "Traditional Hawan Samagri", "description": "Nineteen-herb hawan mix blended with local resins and ghee.", "price": 280, "unit": "500 g", "image": "https://images.pexels.com/photos/37116934/pexels-photo-37116934.jpeg"},
    {"category_id": "pooja", "name": "Biodegradable Clay Idols", "description": "Handcrafted eco-friendly idols that dissolve in water without harming soil.", "price": 450, "unit": "each", "image": "https://images.pexels.com/photos/33626434/pexels-photo-33626434.jpeg"},
]
