"""Seed product catalog for Phagoli."""
from typing import List, Dict

SEED_PRODUCTS: List[Dict] = [
    # DAIRY
    {"category_id": "dairy", "name": "A2 Desi Cow Milk", "description": "Fresh A2 milk from grass-fed Sahiwal cows, bottled within the hour.", "price": 120, "unit": "1 litre", "image": "https://images.unsplash.com/photo-1569858241634-5aee6e47091a"},
    {"category_id": "dairy", "name": "Cultured Bilona Ghee", "description": "Hand-churned bilona ghee from A2 milk \u2014 nutty, aromatic, long-cooked.", "price": 900, "unit": "500 g jar", "image": "https://images.unsplash.com/photo-1553787434-45e1d245bfbb"},
    {"category_id": "dairy", "name": "Fresh Farm Paneer", "description": "Soft, full-fat paneer set daily from whole A2 milk. Zero additives.", "price": 220, "unit": "250 g", "image": "https://images.unsplash.com/photo-1744104135578-6768f2061be1"},
    {"category_id": "dairy", "name": "Probiotic Desi Curd", "description": "Naturally set dahi in clay pots \u2014 thick, live cultures, mildly tangy.", "price": 100, "unit": "500 g", "image": "https://images.unsplash.com/photo-1741515043161-e97d05e5cfcc"},
    {"category_id": "dairy", "name": "White Farm Butter", "description": "Churned fresh from malai \u2014 salted on request.", "price": 350, "unit": "200 g", "image": "https://images.pexels.com/photos/30448528/pexels-photo-30448528.jpeg"},

    # POULTRY
    {"category_id": "poultry", "name": "Free-Range Farm Eggs", "description": "Brown eggs from pasture-raised desi hens. Collected daily.", "price": 150, "unit": "12 pack", "image": "https://images.unsplash.com/photo-1553531009-c4605f302b47"},
    {"category_id": "poultry", "name": "Small Egg Box", "description": "Fresh farm eggs, perfect for small households.", "price": 80, "unit": "6 pack", "image": "https://images.unsplash.com/photo-1553531009-c4605f302b47"},
    {"category_id": "poultry", "name": "Desi Chicken (Dressed)", "description": "Slow-grown desi chicken, hormone free. Cleaned & cut on order.", "price": 550, "unit": "1 kg", "image": "https://images.unsplash.com/photo-1553531009-c4605f302b47"},
    {"category_id": "poultry", "name": "Duck Eggs", "description": "Richer, larger duck eggs \u2014 limited seasonal availability.", "price": 260, "unit": "6 pack", "image": "https://images.unsplash.com/photo-1553531009-c4605f302b47"},

    # PRODUCE
    {"category_id": "produce", "name": "Seasonal Veg Basket", "description": "A curated 5 kg basket of 6\u20138 seasonal organic vegetables from our permaculture plots.", "price": 650, "unit": "5 kg basket", "image": "https://images.pexels.com/photos/11798036/pexels-photo-11798036.jpeg"},
    {"category_id": "produce", "name": "Salad Microgreens", "description": "Freshly snipped microgreens \u2014 sunflower, pea shoots, radish, broccoli.", "price": 180, "unit": "100 g", "image": "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0"},
    {"category_id": "produce", "name": "Forest Mushroom Mix", "description": "Oyster, shiitake & button mushrooms grown in our shaded log bins.", "price": 280, "unit": "500 g", "image": "https://images.unsplash.com/photo-1741515043161-e97d05e5cfcc"},
    {"category_id": "produce", "name": "Tree-Ripened Fruit Box", "description": "Whatever is ripe on the tree \u2014 plums, peaches, pears, malta oranges.", "price": 550, "unit": "3 kg box", "image": "https://images.unsplash.com/photo-1553787434-45e1d245bfbb"},
    {"category_id": "produce", "name": "Heirloom Tomatoes", "description": "Open-pollinated heirloom varieties \u2014 tangy, sweet, for salads.", "price": 180, "unit": "1 kg", "image": "https://images.unsplash.com/photo-1741515043161-e97d05e5cfcc"},

    # GRAINS
    {"category_id": "grains", "name": "Stone-Ground Wheat Atta", "description": "Sharbati wheat, stone-milled weekly. Retains bran & germ.", "price": 450, "unit": "5 kg", "image": "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0"},
    {"category_id": "grains", "name": "Aromatic Basmati Rice", "description": "Long-grain aged basmati from Kumaon valleys \u2014 fragrant, fluffy.", "price": 700, "unit": "5 kg", "image": "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0"},
    {"category_id": "grains", "name": "Mandua (Ragi) Flour", "description": "Pahadi finger millet flour \u2014 earthy, rich in calcium.", "price": 180, "unit": "1 kg", "image": "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0"},
    {"category_id": "grains", "name": "Black Desi Chickpeas", "description": "Kala chana \u2014 unpolished, protein-rich, heritage variety.", "price": 220, "unit": "1 kg", "image": "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0"},
    {"category_id": "grains", "name": "Gahat (Horse Gram)", "description": "Pahadi gahat dal \u2014 protein powerhouse used in parathas & soups.", "price": 240, "unit": "1 kg", "image": "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0"},

    # SPECIALTIES
    {"category_id": "specialties", "name": "Raw Forest Honey", "description": "Wild, unfiltered honey from our hives on the forest edge. Crystallises naturally.", "price": 650, "unit": "500 g", "image": "https://images.unsplash.com/photo-1553787434-45e1d245bfbb"},
    {"category_id": "specialties", "name": "Himalayan Herbal Tea", "description": "Blend of tulsi, lemongrass, rose petals and mint from our garden.", "price": 280, "unit": "100 g", "image": "https://images.unsplash.com/photo-1553787434-45e1d245bfbb"},
    {"category_id": "specialties", "name": "Pahadi Mixed Pickle", "description": "Traditional Kumaoni achaar \u2014 bhang, timur, lingura. Small batch.", "price": 240, "unit": "250 g jar", "image": "https://images.unsplash.com/photo-1553787434-45e1d245bfbb"},
    {"category_id": "specialties", "name": "Organic Camphor Wafers", "description": "Bhimseni camphor \u2014 pure, crystalline, for pooja and aroma.", "price": 300, "unit": "50 g", "image": "https://images.pexels.com/photos/11798036/pexels-photo-11798036.jpeg"},
    {"category_id": "specialties", "name": "Cold-Pressed Mustard Oil", "description": "Wood-pressed kachi ghani mustard oil \u2014 pungent and nutty.", "price": 320, "unit": "1 litre", "image": "https://images.unsplash.com/photo-1553787434-45e1d245bfbb"},

    # POOJA
    {"category_id": "pooja", "name": "Cow-Dung Dhoop Cups", "description": "Dried desi cow-dung cups for hawan and daily pooja \u2014 zero chemicals.", "price": 180, "unit": "12 pieces", "image": "https://images.pexels.com/photos/37038407/pexels-photo-37038407.jpeg"},
    {"category_id": "pooja", "name": "Flower-Residue Agarbatti", "description": "Incense sticks hand-rolled from temple flower waste. Slow, fragrant burn.", "price": 120, "unit": "50 sticks", "image": "https://images.pexels.com/photos/7351728/pexels-photo-7351728.jpeg"},
    {"category_id": "pooja", "name": "Traditional Hawan Samagri", "description": "Nineteen-herb hawan mix blended with local resins and ghee.", "price": 280, "unit": "500 g", "image": "https://images.pexels.com/photos/37116934/pexels-photo-37116934.jpeg"},
    {"category_id": "pooja", "name": "Biodegradable Clay Idols", "description": "Handcrafted eco-friendly idols that dissolve in water without harming soil.", "price": 450, "unit": "each", "image": "https://images.unsplash.com/photo-1763475944771-702683b1b42c"},
    {"category_id": "pooja", "name": "Pure Ganga Jal", "description": "Sourced from the upper Ganga at Gomukh \u2014 sealed in copper-tinted glass.", "price": 220, "unit": "500 ml", "image": "https://images.unsplash.com/photo-1764304589223-30bfbfdaa9ef"},
]
