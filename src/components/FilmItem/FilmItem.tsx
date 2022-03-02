import React, { FC } from 'react';
import FilmItemResource from '../Film/FilmItemResource';
import styles from './FilmItem.module.css';
import IconButton from '@material-ui/core/IconButton';
import ThumbUp from '@material-ui/icons/ThumbUp';
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
    <IconButton onClick={handleClick} aria-label="Like" title="Like">
          <ThumbUp fontSize="small" />
    </IconButton>
    likes : {likes}
  </div>
);

export default FilmItem;

