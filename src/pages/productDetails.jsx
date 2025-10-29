import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/button';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

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
      maxWidth: '600px',
      backgroundColor: '#FFF8F0',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
      fontFamily: 'Segoe UI, sans-serif',
      textAlign: 'center',
      boxSizing: 'border-box',
      height: '100%',
      flex: 1
    },
    image: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      borderRadius: '10px',
      marginBottom: '20px'
    },
    title: {
      fontSize: '26px',
      fontWeight: '700',
      marginBottom: '12px',
      color: '#D2691E'
    },
    price: {
      fontSize: '18px',
      color: 'black',
      marginBottom: '16px'
    },
    description: {
      fontSize: '16px',
      color: '#4B3F2F',
      marginBottom: '24px',
      lineHeight: '1.6'
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <h2 style={styles.title}>{product.name}</h2>
        <p style={styles.price}>Ksh {product.price?.toLocaleString()}</p>
        <p style={styles.description}>{product.description}</p>
        <Button label="Add to Cart" onClick={() => alert('Added to cart!')} />
      </div>
    </div>
  );
}

export default ProductDetails;