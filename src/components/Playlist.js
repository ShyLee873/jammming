import React from 'react';
import TrackList from './TrackList';

function Playlist({ playlistName, setPlaylistName, playlistTracks, onRemove, onSave }) {
  const handleNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  return (
    <div>
      <div className='playlistInput'>
        <input
          type="text"
          value={playlistName}
          onChange={handleNameChange}
          placeholder="Enter playlist name"
        />
        <button className='neon-button' onClick={onSave}>Save to Spotify</button>
      </div>  
      <TrackList tracks={playlistTracks} onRemove={onRemove} />
    </div>
  );
}

export default Playlist;