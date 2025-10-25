import React, { useEffect, useState } from 'react'; // Hooks for state and side effects
import { useNavigate } from 'react-router-dom'; // Navigation hook
import ProductCard from '../components/productCard'; // Reusable product display
import Button from '../components/button';// Reusable button

function Home() {
  const [featured, setFeatured] = useState([]); // Store featured products
  const navigate = useNavigate(); // Navigate to other pages

  // Fetch 3 featured products when the page loads
  useEffect(() => {
    fetch('http://localhost:3001/products?_limit=3')
      .then(res => res.json())
      .then(data => setFeatured(data));
  }, []);

  // Inline styles for the Home page
  const styles = {
    container: {
              textAlign: 'center',
              padding: '40px',
              backgroundColor: '#f0f4f8',
              fontFamily: 'Arial, sans-serif',
              width: '90vw',           // 90% of the viewport width
            maxWidth: '1200px',      // Don’t stretch too wide on large screens
            margin: '0 auto',        // Center horizontally
            padding: '20px',
            boxSizing: 'border-box'
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: '10px'
    },
    subtitle: {
      fontSize: '18px',
      color: '#7f8c8d',
      marginBottom: '30px'
    },
    sectionTitle: {
      fontSize: '24px',
      fontWeight: '600',
      marginBottom: '20px',
      color: '#34495e'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      marginBottom: '30px'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Welcome to WoodenAura </h2>
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
  );
}

export default Home;
