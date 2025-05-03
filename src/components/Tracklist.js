import React from 'react';
import Track from './Track';

function TrackList({ tracks = [], onAdd, onRemove }) {
  return (
    <div>
      {tracks.map(track => (
        <Track
          key={track.id}
          name={track.name}
          artist={track.artist}
          album={track.album}
          preview={track.preview}
          track={track}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default TrackList;