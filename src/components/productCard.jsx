import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './button';

function ProductCard({ product, onAddToCart }) {
  const navigate = useNavigate();

  const styles = {
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    },
    image: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
      borderRadius: '8px'
    },
    name: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginTop: '10px',
      color: '#2c3e50'
    },
    price: {
      color: '#7f8c8d',
      marginBottom: '10px'
    },
    buttonGroup: {
      marginTop: '10px',
      display: 'flex',
      justifyContent: 'center',
      gap: '10px'
    }
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3 style={styles.name}>{product.name}</h3>
      <p style={styles.price}>Ksh {product.price?.toLocaleString()}</p>
      <div style={styles.buttonGroup}>
        <Button label="View Details" onClick={() => navigate(`/products/${product.id}`)} />
        {onAddToCart && <Button label="Add to Cart" onClick={onAddToCart} />}
      </div>
    </div>
  );
}

export default ProductCard;