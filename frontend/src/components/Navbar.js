import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">⌚</span>
          <span className="navbar__logo-text">Timepiece <span>Emporium</span></span>
        </Link>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'} onClick={() => setMenuOpen(false)} end>Home</NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'} onClick={() => setMenuOpen(false)}>Shop</NavLink>
          <NavLink to="/cart" className={({ isActive }) => isActive ? 'navbar__link navbar__link--cart navbar__link--active' : 'navbar__link navbar__link--cart'} onClick={() => setMenuOpen(false)}>
            Cart
            {cartCount > 0 && <span className="navbar__cart-badge">{cartCount}</span>}
          </NavLink>
        </nav>

        <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`navbar__toggle-bar ${menuOpen ? 'navbar__toggle-bar--open' : ''}`}></span>
          <span className={`navbar__toggle-bar ${menuOpen ? 'navbar__toggle-bar--open' : ''}`}></span>
          <span className={`navbar__toggle-bar ${menuOpen ? 'navbar__toggle-bar--open' : ''}`}></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
