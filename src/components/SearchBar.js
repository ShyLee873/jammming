import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleTermChange = (event) => setTerm(event.target.value);
  const search = () => onSearch(term);

  return (
    <div>
      <input placeholder="Search for a song..." onChange={handleTermChange} />
      <button onClick={search}>Search</button>
    </div>
  );
}

export default SearchBar;