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
        <h3 style={styles.heading}>Our Story — 25 Years of Crafting Beauty</h3>
        <p style={styles.text}>
         At <strong>WoodenAura</strong>, we believe furniture should be more than just pieces in a room — 
    they should tell a story, evoke warmth, and bring nature’s calm into your home.  
    Founded in the early 2000s, we began as a small family workshop inspired by a love for 
    wood, design, and the art of craftsmanship. Over two decades later, our passion still guides 
    every curve, joint, and polish.
        </p>
         <p>
    Every piece of furniture we craft tells a story — of patience, passion, and perfection. 
    Our artisans pour their hearts into every curve and finish, using only the finest 
    sustainably sourced wood. Each design is thoughtfully created to reflect nature’s 
    harmony while meeting the needs of today’s modern living spaces.
  </p>

      </div>

      <div style={styles.section}>
        <h3 style={styles.heading}>Our Mission</h3>
        <p style={styles.text}>
         Our mission is to craft exceptional wooden furniture that connects people with 
    nature, tradition, and beauty. We strive to create timeless pieces that inspire 
    comfort, sustainability, and style — transforming ordinary spaces into reflections 
    of individuality and harmony. At WoodenAura, we are committed to maintaining 
    ethical craftsmanship, fair trade, and environmentally conscious production methods 
    that preserve the planet for future generations
        </p>
      </div>
      <div style={styles.section}>
      <h3 style={styles.heading}>Our vision</h3>
  <p style={styles.text}>
    We envision a world where handcrafted furniture stands as a symbol of authenticity, 
    artistry, and sustainability. WoodenAura aims to become a global leader in luxury 
    wooden design — known not just for our products, but for our principles. 
    We dream of inspiring homes around the world with creations that are not mass-produced, 
    but mindfully made; pieces that breathe warmth, character, and lasting beauty 
    into everyday life.
  </p>
</div>
      <div style={styles.section}>
        <h3 style={styles.heading}>Our Values</h3>
        <p style={styles.text}>
         <ul>
    <li>
      <strong>Craftsmanship:</strong> We honor the art of woodworking, combining time-tested 
      techniques with modern precision to create flawless, lasting pieces.
    </li>
    <li>
      <strong>Sustainability:</strong> Every WoodenAura product begins with responsibly 
      sourced wood and eco-friendly processes that protect nature’s balance.
    </li>
    <li>
      <strong>Integrity:</strong> We value honesty, transparency, and fairness — from our 
      workshops to your living rooms.
      </li>
      </ul>
        </p>
      </div>
    </div>
  );
}

export default About;