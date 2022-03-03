import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilmItem from './FilmItem';
import FilmItemResource from '../Film/model/FilmItemResource';

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
    render(<FilmItem handleClick={() => { }} film={mockFilm} likes={0} />);
    const filmItem = screen.getByTestId('FilmItem');

    //should have the item
    expect(filmItem).toBeInTheDocument();

    //should have the like button
    const button = screen.getByTitle('Like');
    expect(button).toBeInTheDocument();

    // should have the Film and director name
    expect(filmItem).toHaveTextContent("Castle in the Sky - Hayao Miyazaki");

    // should have the like number
    expect(filmItem).toHaveTextContent("likes : 0");

    // should increment the like number
    // fireEvent.click(button);
    // expect(filmItem).toHaveTextContent("likes : 1");

  });
});