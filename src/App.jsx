import { useState } from 'react'
import './App.css'
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import ProductList from './pages/productList';
import ProductDetails from './pages/productDetails';
import CartCatalogue from './pages/cartCatalogue';
import About from './components/about';
import Contact from './pages/contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartCatalogue />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

