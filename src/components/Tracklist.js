import React from 'react';
import Track from './Track';

function TrackList({ tracks = [], onAdd, onRemove }) {
  return (
    <div>
      {tracks.map(track => (
        <Track
          key={track.id}
          track={track}
          name={track.name}
          artist={track.artist}
          album={track.album}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default TrackList;