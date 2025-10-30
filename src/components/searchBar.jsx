import React, { useState } from 'react';// i am bringing in data from react that will enable us use the useState

function SearchBar({ products, onFilter }) {
  // State to hold the user's search input
  const [query, setQuery] = useState('');

  // Function to handle input changes
  const handleChange = (e) => {
    const input = e.target.value;
    setQuery(input);

    // Filter products based on what some one will ask for in the search bar
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(input.toLowerCase())
    );

    // Send the filtered list back to the parent component
    onFilter(filtered);
  };

  return (
    <div style={styles.container}>
      {/* Search input field */}
      <input
        type="text"
        placeholder="Search furniture by name..."
        value={query}
        onChange={handleChange}
        style={styles.input}
      />
    </div>
  );
}

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