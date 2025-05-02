import React from 'react';
import Track from './Track';

function TrackList({ tracks = [], onAdd }) {
  return (
    <div>
      {tracks.map(track => (
        <Track
          key={track.id}
          name={track.name}
          artist={track.artist}
          album={track.album}
          onAdd={onAdd}
          track={track}
        />
      ))}
    </div>
  );
}

export default TrackList;