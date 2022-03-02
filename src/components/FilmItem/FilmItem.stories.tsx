/* eslint-disable */
import FilmItemResource from '../Film/FilmItemResource';
import FilmItem from './FilmItem';

export default {
  title: "FilmItem",
};

export const Default = () => <FilmItem handleClick={function (event): void {
  throw new Error('Function not implemented.');
} } film={new FilmItemResource} likes={0}/>;

Default.story = {
  name: 'default',
};
