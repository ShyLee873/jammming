import React from 'react';

function Track({ name, artist, album, onAdd, track }) {
  return (
    <div>
      <p><strong>{name}</strong></p>
      <p>{artist} | {album}</p>
      <button onClick={() => onAdd(track)}>+</button>
    </div>
  );
}

export default Track;