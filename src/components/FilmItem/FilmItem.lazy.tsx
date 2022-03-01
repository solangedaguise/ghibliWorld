import React, { lazy, Suspense } from 'react';
import FilmItemResource from '../Film/FilmItemResource';
import FilmItemStories from './FilmItem.stories';

const LazyFilmItem = lazy(() => import('./FilmItem'));

const FilmItem = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={<div>...loading</div>}>
    <LazyFilmItem  handleClick={function (e): void {
      throw new Error('Function not implemented.');
    } } likes={0} film={new FilmItemResource()} {...props} />
  </Suspense>
);

export default FilmItem;
