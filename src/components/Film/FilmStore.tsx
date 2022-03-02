import { makeAutoObservable } from "mobx";
import FilmItemResource from "./FilmItemResource";

/**
 * Like a movie of the list
 * @param films list of films of the page
 * @param id id of the liked film
 * @returns list of films with increment of the liked one
 */
const addLikeFilm = (films: FilmItemResource[], id: string): FilmItemResource[] => 
     {
       films.map((temp) => {
      if (temp.id === id) {
        if (!temp.nbLike) {
          temp.nbLike = 1;
        } else {
          temp.nbLike++;
        }
      }
    });
    return films;
    //TODO init nbLike=0
      // temp.id === id ? { ...temp, nbLike: temp.nbLike++ } : temp
  };

  /**
   * Films, encapsulated in Mobx Observer
   */
class Films {
    films: FilmItemResource[] = [];
    constructor() {
        makeAutoObservable(this);
      }
    load(url: string) {
        fetch(url)
          .then((resp) => resp.json())
          .then((f: FilmItemResource[]) => (store.films = f));
    }

    addLikeFilm(id: string) {
        this.films = addLikeFilm(this.films, id);
    }
}

const store = new Films();

export default store;