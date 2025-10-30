import React from 'react';

function SearchBar({ placeholder, value, onChange, onSubmit }) {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '24px',
      padding: '0 16px'
    },
    input: {
      width: '100%',
      maxWidth: '420px',
      padding: '12px 18px',
      borderRadius: '8px',
      border: '1px solid #D2691E', // chocolate brown
      fontSize: '16px',
      fontFamily: 'Segoe UI, sans-serif',
      boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
      transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
      outline: 'none',
      backgroundColor: '#FFF8F0', // soft off-white
      color: '#4B3F2F' // deep walnut
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && onSubmit) {
      onSubmit();
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder={placeholder || 'Search...'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        style={styles.input}
        onFocus={(e) => {
          e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)';
          e.target.style.borderColor = '#A0522D'; // deeper brown on focus
        }}
        onBlur={(e) => {
          e.target.style.boxShadow = styles.input.boxShadow;
          e.target.style.borderColor = styles.input.border;
        }}
      />
    </div>
  );
}

<<<<<<< HEAD
// this will 
const styles = {
  container: {
    margin: '20px auto',
    textAlign: 'center',
  },
  input: {
    padding: '10px',
    width: '80%',
    maxWidth: '400px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #5c5a5aff',
  },
};

export default SearchBar;// this is like putting my work outside for people to use it or for it to be used by the other components
=======
export default SearchBar;
>>>>>>> origin/main
