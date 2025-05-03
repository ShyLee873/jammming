import React from 'react';

function Track({ name, artist, album, preview, image, onAdd, onRemove, track }) {
  return (
    <div className="track-content">
      <img className="album-art" src={image} alt={`${album} album cover`} />
      <div className="track">
        <p><strong>{name}</strong></p>
        <p>{artist} | {album}</p>
        {preview ? (
          <audio controls src={preview}>Your browser does not support the audio element.</audio>
        ) : (
          <p><em>Preview not available</em></p>
        )}
        {onAdd && <button onClick={() => onAdd(track)}>+</button>}
        {onRemove && <button onClick={() => onRemove(track)}>-</button>}
      </div>
    </div>
  );
}

export default Track;