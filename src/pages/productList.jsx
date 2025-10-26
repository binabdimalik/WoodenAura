import React, { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar';
import ProductCard from '../components/productCard';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filtered = products.filter(p => {
    const matchesName = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || p.category === selectedCategory;
    return matchesName && matchesCategory;
  });

  const styles = {
    wrapper: {
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(to right, #FFF8F0, #FFE4C4)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start', // changed from center
      padding: '40px 0',
      boxSizing: 'border-box',
      overflowY: 'auto'
    },
    container: {
      width: '90vw',
      maxWidth: '1200px',
      padding: '40px 24px',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#FFF8F0',
      borderRadius: '12px',
      boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
      boxSizing: 'border-box',
      height: '100%',
      flex: 1
    },
    title: {
      fontSize: '28px',
      fontWeight: '700',
      marginBottom: '24px',
      color: '#D2691E',
      textAlign: 'center'
    },
    dropdown: {
      marginBottom: '24px',
      padding: '12px 16px',
      borderRadius: '8px',
      border: '1px solid #D2691E',
      fontSize: '16px',
      fontFamily: 'Segoe UI, sans-serif',
      boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
      outline: 'none',
      backgroundColor: '#FFF8F0',
      color: '#4B3F2F',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
      marginTop: '20px'
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.title}>🪑 Our Furniture Collection</h2>

        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search for chairs, tables, etc."
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={styles.dropdown}
        >
          <option value="">All Categories</option>
          <option value="Storage">Storage</option>
          <option value="Dining">Dining</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Living Room">Living Room</option>
        </select>

        <div style={styles.grid}>
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} category={product.category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;