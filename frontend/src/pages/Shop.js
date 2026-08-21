import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';
import { getProducts } from '../utils/api';
import './Shop.css';

function Shop({ addToCart }) {
  const [params] = useSearchParams(); const [products,setProducts]=useState([]); const [meta,setMeta]=useState({}); const [filters,setFilters]=useState({brand:'',category:params.get('category')||'',gender:'',minPrice:'',maxPrice:'',search:''}); const [loading,setLoading]=useState(true); const [error,setError]=useState('');
  useEffect(()=>{setLoading(true);getProducts(filters).then(data=>{setProducts(data.products||[]);setMeta(data)}).catch(e=>setError(e.message)).finally(()=>setLoading(false))},[filters]);
  const brands=useMemo(()=>[...new Set(products.map(p=>p.brand))],[products]); const categories=useMemo(()=>[...new Set(products.map(p=>p.category))],[products]); const genders=useMemo(()=>[...new Set(products.map(p=>p.gender))],[products]);
  return <><div className="shop-heading container"><p className="eyebrow">Our collection</p><h1>Find your timepiece</h1><p>Every watch is selected for its character, craftsmanship, and enduring appeal.</p></div><FilterBar filters={filters} setFilters={setFilters} brands={brands} categories={categories} genders={genders}/><main className="container shop-results"><div className="shop-results__top"><span>{meta.total || 0} watches</span></div>{loading?<p className="message">Loading collection…</p>:error?<p className="message error">{error}. Please start the backend on port 5000.</p>:products.length?<div className="product-grid">{products.map(p=><ProductCard key={p.id} product={p} addToCart={addToCart}/>)}</div>:<p className="message">No watches match those filters.</p>}</main></>;
}
export default Shop;
