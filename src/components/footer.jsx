import React from 'react';

function Footer() {
  const styles = {
    footer: {
      backgroundColor: '#2c3e50',
      color: '#ecf0f1',
      padding: '20px',
      textAlign: 'center',
      fontSize: '14px',
      fontFamily: 'Arial, sans-serif'
    }
  };

  return (
    <footer style={styles.footer}>
      <p>© 2025 WoodenAura. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
