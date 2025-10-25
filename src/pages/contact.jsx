import React from 'react';

function Contact() {
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#2c3e50'
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      borderRadius: '6px',
      border: '1px solid #ccc'
    },
    textarea: {
      width: '100%',
      padding: '10px',
      height: '100px',
      borderRadius: '6px',
      border: '1px solid #ccc',
      marginBottom: '15px'
    },
    map: {
      width: '100%',
      height: '300px',
      borderRadius: '8px',
      border: 'none'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📞 Contact Us</h2>
      <input type="text" placeholder="Your Name" style={styles.input} />
      <input type="email" placeholder="Your Email" style={styles.input} />
      <textarea placeholder="Your Message" style={styles.textarea}></textarea>
      <button style={{ ...styles.input, backgroundColor: '#27ae60', color: '#fff', cursor: 'pointer' }}>
        Send Message
      </button>
      <h3 style={{ marginTop: '30px', marginBottom: '10px', color: 'green' }}>📍 Our Location </h3>
      <h4 style={{ marginTop: '30px', marginBottom: '10px', color: 'green' }}> 📍  Amal Plaza- Eastleigh, Nairobi</h4>
      <iframe
        src="https://maps.google.com/maps?q=Nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"
        style={styles.map}
        title="WoodenAura Location"
      ></iframe>
    </div>
  );
}

export default Contact;
