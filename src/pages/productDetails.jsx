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
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    },
    image: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
      borderRadius: '8px'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginTop: '20px',
      color: '#2c3e50'
    },
    price: {
      color: '#7f8c8d',
      fontSize: '18px'
    },
    description: {
      marginTop: '10px',
      fontSize: '16px',
      color: 'black'
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h2 style={styles.title}>{product.name}</h2>
      <p style={styles.price}>Ksh {product.price?.toLocaleString()}</p>
      <p style={styles.description}>{product.description}</p>
      <Button label="Add to Cart" onClick={() => alert('Added to cart!')} />
    </div>
  );
}

export default ProductDetails;
