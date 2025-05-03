import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchResults from '../SearchResults';

describe('SearchResults component', () => {
  const mockAdd = jest.fn();
  const sampleTracks = [
    { id: '1', name: 'Track 1', artist: 'Artist', album: 'Album', uri: 'uri:1' }
  ];

  test('renders track list with provided tracks', () => {
    render(<SearchResults tracks={sampleTracks} onAdd={mockAdd} />);
    expect(screen.getByText(/results/i)).toBeInTheDocument();
    expect(screen.getByText(/track 1/i)).toBeInTheDocument();
  });
});