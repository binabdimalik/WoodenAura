import React from 'react';

function About() {
  const styles = {
    container: {
     width: '90vw',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif',
      boxSizing: 'border-box'
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#2c3e50'
    },
    section: {
      marginBottom: '20px'
    },
    heading: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#34495e'
    },
    text: {
      fontSize: '16px',
      color: '#7f8c8d'
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
