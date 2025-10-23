import React from 'react';
import Button from './button'; // Reusable button component
import { useNavigate } from 'react-router-dom'; // For navigation to ProductDetails

function ProductCard({ product }) {
  const navigate = useNavigate();// This lets us change the page using code, like when someone clicks a button

  // Function to handle "View Details" button click
  const handleViewDetails = () => {
    // Navigate to the product details page using the product ID
    navigate(`/products/${product.id}`);
  };

  return (
    <div style={styles.card}>
      {/* Product image */}
      <img
        src={product.image}
        alt={product.name}
        style={styles.image}
      />

      {/* Product name */}
      <h3 style={styles.name}>{product.name}</h3>

      {/* Product price */}
      <p style={styles.price}>Ksh {product.price.toLocaleString()}</p>

      {/* View Details button */}
      <Button label="View Details" onClick={handleViewDetails} />
    </div>
  );
}

// Inline styles for layout and design
const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '6px',
  },
  name: {
    fontSize: '18px',
    margin: '12px 0 6px',
  },
  price: {
    fontSize: '16px',
    color: '#444',
    marginBottom: '12px',
  },
};

export default ProductCard;