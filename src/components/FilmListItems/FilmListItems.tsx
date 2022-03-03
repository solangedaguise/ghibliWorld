import FilmItemResource from "../Film/model/FilmItemResource";
import store from "../Film/store/FilmStore";
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
  const getMostLiked = () => {
    return store.getMostLiked();
  };
  return (
    <>
      <p data-testid="favoriteMovie">Favorite movie : {getMostLiked()}</p>
      {store.films.map((film: FilmItemResource) => (
        <FilmItem key={film.id} film={film} likes={film.nbLike} handleClick={() => addLikeFilm(film.id)} />
      ))}
    </>
  );
}

