import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../utils/api';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => { getProducts({ featured: 'true' }).then(data => setProducts(data.products || [])).catch(() => {}); }, []);
  return <>
    <section className="hero"><div className="container hero__content"><p className="eyebrow">The art of keeping time</p><h1>Time is your<br /><em>greatest luxury.</em></h1><p>Discover carefully selected watches for every chapter, celebration, and everyday adventure.</p><Link className="button button--gold" to="/shop">Explore the collection</Link></div></section>
    <section className="container home-section"><p className="eyebrow">Curated for you</p><h2>Featured timepieces</h2><p className="section-copy">From hand-finished mechanical movements to modern smart companions.</p><div className="product-grid">{products.slice(0, 4).map(product => <ProductCard key={product.id} product={product} addToCart={() => {}} />)}</div></section>
    <section className="categories"><div className="container"><p className="eyebrow">Find your style</p><h2>Made for every moment</h2><div className="category-grid">{[['chronograph','Precision'],['diver','Adventure'],['dress','Elegance'],['smart','Connection']].map(([slug, title]) => <Link className="category-tile" key={slug} to={`/shop?category=${slug}`}><span>{title}</span><small>Shop {slug}s →</small></Link>)}</div></div></section>
  </>;
}
export default Home;
