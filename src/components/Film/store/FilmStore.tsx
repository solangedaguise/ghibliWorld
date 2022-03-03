import { makeAutoObservable } from "mobx";
import FilmItemResource from "../model/FilmItemResource";
/**
 * 
 * Store component
 */

const GHIBLI_URL = `https://ghibliapi.herokuapp.com/films`;

/**
 * Like a movie of the list
 * @param films list of films of the page
 * @param id id of the liked film
 * @returns list of films with increment of the liked one
 */
const addLikeFilm = (films: FilmItemResource[], id: string): FilmItemResource[] => {
  films.map((temp) => temp.id === id ? { ...temp, nbLike: temp.nbLike++ } : temp);
  return films;
};

/**
 * Films, encapsulated in Mobx Observer
 */
class Films {
  films: FilmItemResource[] = [];
  constructor() {
    makeAutoObservable(this);
    this.load(GHIBLI_URL);
  }

  //Fetch api data
  async load(url: string) {
    await fetch(url)
      .then((resp) => resp.json())
      .then((f: FilmItemResource[]) => {
        store.films = f.map(el => ({ ...el, nbLike: 0 }))
      });
  }

  getMostLiked(): string {
    let temp = "No favorite movie";
    if (this.films.length !== 0) {
      const tempFilm = this.films.filter(el => el !== undefined).reduce((prev, current) => (+prev.nbLike > +current.nbLike) ? prev : current);
      temp = tempFilm.title && tempFilm.nbLike != 0 ? tempFilm.title : temp;
    }
    return temp;
  }

  addLikeFilm(id: string) {
    this.films = addLikeFilm(this.films, id);
  }
}

const store = new Films();

export default store;

