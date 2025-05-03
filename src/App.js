import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Spotify from './util/Spotify';

Spotify.getAccessToken();

function App() {
  const [playlistName, setPlaylistName] = useState();
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState(null);

  const fetchUserPlaylists = () => {
    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };

    // Get user profile
    fetch('https://api.spotify.com/v1/me', { headers })
      .then(response => response.json())
      .then(userData => {
        const capitalizedName = userData.display_name
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        setUserName(capitalizedName);
      });
      
    // Get user playlists
    fetch('https://api.spotify.com/v1/me/playlists', { headers })
      .then(response => response.json())
      .then(data => {
        const playlists = data.items.map(pl => ({
          id: pl.id,
          name: pl.name,
          trackCount: pl.tracks.total
        }));
        setUserPlaylists(playlists);
      });
  };

  useEffect(() => {
    fetchUserPlaylists();
  }, []);

  useEffect(() => {
    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
  
    fetch('https://api.spotify.com/v1/me', { headers })
      .then(res => res.json())
      .then(data => {
        setUserName(data.display_name);
        if (data.images && data.images.length > 0) {
          setUserImage(data.images[0].url);
        }
      });
  }, []);

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
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  };

  return (
    <div className='container'>
    <div className="header">
      <h1>Jammming</h1>
    </div>
    <div className="searchBar">
      <SearchBar onSearch={searchSpotify} />
    </div>
      <div className="app-content">
        <div className='left-content'>
          <div className="left-pane">
            <SearchResults tracks={searchResults} onAdd={addTrack} />
          </div>
          <div className='addToPlaylist'>
            <Playlist
            playlistName={playlistName}
            setPlaylistName={setPlaylistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onSave={savePlaylist}
            />
          </div>
        </div>

        <div className="right-content">
          {userImage && <img src={userImage} alt="User avatar" className="user-avatar" />}
          <div className='right-pane'>
            <h2 className='cardHeader'>{userName ? `${userName}'s Playlists` : 'My Playlists'}</h2>
            <ul>
              {userPlaylists.map((pl) => (
                <li key={pl.id}>
                  {pl.name} ({pl.trackCount} tracks)
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;