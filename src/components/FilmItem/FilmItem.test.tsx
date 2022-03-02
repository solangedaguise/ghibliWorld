import { getByTestId, getByText, render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilmItem from './FilmItem';
import FilmItemResource from '../Film/FilmItemResource';

const mockFilm: FilmItemResource = {
  id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
  title: 'Castle in the Sky',
  original_title: '',
  original_title_romanised: '',
  description: '',
  director: 'Hayao Miyazaki',
  producer: '',
  release_date: 0,
  running_time: 0,
  rt_score: 0,
  people: [],
  species: [],
  locations: [],
  vehicles: [],
  url: '',
  nbLike: 0
}

describe('<FilmItem />', () => {
  test('it render correctly', () => {
    render(<FilmItem handleClick={() =>{} } film={mockFilm} likes={0} />);
    
    const filmItem = screen.getByTestId('FilmItem');
    expect(filmItem).toBeInTheDocument();

    //Test if button exists
    const button = screen.getByText("like");
    expect(button).toBeInTheDocument();

    expect(filmItem).toHaveTextContent("Castle in the Sky - Hayao Miyazaki");
    expect(filmItem).toHaveTextContent("likes : 0");
  });
});