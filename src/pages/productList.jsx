import { useEffect, useState } from 'react';
import ProductCard from '../components/productCard';
import SearchBar from '../components/searchBar';

function ProductList() {
  const [products, setProducts] = useState([]);         // All products from API
  const [filtered, setFiltered] = useState([]);         // Products after search/filter
  const [searchTerm, setSearchTerm] = useState('');     // Search input
  const [category, setCategory] = useState('All');       // Selected category
  const [maxPrice, setMaxPrice] = useState(100000);      // Price filter

  // Fetch products from JSON Server
  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  // Apply filters whenever search/category/price changes
  useEffect(() => {
    let result = products;

    // Filter by search
    if (searchTerm) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (category !== 'All') {
      result = result.filter(product => product.category === category);
    }

    // Filter by price
    result = result.filter(product => product.price <= maxPrice);

    setFiltered(result);
  }, [searchTerm, category, maxPrice, products]);

  return (
    <div style={styles.container}>
      <h2>🪑 Our Furniture Collection</h2>

      {/* Search bar */}
      <SearchBar onSearch={setSearchTerm} />

      {/* Filters */}
      <div style={styles.filters}>
        <label>
          Category:
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option>All</option>
            <option>Tables</option>
            <option>Chairs</option>
            <option>Sofas</option>
            <option>Beds</option>
          </select>
        </label>

        <label>
          Max Price:
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={maxPrice}
            onChange={e => setMaxPrice(Number(e.target.value))}
          />
          <span>KES {maxPrice.toLocaleString()}</span>
        </label>
      </div>

      {/* Product grid */}
      <div style={styles.grid}>
        {filtered.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
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
