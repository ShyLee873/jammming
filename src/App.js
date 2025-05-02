import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

const mockTracks = [
  {
    id: 1,
    name: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours"
  },
  {
    id: 2,
    name: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia"
  },
  {
    id: 3,
    name: "Peaches",
    artist: "Justin Bieber",
    album: "Justice"
  }
];


function App() {
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  return (
    <div>
      <h1>Jammming</h1>
      <SearchBar />
      <div className="app-content">
        <SearchResults tracks={mockTracks} />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
        />
      </div>
    </div>
  );
}

export default App;