const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ──────────────── PRODUCT DATA ────────────────

const products = [
  {
    id: 'watch-001',
    name: 'Apex Chronograph',
    brand: 'Apex',
    category: 'chronograph',
    gender: 'men',
    price: 2499.00,
    description: 'A masterpiece of precision engineering, the Apex Chronograph features a stainless steel case, sapphire crystal, and a Swiss automatic movement with a 48-hour power reserve.',
    specs: {
      movement: 'Swiss Automatic',
      caseSize: '42mm',
      caseMaterial: 'Stainless Steel',
      crystal: 'Sapphire',
      waterResistance: '100m',
      strap: 'Leather'
    },
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80',
    stock: 8,
    featured: true
  },
  {
    id: 'watch-002',
    name: 'Nautilus Diver',
    brand: 'Nautilus',
    category: 'diver',
    gender: 'men',
    price: 1899.00,
    description: 'Built for the depths, the Nautilus Diver combines rugged durability with refined style. Water-resistant to 300 meters with a unidirectional rotating bezel and luminous markers.',
    specs: {
      movement: 'Automatic',
      caseSize: '44mm',
      caseMaterial: 'Titanium',
      crystal: 'Sapphire',
      waterResistance: '300m',
      strap: 'Rubber'
    },
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=80',
    stock: 12,
    featured: true
  },
  {
    id: 'watch-003',
    name: 'Celeste Dress Watch',
    brand: 'Celeste',
    category: 'dress',
    gender: 'women',
    price: 3299.00,
    description: 'Elegance personified. The Celeste Dress Watch features a mother-of-pearl dial, diamond hour markers, and an 18k rose gold-plated case — perfect for gala evenings.',
    specs: {
      movement: 'Quartz',
      caseSize: '34mm',
      caseMaterial: '18k Rose Gold-Plated',
      crystal: 'Sapphire',
      waterResistance: '30m',
      strap: 'Satin'
    },
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&q=80',
    stock: 5,
    featured: true
  },
  {
    id: 'watch-004',
    name: 'Titanium Sport',
    brand: 'Nautilus',
    category: 'sport',
    gender: 'men',
    price: 1299.00,
    description: 'Lightweight, tough, and ready for action. The Titanium Sport features a chronograph function, tachymeter bezel, and a comfortable titanium bracelet.',
    specs: {
      movement: 'Quartz Chronograph',
      caseSize: '45mm',
      caseMaterial: 'Titanium',
      crystal: 'Mineral',
      waterResistance: '200m',
      strap: 'Titanium Bracelet'
    },
    image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=600&q=80',
    stock: 15,
    featured: false
  },
  {
    id: 'watch-005',
    name: 'Heritage Classic',
    brand: 'Heritage',
    category: 'classic',
    gender: 'men',
    price: 4599.00,
    description: 'Timeless design meets modern craftsmanship. The Heritage Classic features a hand-wound mechanical movement visible through an exhibition caseback, with a genuine alligator strap.',
    specs: {
      movement: 'Hand-Wound Mechanical',
      caseSize: '40mm',
      caseMaterial: 'Stainless Steel',
      crystal: 'Sapphire',
      waterResistance: '50m',
      strap: 'Alligator Leather'
    },
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&q=80',
    stock: 3,
    featured: true
  },
  {
    id: 'watch-006',
    name: 'Luna Smart',
    brand: 'Luna',
    category: 'smart',
    gender: 'unisex',
    price: 799.00,
    description: 'The smartwatch that doesn\'t compromise on style. Luna Smart tracks your health, delivers notifications, and lasts 7 days on a single charge — all wrapped in a sleek, minimalist design.',
    specs: {
      movement: 'Digital',
      caseSize: '41mm',
      caseMaterial: 'Aluminum',
      crystal: 'Gorilla Glass',
      waterResistance: '50m',
      strap: 'Silicone'
    },
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    stock: 25,
    featured: false
  },
  {
    id: 'watch-007',
    name: 'Apex GMT Master',
    brand: 'Apex',
    category: 'chronograph',
    gender: 'men',
    price: 3899.00,
    description: 'Track multiple time zones with the Apex GMT Master. Its dual-color ceramic bezel and independent 24-hour hand make it the ultimate traveler\'s companion.',
    specs: {
      movement: 'Swiss Automatic GMT',
      caseSize: '42mm',
      caseMaterial: 'Stainless Steel',
      crystal: 'Sapphire',
      waterResistance: '100m',
      strap: 'Stainless Steel Bracelet'
    },
    image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600&q=80',
    stock: 6,
    featured: true
  },
  {
    id: 'watch-008',
    name: 'Celeste Mini',
    brand: 'Celeste',
    category: 'dress',
    gender: 'women',
    price: 2199.00,
    description: 'A petite masterpiece. The Celeste Mini features a delicate 28mm case with a champagne sunburst dial and diamond-accented bezel.',
    specs: {
      movement: 'Quartz',
      caseSize: '28mm',
      caseMaterial: 'Stainless Steel',
      crystal: 'Sapphire',
      waterResistance: '30m',
      strap: 'Stainless Steel & Gold Bracelet'
    },
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&q=80',
    stock: 7,
    featured: false
  },
  {
    id: 'watch-009',
    name: 'Nautilus Field',
    brand: 'Nautilus',
    category: 'sport',
    gender: 'men',
    price: 1599.00,
    description: 'Inspired by military field watches, the Nautilus Field combines rugged legibility with a clean, no-nonsense design. Perfect for outdoor adventures.',
    specs: {
      movement: 'Automatic',
      caseSize: '40mm',
      caseMaterial: 'Stainless Steel',
      crystal: 'Sapphire',
      waterResistance: '150m',
      strap: 'NATO Nylon'
    },
    image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=600&q=80',
    stock: 10,
    featured: false
  },
  {
    id: 'watch-010',
    name: 'Heritage Skeleton',
    brand: 'Heritage',
    category: 'classic',
    gender: 'unisex',
    price: 6299.00,
    description: 'See the art of watchmaking in motion. The Heritage Skeleton reveals its intricate hand-finished movement through an open-worked dial — a true conversation piece.',
    specs: {
      movement: 'Hand-Wound Skeleton',
      caseSize: '41mm',
      caseMaterial: '18k Rose Gold',
      crystal: 'Sapphire (Front & Back)',
      waterResistance: '30m',
      strap: 'Crocodile Leather'
    },
    image: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=600&q=80',
    stock: 2,
    featured: true
  },
  {
    id: 'watch-011',
    name: 'Luna Active',
    brand: 'Luna',
    category: 'smart',
    gender: 'women',
    price: 649.00,
    description: 'Fitness meets fashion. Luna Active offers GPS tracking, heart rate monitoring, and a vibrant AMOLED display in a slim, elegant profile designed for smaller wrists.',
    specs: {
      movement: 'Digital',
      caseSize: '38mm',
      caseMaterial: 'Aluminum',
      crystal: 'Gorilla Glass',
      waterResistance: '50m',
      strap: 'Woven Nylon'
    },
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&q=80',
    stock: 18,
    featured: false
  },
  {
    id: 'watch-012',
    name: 'Apex Racer',
    brand: 'Apex',
    category: 'chronograph',
    gender: 'men',
    price: 5299.00,
    description: 'Born on the racetrack. The Apex Racer features a flyback chronograph, carbon fiber dial, and a ceramic tachymeter bezel — built for those who live in the fast lane.',
    specs: {
      movement: 'Swiss Automatic Flyback',
      caseSize: '44mm',
      caseMaterial: 'Ceramic & Titanium',
      crystal: 'Sapphire',
      waterResistance: '100m',
      strap: 'Perforated Leather'
    },
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&q=80',
    stock: 4,
    featured: true
  }
];

