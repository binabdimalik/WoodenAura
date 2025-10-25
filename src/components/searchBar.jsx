import React from 'react';

function SearchBar({ placeholder, value, onChange, onSubmit }) {
  // Inline styles for the search bar container and input
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px'
    },
    input: {
      width: '100%',
      maxWidth: '400px',
      padding: '10px 15px',
      borderRadius: '6px',
      border: '1px solid #ccc',
      fontSize: '16px',
      fontFamily: 'Arial, sans-serif'
    }
  };

  // Handle Enter key press to trigger search
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && onSubmit) {
      onSubmit();
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder={placeholder || 'Search...'} // Default placeholder
        value={value} // Controlled input value
        onChange={(e) => onChange(e.target.value)} // Call parent handler
        onKeyPress={handleKeyPress} // Submit on Enter
        style={styles.input}
      />
    </div>
  );
}

export default SearchBar;