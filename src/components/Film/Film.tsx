
import { observer } from 'mobx-react-lite';
import store from './FilmStore';
import Button from '../../common/components/button';
import { Component } from 'react';
import { FilmListItems } from '../FilmListItems/FilmListItems';
/**
 * Page containing films
 */

const GHIBLI_URL = `https://ghibliapi.herokuapp.com/films`;

/**
 * Mobx observer for state handling on film list
 */
const ObservedFilmListItems = observer(FilmListItems);
/**
 * Class component for whole film list rendering
 */
class FilmList extends Component<{}, {}> {
  onLoad = () => {
    store.load(
      GHIBLI_URL
    );
  };
  render() {
    return (
    <>
      <h1 data-testid="FilmMainTitle">FILMS</h1>
      <Button text="Load" handleClick={this.onLoad} />
      <ObservedFilmListItems />
    </>
  );
    }
}
export default FilmList;

