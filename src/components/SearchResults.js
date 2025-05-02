import React from 'react';
import TrackList from './TrackList';

function SearchResults({ tracks }) {
  return (
    <div>
      <h2>Results</h2>
      <TrackList tracks={tracks} />
    </div>
  );
}

export default SearchResults;