import React, { Component, FC, useEffect } from 'react';
import styles from './Film.module.css';
import axios, { AxiosResponse } from 'axios';
import FilmItemResource from './FilmItemResource';
import FilmStories from './Film.stories';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react-lite';
import FilmObs from './FilmStore';
import { Provider } from 'mobx-react';
import store from './FilmStore';
import Button from '../../common/components/button';
import FilmItem from '../FilmItem/FilmItem';
/**
 * Page containing films
 */

const GHIBLI_URL = `https://ghibliapi.herokuapp.com/films`;

/**
 * 
 * @returns Main Film page
 */
function FilmListItems() {
  const addLikeFilm = (id: string) => {
    store.addLikeFilm(
      id
    );
  };
  return (
    <>
    <p>FILMS</p>
     {store.films.map((film: FilmItemResource) => (
       <FilmItem film={film} likes={film.nbLike} handleClick={() =>addLikeFilm(film.id)} />
     ))}
    </>
  );
}
const ObservedFilmListItems = observer(FilmListItems);
function FilmList() {
  const onLoad = () => {
    store.load(
      GHIBLI_URL
    );
  };
  return (
    <>
      <h1>FILMS</h1>
      <Button text="Load" handleClick={onLoad} />
      <ObservedFilmListItems />
    </>
  );
}
export default FilmList;


