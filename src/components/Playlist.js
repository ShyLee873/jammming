import React from 'react';
import TrackList from './TrackList';

function Playlist() {
  return (
    <div>
      <h2>Playlist</h2>
      <TrackList tracks={[]} />
      <button>Save to Spotify</button>
    </div>
  );
}

export default Playlist;