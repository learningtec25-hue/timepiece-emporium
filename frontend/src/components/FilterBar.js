import React from 'react';
import './FilterBar.css';

function FilterBar({ filters, setFilters, brands, categories, genders }) {
  const handleChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ brand: '', category: '', gender: '', minPrice: '', maxPrice: '', search: '' });
  };

  const hasFilters = filters.brand || filters.category || filters.gender || filters.minPrice || filters.maxPrice || filters.search;

  return (
    <div className="filter-bar">
      <div className="container filter-bar__inner">
        <div className="filter-bar__row">
          <div className="filter-bar__search">
            <input
              type="text"
              placeholder="Search watches..."
              value={filters.search}
              onChange={e => handleChange('search', e.target.value)}
            />
          </div>

          <select value={filters.brand} onChange={e => handleChange('brand', e.target.value)}>
            <option value="">All Brands</option>
            {brands.map(b => <option key={b} value={b}>{b}</option>)}
          </select>

          <select value={filters.category} onChange={e => handleChange('category', e.target.value)}>
            <option value="">All Categories</option>
            {categories.map(c => <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>)}
          </select>

          <select value={filters.gender} onChange={e => handleChange('gender', e.target.value)}>
            <option value="">All Genders</option>
            {genders.map(g => <option key={g} value={g}>{g.charAt(0).toUpperCase() + g.slice(1)}</option>)}
          </select>

          <div className="filter-bar__price">
            <input
              type="number"
              placeholder="Min $"
              value={filters.minPrice}
              onChange={e => handleChange('minPrice', e.target.value)}
            />
            <span>–</span>
            <input
              type="number"
              placeholder="Max $"
              value={filters.maxPrice}
              onChange={e => handleChange('maxPrice', e.target.value)}
            />
          </div>

          {hasFilters && (
            <button className="filter-bar__clear" onClick={clearFilters}>Clear</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
