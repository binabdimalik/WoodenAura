import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/productCard';
import Button from '../components/button';

function Home() {
  const [topSellers, setTopSellers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/products?_limit=3")
      .then((res) => res.json())
      .then((data) => setTopSellers(data));
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
    },
    testimonialsSection: {
      backgroundColor: "#fff9f3",
      padding: "60px 20px",
      borderRadius: "16px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
      marginTop: "80px",
      transition: "transform 0.3s ease",
    },
    testimonialGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "30px",
      marginTop: "30px",
    },
    testimonialCard: {
      backgroundColor: "#ffffff",
      border: "1px solid #f1e2d2",
      borderRadius: "15px",
      padding: "25px",
      boxShadow: "0 5px 10px rgba(0,0,0,0.06)",
      transition: "all 0.3s ease",
    },
    testimonialText: {
      fontStyle: "italic",
      fontSize: "16px",
      lineHeight: "1.6",
      color: "#4e342e",
      marginBottom: "15px",
    },
    customerName: {
      fontWeight: "600",
      color: "#b8860b",
    },
  };
  

  const testimonials = [
    {
      id: 1,
      text: "My WoodenAura dining table is a centerpiece in my home — elegant and timeless.",
      name: "— william W.",
    },
    {
      id: 2,
      text: "Top-notch quality! The attention to detail is unmatched.",
      name: "— Steve K.",
    },
    {
      id: 3,
      text: "Their craftsmanship feels luxurious yet homely — exactly what I wanted.",
      name: "— Faith N.",
    },
    {
      id: 4,
      text: "The textures, the polish, the smell of real wood — pure art.",
      name: "— Purity O.",
    },
    {
      id: 5,
      text: "I’ve bought three pieces now. Every one is uniquely crafted perfection.",
      name: "— Mike S.",
    },
    {
      id: 6,
      text: "Customer service was impeccable, and my coffee table is stunning!",
      name: "— Leanne K.",
    },
  ];

  return (
    <div style={styles.container}>
      {/* 🌿 Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.title}>WoodenAura</h1>
        <p style={styles.slogan}>
          Crafting heirloom furniture that breathes life, warmth, and soul into
          your home.
        </p>
        <Button label="View My Cart" onClick={() => navigate("/cart")} />
      </div>

      {/* 🌟 Top Sellers Section */}
      <h3 style={styles.sectionTitle}>
        Our Top Sellers
        <span style={styles.sectionTitleUnderline}></span>
      </h3>
      <div style={styles.grid}>
        {topSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* 💬 Testimonials */}
      <div style={styles.testimonialsSection}>
        <h3 style={styles.sectionTitle}>
          What Our Clients Say
          <span style={styles.sectionTitleUnderline}></span>
        </h3>
        <div style={styles.testimonialGrid}>
          {testimonials.map((t) => (
            <div
              key={t.id}
              style={styles.testimonialCard}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <p style={styles.testimonialText}>{t.text}</p>
              <p style={styles.customerName}>{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
