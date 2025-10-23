import { useEffect, useState } from 'react';
import ProductCard from '../components/productCard';
import SearchBar from '../components/searchBar';

function ProductList() {
  const [products, setProducts] = useState([]);         // All products from API
  const [filtered, setFiltered] = useState([]);         // Products after search/filter
  const [searchTerm, setSearchTerm] = useState('');     // Search input
  const [category, setCategory] = useState('All');       // Selected category
  const [maxPrice, setMaxPrice] = useState(100000);      // Price filter

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

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
    <div className="product-list">
      <h2>Our Furniture Collection</h2>

      <SearchBar onSearch={setSearchTerm} />

      <div className="filters">
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
          <span>KES {maxPrice}</span>
        </label>
      </div>

      <div className="product-grid">
        {filtered.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filtered.map(product => (
            <ProductCard key={product.id} {...product} />
          ))
        )}
      </div>
    </div>
  );
}

export default ProductList;
