import React, { useState, useEffect } from 'react';
import Button from '../components/button';
import ProductCard from '../components/productCard';

function CartCatalogue() {
  const [view, setView] = useState('catalogue');
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  

  const styles = {
    container: {
      minHeight: '100vh',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '15px' : '30px',
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'black'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      width: '100%'
    },
    cartItem: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      textAlign: 'center',
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto'
    },
    image: {
      width: '100%',
      maxWidth: '120px',
      height: 'auto',
      objectFit: 'cover',
      borderRadius: '8px'
    },
    total: {
      fontSize: isMobile ? '18px' : '20px',
      fontWeight: 'bold',
      marginTop: '20px',
      color: '#2c3e50',
      textAlign: 'center'
    },
    paymentOptions: {
      marginTop: '20px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      justifyContent: 'center'
    },
    button: {
      width: 'auto',
      padding: '10px 20px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Button
          label={view === 'catalogue' ? 'Go to Cart' : 'Back to Catalogue'}
          onClick={() => setView(view === 'catalogue' ? 'cart' : 'catalogue')}
          style={styles.button}
        />
      </div>

      {view === 'catalogue' ? (
        <div style={styles.grid}>
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      ) : (
        <div style={{ width: '100%' }}>
          <h2 style={{
            fontSize: isMobile ? '20px' : '24px',
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            🛒 Your Cart
          </h2>
          {cart.length === 0 ? (
            <p style={{ textAlign: 'center' }}>No items in the cart.</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {cart.map(item => (
                <li key={item.id} style={styles.cartItem}>
                  <img src={item.image} alt={item.name} style={styles.image} />
                  <p><strong>{item.name}</strong></p>
                  <p>KES {item.price} × {item.quantity}</p>
                  <Button label="Remove" onClick={() => removeFromCart(item.id)} style={styles.button} />
                </li>
              ))}
            </ul>
          )}
          <p style={styles.total}>Total: KES {total.toLocaleString()}</p>
          <div style={styles.paymentOptions}>
            <Button label="Pay Now" onClick={() => alert('Redirecting to payment...')} style={styles.button} />
            <Button label="Pay on Delivery" onClick={() => alert('Order placed. Pay on delivery!')} style={styles.button} />
          </div>
        </div>
      )}
    </div>
  );
}

export default CartCatalogue;
