import React from 'react';
import TrackList from './TrackList';

function Playlist({ playlistName, setPlaylistName, playlistTracks, onRemove }) {
  const handleNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={playlistName}
        onChange={handleNameChange}
        placeholder="Enter playlist name"
      />
      <TrackList tracks={playlistTracks} onRemove={onRemove} />
      <button>Save to Spotify</button>
    </div>
  );
}

export default Playlist;