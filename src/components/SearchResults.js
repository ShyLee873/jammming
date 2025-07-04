import React from 'react';
import TrackList from './TrackList';

function SearchResults({ tracks, onAdd }) {
  return (
    <div>
      <h2 className='cardHeader'>Results</h2>
      <TrackList tracks={tracks} onAdd={onAdd} />
    </div>
  );
}

export default SearchResults;