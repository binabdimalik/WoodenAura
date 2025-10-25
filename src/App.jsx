import React from 'react'; // Required for JSX
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Routing components

// Import layout components
import Header from './components/header';
import Footer from './components/footer';

// Import pages
import Home from './pages/home';
import ProductList from './pages/productList';
import ProductDetails from './pages/productDetails';
import CartCatalogue from './pages/cartCatalogue';

import About from './pages/about';
import ThankYou from './pages/Thankyou';
import Contact from './pages/contact'

function App() {
  // Inline styles for the main layout
  const styles = {
    main: {
      minHeight: '100vh', // Full height layout
      backgroundColor: '#f9f9f9',
      padding: '20px',
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif'
    }
  };

  return (
    <Router>
      {/* Header stays at the top */}
      <Header />

      {/* Main content area */}
      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartCatalogue />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>

      {/* Footer stays at the bottom */}
      <Footer />
    </Router>
  );
}

export default App;
