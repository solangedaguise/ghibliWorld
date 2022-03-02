import { getByText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilmItem from './FilmItem';
import FilmItemResource from '../Film/FilmItemResource';

describe('<FilmItem />', () => {
  test('it render correctly', () => {
    render(<FilmItem handleClick={() =>{} } film={new FilmItemResource} likes={0} />);
    
    const filmItem = screen.getByTestId('FilmItem');
    expect(filmItem).toBeInTheDocument();

    //Test if button exists
    const button = screen.getByText("like");
    expect(button).toBeInTheDocument()
  });
});