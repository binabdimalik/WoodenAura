import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/productCard';
import Button from '../components/button';

function Home() {
  const [featured, setFeatured] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/products?_limit=3')
      .then(res => res.json())
      .then(data => setFeatured(data));
  }, []);

  const styles = {
    wrapper: {
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(to right, #FFF8F0, #FFE4C4)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px 0',
      boxSizing: 'border-box'
    },
    container: {
      width: '90vw',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 24px',
      fontFamily: 'Segoe UI, sans-serif',
      textAlign: 'center',
      backgroundColor: '#FFF8F0',
      borderRadius: '12px',
      boxShadow: '0 6px 16px rgba(0,0,0,0.08)'
    },
    title: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#D2691E',
      marginBottom: '12px'
    },
    subtitle: {
      fontSize: '18px',
      color: '#4B3F2F',
      marginBottom: '32px'
    },
    sectionTitle: {
      fontSize: '24px',
      fontWeight: '600',
      marginBottom: '24px',
      color: '#A0522D'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
      marginBottom: '32px'
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.title}>Welcome to Wooden Aura</h2>
        <p style={styles.subtitle}>
          Handcrafted furniture made with love, tradition, and sustainability.
        </p>

        <h3 style={styles.sectionTitle}>Featured Products</h3>
        <div style={styles.grid}>
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Button label="View My Cart" onClick={() => navigate('/cart')} />
      </div>
    </div>
  );
}

export default Home;