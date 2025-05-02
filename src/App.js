import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Spotify from './util/Spotify';

Spotify.getAccessToken();

function App() {
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const searchSpotify = (term) => {
    Spotify.search(term).then(results => setSearchResults(results));
  };

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
      <SearchBar onSearch={searchSpotify} />
      <div className="app-content">
        <SearchResults tracks={searchResults} onAdd={addTrack} />
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