import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout components
import Header from './components/header';
import Footer from './components/footer';

// Pages
import Home from './pages/home';
import ProductList from './pages/productList';
import ProductDetails from './pages/productDetails';
import CartCatalogue from './pages/cartCatalogue';

import About from './pages/about';
import ThankYou from './pages/thankyou';

import Contact from './pages/contact';

// Optional: Fallback page for unmatched routes
function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
}

function App() {
  const styles = {
    main: {
      minHeight: '100vh',
      backgroundColor: '#f9f9f9',
      padding: '20px',
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif'
    }
  };

  return (
    <Router>
      <Header />
      <main style={styles.main}>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartCatalogue />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* Catch-all route to prevent unmatched path errors */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
