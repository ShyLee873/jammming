import React, { useState } from 'react';
import './NeonButtons.css';

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(term);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by song or artist"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={handleKeyPress} // 👈 Add this!
      />
      <button className="neon-button" onClick={() => onSearch(term)}>Search</button>
    </div>
  );
}

export default SearchBar;