import React from 'react';

function Track({ name, artist, album, onAdd, onRemove, track }) {
  return (
    <div>
      <p><strong>{name}</strong></p>
      <p>{artist} | {album}</p>
      {onAdd && <button onClick={() => onAdd(track)}>+</button>}
      {onRemove && <button onClick={() => onRemove(track)}>-</button>}
    </div>
  );
}

export default Track;