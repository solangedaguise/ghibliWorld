import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Film from './Film';

describe('<Film />', () => {
  test('it should mount', () => {
    render(<Film />);
    
    const film = screen.getByTestId('Film');

    expect(film).toBeInTheDocument();
  });
});