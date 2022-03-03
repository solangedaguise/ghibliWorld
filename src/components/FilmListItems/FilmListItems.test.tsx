import { observable, action } from "mobx";
import Film from "../Film/Film";
import { FilmListItems } from "./FilmListItems";
import { render, screen } from '@testing-library/react';
import store from "../Film/store/FilmStore";

const mockFn = jest.fn()
//TODO Find how to mock Store mobx inside component test render
jest.mock('../Film/store/FilmStore.tsx', () => {
  // return a constructor
  return jest.fn().mockImplementation(() => {
    // with a mock implementation
    return {
      films: [],
      getMostLiked(): string {
        return "titre";
      },
      addLikeFilm(id: string) {
        mockFn(id);
      },
      async load(url: string) {
      }
    }
  })
})

beforeEach(() => {
  mockFn.mockReset()
})
describe('<FilmListItem />', () => {
  test('renders like', async () => {
    //const mock = jest.spyOn(store, "getMostLiked");
    //TODO test mobx State
    // render(<FilmListItems />);
    // const filmListItems = screen.getByTestId('favoriteMovie');
    // expect(filmListItems).toHaveTextContent("Favorite movie :");
  });
});



