import FilmItemResource from "../Film/model/FilmItemResource";
import store from "../Film/store/FilmStore";
import FilmItem from "../FilmItem/FilmItem";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from "@material-ui/core";

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
      <Card data-testid="favoriteMovie">
        <CardContent>
          <Typography variant="h5" component="h2">
            Favorite movie : {getMostLiked()}
          </Typography>
        </CardContent>
      </Card>
      {
        store.films.map((film: FilmItemResource) => (
          <FilmItem key={film.id} film={film} likes={film.nbLike} handleClick={() => addLikeFilm(film.id)} />
        ))
      }
    </>
  );
}

