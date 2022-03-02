import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilmList from './Film';

describe('<FilmList />', () => {
  test('it should mount', () => {
    render(<FilmList />);
    
    const film = screen.getByTestId('FilmMainTitle');

    expect(film).toBeInTheDocument();
  });
});