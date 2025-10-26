import React from 'react';

function Contact() {
  const styles = {
    wrapper: {
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(to right, #FFF8F0, #FFE4C4)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start', // changed from center
      padding: '40px 0',
      boxSizing: 'border-box',
      overflowY: 'auto'
    },
    container: {
      width: '90vw',
      maxWidth: '600px',
      padding: '30px',
      backgroundColor: '#FFF8F0',
      borderRadius: '12px',
      boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
      fontFamily: 'Segoe UI, sans-serif',
      textAlign: 'center',
      boxSizing: 'border-box',
      height: '100%', // ensures it stretches if needed
      flex: 1
    },
    title: {
      fontSize: '26px',
      fontWeight: '700',
      marginBottom: '24px',
      color: '#D2691E'
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      marginBottom: '16px',
      borderRadius: '8px',
      border: '1px solid #D2691E',
      fontSize: '16px',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#FFF8F0',
      color: '#4B3F2F'
    },
    textarea: {
      width: '100%',
      padding: '12px 16px',
      height: '120px',
      borderRadius: '8px',
      border: '1px solid #D2691E',
      marginBottom: '16px',
      fontSize: '16px',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#FFF8F0',
      color: '#4B3F2F'
    },
    button: {
      width: '100%',
      padding: '12px 24px',
      backgroundColor: '#D2691E',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      fontWeight: '600',
      fontSize: '16px',
      cursor: 'pointer',
      marginBottom: '24px'
    },
    locationTitle: {
      marginTop: '30px',
      marginBottom: '10px',
      color: '#A0522D',
      fontSize: '18px',
      fontWeight: '600'
    },
    locationSub: {
      marginBottom: '20px',
      color: '#4B3F2F',
      fontSize: '16px'
    },
    map: {
      width: '100%',
      height: '300px',
      borderRadius: '10px',
      border: 'none'
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.title}>📞 Contact Us</h2>
        <input type="text" placeholder="Your Name" style={styles.input} />
        <input type="email" placeholder="Your Email" style={styles.input} />
        <textarea placeholder="Your Message" style={styles.textarea}></textarea>
        <button style={styles.button}>Send Message</button>

        <h3 style={styles.locationTitle}>📍 Our Location</h3>
        <h4 style={styles.locationSub}>📍 Amal Plaza – Eastleigh, Nairobi</h4>
        <iframe
          src="https://maps.google.com/maps?q=Nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          style={styles.map}
          title="WoodenAura Location"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;