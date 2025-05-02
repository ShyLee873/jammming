import React from 'react';

function Track({ name, artist, album }) {
  return (
    <div>
      <p><strong>{name}</strong></p>
      <p>{artist} | {album}</p>
    </div>
  );
}

export default Track;