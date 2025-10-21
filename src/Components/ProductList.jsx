import React, {useState, useEffect} from 'react';
import './ProductList.css';

const ProductList = () => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <div className="product-price">KSh {product.price.toFixed(2)}</div>
          <button className="product-button">View Details</button>
        </div>
      ))}
    </div>

  );

const ProductList = ({ fetchUrl }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!fetchUrl) {
      setLoading(false);
      return;
    }
    fetch(fetchUrl)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [fetchUrl]);

  if (loading) return <div>Loading products…</div>;
  if (error) return <div>Error loading products: {error.message}</div>;
  if (products.length === 0) return <div>No products available.</div>;

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );

};

export default ProductList;
