import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Track from '../Track';

test('calls onAdd when add button clicked', () => {
  const mockAdd = jest.fn();
  const track = { id: '1', name: 'Test', artist: 'Artist', album: 'Album' };

  render(<Track {...track} onAdd={mockAdd} track={track} />);

  const addButton = screen.getByRole('button', { name: '+' });
  fireEvent.click(addButton);

  expect(mockAdd).toHaveBeenCalledWith(track);
});