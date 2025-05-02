import React from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {
  return (
    <div>
      <h1>Jammming</h1>
      <SearchBar />
      <div className="app-content">
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
}

export default App;