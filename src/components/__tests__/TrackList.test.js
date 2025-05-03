import React from 'react';
import { render, screen } from '@testing-library/react';
import TrackList from '../TrackList';

describe('TrackList component', () => {
  const mockAdd = jest.fn();
  const mockRemove = jest.fn();
  const sampleTracks = [
    { id: '1', name: 'Track A', artist: 'Artist A', album: 'Album A', uri: 'uri:1' }
  ];

  test('renders all tracks passed as props', () => {
    render(<TrackList tracks={sampleTracks} onAdd={mockAdd} onRemove={mockRemove} />);
    expect(screen.getByText(/track a/i)).toBeInTheDocument();
    expect(screen.getByText(/artist a/i)).toBeInTheDocument();
  });
});