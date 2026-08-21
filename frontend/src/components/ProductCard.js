import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product, addToCart }) {
  const formatPrice = (price) => `$${price.toLocaleString()}`;

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card__image-wrap">
        <img src={product.image} alt={product.name} className="product-card__image" loading="lazy" />
        {product.featured && <span className="product-card__featured">Featured</span>}
      </Link>
      <div className="product-card__body">
        <p className="product-card__brand">{product.brand}</p>
        <Link to={`/product/${product.id}`} className="product-card__name">{product.name}</Link>
        <p className="product-card__price">{formatPrice(product.price)}</p>
        <button
          className="product-card__btn"
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
