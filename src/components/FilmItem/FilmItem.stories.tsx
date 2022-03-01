/* eslint-disable */
import FilmItemResource from '../Film/FilmItemResource';
import FilmItem from './FilmItem';

export default {
  title: "FilmItem",
};

export const Default = () => <FilmItem film={new FilmItemResource()} likes={0} handleClick={function (event): void {
  throw new Error('Function not implemented.');
} }/>;

Default.story = {
  name: 'default',
};
