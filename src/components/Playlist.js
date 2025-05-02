import React from 'react';
import TrackList from './TrackList';

function Playlist({ playlistName, playlistTracks, onRemove }) {
  return (
    <div>
      <h2>{playlistName}</h2>
      <TrackList tracks={playlistTracks} onRemove={onRemove} />
      <button>Save to Spotify</button>
    </div>
  );
}

export default Playlist;