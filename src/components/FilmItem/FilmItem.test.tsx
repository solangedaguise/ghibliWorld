import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilmItem from './FilmItem';
import FilmItemResource from '../Film/FilmItemResource';

describe('<FilmItem />', () => {
  test('it should mount', () => {
    render(<FilmItem film={new FilmItemResource()} likes={0} handleClick={function (event): void {
      throw new Error('Function not implemented.');
    } } />);
    
    const filmItem = screen.getByTestId('FilmItem');

    expect(filmItem).toBeInTheDocument();
  });
});