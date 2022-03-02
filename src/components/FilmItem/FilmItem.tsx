import React, { FC } from 'react';
import FilmItemResource from '../Film/FilmItemResource';
import styles from './FilmItem.module.css';
/**
 * Film item component
 */
interface FilmItemProps {
  film: FilmItemResource,
  likes:number,
  handleClick:(e:  React.MouseEvent<HTMLButtonElement>) => void;
}

const FilmItem: FC<FilmItemProps> = ({ film, likes, handleClick}) => (
  <div className={styles.FilmItem} data-testid="FilmItem">
    <span>{film.title} - {film.director}</span>
    <button onClick={handleClick}>like</button>
    likes : {likes}
  </div>
);

export default FilmItem;

