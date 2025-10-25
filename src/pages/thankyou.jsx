import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button';

function ThankYou() {
  const styles = {
    container: {
      textAlign: 'center',
      padding: '50px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f4f8'
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#27ae60',
      marginBottom: '20px'
    },
    message: {
      fontSize: '18px',
      color: '#7f8c8d',
      marginBottom: '30px'
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🎉 Thank You for Your Order!</h2>
      <p style={styles.message}>
        We’ve received your request and will begin preparing your handcrafted furniture shortly.
      </p>
      <div style={styles.buttonGroup}>
        <Link to="/">
          <Button label="Back to Home" />
        </Link>
        <Link to="/products">
          <Button label="Continue Shopping" />
        </Link>
      </div>
    </div>
  );
}

export default ThankYou;