import { useNavigate } from 'react-router-dom';
import Button from './button';// Make sure this path matches your folder structure

function ProductCard({ product }) {
  const navigate = useNavigate();

  // ✅ Safety check: avoid crashing if product is missing
  if (!product) {
    return <p>Product data is missing.</p>;
  }

  // Navigate to product details page
  const handleViewDetails = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div style={styles.card}>
      {/* Product image */}
      <img
        src={product.image || 'placeholder.jpg'} // fallback image
        alt={product.name || 'Furniture Item'}
        style={styles.image}
      />

      {/* Product name */}
      <h3 style={styles.name}>{product.name}</h3>

      {/* Product price */}
      <p style={styles.price}>Ksh {product.price?.toLocaleString()}</p>

      {/* View Details button */}
      <Button label="View Details" onClick={handleViewDetails} />
    </div>
  );
}

export default ProductCard;

// 🎨 Inline styles (you can move these to a CSS file later)
const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '4px'
  },
  name: {
    fontSize: '1.2rem',
    margin: '12px 0 8px'
  },
  price: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '12px'
  }
};
