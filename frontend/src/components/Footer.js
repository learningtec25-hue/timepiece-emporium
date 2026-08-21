import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <h3 className="footer__logo">⌚ Timepiece Emporium</h3>
          <p className="footer__tagline">Crafting moments, one timepiece at a time.</p>
        </div>
        <div className="footer__links">
          <h4>Shop</h4>
          <Link to="/shop">All Watches</Link>
          <Link to="/shop?category=chronograph">Chronographs</Link>
          <Link to="/shop?category=diver">Divers</Link>
          <Link to="/shop?category=dress">Dress</Link>
        </div>
        <div className="footer__links">
          <h4>Customer Care</h4>
          <a href="#!">Shipping & Returns</a>
          <a href="#!">Warranty</a>
          <a href="#!">FAQs</a>
          <a href="#!">Contact Us</a>
        </div>
        <div className="footer__newsletter">
          <h4>Stay in the loop</h4>
          <p>Subscribe for exclusive offers and new arrivals.</p>
          <form className="footer__form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Timepiece Emporium. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
