import React from 'react';

function About() {
  const styles = {
    container: {
      width: '90vw',
      maxWidth: '1200px',
      margin: '40px auto',
      padding: '40px',
      backgroundColor: '#FFF8F0', // soft off-white
      borderRadius: '12px',
      boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
      fontFamily: 'Segoe UI, sans-serif',
      boxSizing: 'border-box'
    },
    title: {
      fontSize: '32px',
      fontWeight: '700',
      marginBottom: '32px',
      color: '#D2691E', // chocolate brown
      textAlign: 'center'
    },
    section: {
      marginBottom: '28px'
    },
    heading: {
      fontSize: '22px',
      fontWeight: '600',
      color: '#A0522D' // deeper brown
    },
    text: {
      fontSize: '16px',
      color: '#4B3F2F', // deep walnut
      lineHeight: '1.6',
      marginTop: '8px'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🌿 About WoodenAura</h2>

      <div style={styles.section}>
        <h3 style={styles.heading}>Our Story</h3>
        <p style={styles.text}>
          WoodenAura was born from a passion for handcrafted furniture and sustainable living.
        </p>
      </div>

      <div style={styles.section}>
        <h3 style={styles.heading}>Our Mission</h3>
        <p style={styles.text}>
          To provide beautiful, durable furniture that brings warmth and character to every home.
        </p>
      </div>

      <div style={styles.section}>
        <h3 style={styles.heading}>Our Values</h3>
        <p style={styles.text}>
          Sustainability, craftsmanship, and customer care are at the heart of everything we do.
        </p>
      </div>
    </div>
  );
}

export default About;