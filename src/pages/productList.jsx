import React, { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar';
import ProductCard from '../components/productCard';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); // ✅ new state

  // Fetch products from JSON Server
  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // ✅ Filter by name and category
  const filtered = products.filter(p => {
    const matchesName = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || p.category === selectedCategory;
    return matchesName && matchesCategory;
  });

  // ✅ Inline styles
  const styles = {
    container: {
      padding: '30px',
      fontFamily: 'Arial, sans-serif'
    },
    dropdown: {
      marginBottom: '20px',
      padding: '10px',
      borderRadius: '6px',
      border: '1px solid #ccc',
      fontSize: '16px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: 'cadetblue' }}>
        🪑 Our Furniture Collection
      </h2>

      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search for chairs, tables, etc."
      />

      {/*  Category dropdown */}
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
  );
}

export default ProductList;

const styles = {
  container: { padding: '20px' },
  filters: { display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }
};
