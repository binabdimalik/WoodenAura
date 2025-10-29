import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './button';

function ProductCard({ product, onAddToCart }) {
  const navigate = useNavigate();

  const styles = {
    card: {
      background: '#FFF8F0', // soft off-white wood tone
      borderRadius: '12px',
      boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
      padding: '24px',
      textAlign: 'center',
      fontFamily: 'Segoe UI, sans-serif',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      maxWidth: '320px',
      margin: 'auto',
      cursor: 'pointer',
      border: '1px solid #D2691E'
    },
    cardHover: {
      transform: 'scale(1.02)',
      boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '10px',
      marginBottom: '12px'
    },
    name: {
      fontSize: '20px',
      fontWeight: '600',
      margin: '12px 0',
      color: '#D2691E' // chocolate brown
    },
    price: {
      fontSize: '16px',
      color: 'black', // gold
      marginBottom: '16px'
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: '12px',
      flexWrap: 'wrap'
    }
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const combinedCardStyle = isHovered
    ? { ...styles.card, ...styles.cardHover }
    : styles.card;

  return (
    <div
      style={combinedCardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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