import FilmItemResource from "../Film/FilmItemResource";
import store from "../Film/FilmStore";
import FilmItem from "../FilmItem/FilmItem";

/**
 * functional component : list of films that will be tracked by mobx
 * @returns Main Film page
 */

 export function FilmListItems() {
    const addLikeFilm = (id: string) => {
      store.addLikeFilm(
        id
      );
    };
    return (
      <>
       {store.films.map((film: FilmItemResource) => (
         <FilmItem film={film} likes={film.nbLike} handleClick={() =>addLikeFilm(film.id)} />
       ))}
      </>
    );
  }
  
