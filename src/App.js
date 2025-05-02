import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

const mockTracks = [
  {
    id: 1,
    name: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    uri: "spotify:track:1"
  },
  {
    id: 2,
    name: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    uri: "spotify:track:2"
  },
  {
    id: 3,
    name: "Peaches",
    artist: "Justin Bieber",
    album: "Justice",
    uri: "spotify:track:3"
  }
];


function App() {
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = (track) => {
    // Prevent duplicates
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) return;

    setPlaylistTracks([...playlistTracks, track]);
  };

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(t => t.id !== track.id));
  };

  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.uri);
    console.log("Saving playlist:", playlistName);
    console.log("Track URIs:", trackUris);
  
    // Reset playlist after saving
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  };

  return (
    <div>
      <h1>Jammming</h1>
      <SearchBar />
      <div className="app-content">
        <SearchResults tracks={mockTracks} onAdd={addTrack} />
        <Playlist
          playlistName={playlistName}
          setPlaylistName={setPlaylistName}
          playlistTracks={playlistTracks}
          onRemove={removeTrack}
          onSave={savePlaylist}
        />
      </div>
    </div>
  );
}

export default App;