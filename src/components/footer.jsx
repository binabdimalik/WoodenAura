import React from 'react';

function Footer() {
  const styles = {
    footer: {
      backgroundColor: '#D2691E', // chocolate brown
      color: '#fff',
      padding: '24px',
      textAlign: 'center',
      fontSize: '15px',
      fontFamily: 'Segoe UI, sans-serif',
      boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
      marginTop: '40px'
    }
  };

  return (
    <footer style={styles.footer}>
      <p>© 2025 WoodenAura. All rights reserved.</p>
    </footer>
  );
}

export default Footer;