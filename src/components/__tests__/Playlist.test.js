import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Playlist from '../Playlist';

describe('Playlist component', () => {
  const mockSetName = jest.fn();
  const mockRemove = jest.fn();
  const mockSave = jest.fn();
  const sampleTracks = [
    { id: '1', name: 'Song A', artist: 'Artist A', album: 'Album A', uri: 'uri:1' }
  ];

  test('renders playlist name and save button', () => {
    render(
      <Playlist
        playlistName="My Playlist"
        setPlaylistName={mockSetName}
        playlistTracks={sampleTracks}
        onRemove={mockRemove}
        onSave={mockSave}
      />
    );

    expect(screen.getByDisplayValue('My Playlist')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /save to spotify/i })).toBeInTheDocument();
  });

  test('calls onSave when button clicked', () => {
    render(
      <Playlist
        playlistName="My Playlist"
        setPlaylistName={mockSetName}
        playlistTracks={sampleTracks}
        onRemove={mockRemove}
        onSave={mockSave}
      />
    );

    fireEvent.click(screen.getByText(/save to spotify/i));
    expect(mockSave).toHaveBeenCalled();
  });

  test('calls setPlaylistName on input change', () => {
    render(
      <Playlist
        playlistName="My Playlist"
        setPlaylistName={mockSetName}
        playlistTracks={sampleTracks}
        onRemove={mockRemove}
        onSave={mockSave}
      />
    );

    fireEvent.change(screen.getByDisplayValue('My Playlist'), {
      target: { value: 'New Name' }
    });
    expect(mockSetName).toHaveBeenCalledWith('New Name');
  });
});