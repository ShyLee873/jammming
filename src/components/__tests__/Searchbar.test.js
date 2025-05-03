import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

test('renders input and calls onSearch when button clicked', () => {
  const mockSearch = jest.fn();

  render(<SearchBar onSearch={mockSearch} />);
  
  const input = screen.getByPlaceholderText(/search for a song/i);
  const button = screen.getByRole('button', { name: /search/i });

  fireEvent.change(input, { target: { value: 'Dua Lipa' } });
  fireEvent.click(button);

  expect(mockSearch).toHaveBeenCalledWith('Dua Lipa');
});