// In-memory order store
const orders = [];

// ──────────────── PRODUCT ROUTES ────────────────

// GET /api/products — list all products with optional filters
app.get('/api/products', (req, res) => {
  const { brand, category, gender, minPrice, maxPrice, search, featured } = req.query;

  let filtered = [...products];

  if (brand) {
    filtered = filtered.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
  }
  if (category) {
    filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }
  if (gender) {
    filtered = filtered.filter(p => p.gender.toLowerCase() === gender.toLowerCase());
  }
  if (minPrice) {
    filtered = filtered.filter(p => p.price >= parseFloat(minPrice));
  }
  if (maxPrice) {
    filtered = filtered.filter(p => p.price <= parseFloat(maxPrice));
  }
  if (search) {
    const term = search.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.brand.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term)
    );
  }
  if (featured === 'true') {
    filtered = filtered.filter(p => p.featured === true);
  }

  res.json({ products: filtered, total: filtered.length });
});

// GET /api/products/:id — single product
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

// GET /api/products/filters — available filter options
app.get('/api/filters', (req, res) => {
  const brands = [...new Set(products.map(p => p.brand))];
  const categories = [...new Set(products.map(p => p.category))];
  const genders = [...new Set(products.map(p => p.gender))];
  const priceRange = {
    min: Math.min(...products.map(p => p.price)),
    max: Math.max(...products.map(p => p.price))
  };
  res.json({ brands, categories, genders, priceRange });
});

// ──────────────── ORDER ROUTES ────────────────

// POST /api/orders — place an order
app.post('/api/orders', (req, res) => {
  const { items, shipping, billing } = req.body;

  // Validation
  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Order must contain at least one item.' });
  }
  if (!shipping || !shipping.firstName || !shipping.lastName || !shipping.address || !shipping.city || !shipping.email) {
    return res.status(400).json({ error: 'Shipping information is incomplete. Required fields: firstName, lastName, address, city, email.' });
  }

  // Validate each item & check stock
  let orderTotal = 0;
  const orderItems = [];

  for (const item of items) {
    const product = products.find(p => p.id === item.productId);
    if (!product) {
      return res.status(400).json({ error: `Product with ID "${item.productId}" not found.` });
    }
    const quantity = parseInt(item.quantity) || 1;
    if (quantity < 1 || quantity > product.stock) {
      return res.status(400).json({
        error: `Insufficient stock for "${product.name}". Requested: ${quantity}, Available: ${product.stock}.`
      });
    }
    const lineTotal = product.price * quantity;
    orderTotal += lineTotal;
    orderItems.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity,
      lineTotal
    });

    // Deduct stock
    product.stock -= quantity;
  }

  const order = {
    id: uuidv4(),
    items: orderItems,
    shipping,
    billing: billing || shipping,
    total: parseFloat(orderTotal.toFixed(2)),
    status: 'confirmed',
    createdAt: new Date().toISOString()
  };

  orders.push(order);

  res.status(201).json(order);
});

// GET /api/orders/:id — order lookup
app.get('/api/orders/:id', (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  if (!order) {
    return res.status(404).json({ error: 'Order not found.' });
  }
  res.json(order);
});

// ──────────────── START SERVER ────────────────

app.listen(PORT, () => {
  console.log(`⌚ Timepiece Emporium API running on http://localhost:${PORT}`);
});
