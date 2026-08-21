# Timepiece Emporium

A polished watch-selling storefront built with React and an Express API.

## Features

- Luxury editorial-style homepage
- Watch catalog with search and filters
- Product detail pages with specifications and stock
- Persistent local shopping cart
- Checkout form with order validation
- Order confirmation screen
- Product and order REST API

## Run locally

### 1. Start the backend

```bash
cd backend
npm install
npm start
```

The API runs at `http://localhost:5000`.

### 2. Start the frontend

In a second terminal:

```bash
cd frontend
npm install
npm start
```

The storefront runs at `http://localhost:3000`.

## API endpoints

- `GET /api/products`
- `GET /api/products/:id`
- `GET /api/filters`
- `POST /api/orders`
- `GET /api/orders/:id`

## Production notes

This version uses an in-memory order store and mock checkout flow. Before accepting real payments, connect a payment provider such as Stripe, move products and orders into a database, add authentication/admin inventory management, and configure production environment variables.
