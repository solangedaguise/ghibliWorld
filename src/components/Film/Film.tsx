
import { observer } from 'mobx-react-lite';
import store from './FilmStore';
import Button from '../../common/components/button';
import { Component } from 'react';
import { FilmListItems } from '../FilmListItems/FilmListItems';
/**
 * Page containing films
 */



/**
 * Mobx observer for state handling on film list
 */
const ObservedFilmListItems = observer(FilmListItems);
/**
 * Class component for whole film list rendering
 */
class FilmList extends Component<{}, {}> {

  render() {
    return (
    <>
      <h1 data-testid="FilmMainTitle">FILMS</h1>
      <ObservedFilmListItems />
    </>
  );
    }
}
export default FilmList;

