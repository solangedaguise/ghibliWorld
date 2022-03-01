import React, { Component, FC } from 'react';
import styles from './Film.module.css';
import FilmItem from '../FilmItem/FilmItem';
import axios, { AxiosResponse } from 'axios';
import FilmItemResource from './FilmItemResource';
import FilmStories from './Film.stories';
/**
 * Page containing films
 */
type FilmProps = {
  // using `interface` is also ok
  title: string;
};
type FilmState = {
  count: number; // like this
  films: FilmItemResource[]
};



export default class Film extends Component<{}, FilmState> {
  //State Handling of films
  state: FilmState = {
    // optional second annotation for better type inference
    films: [],
    count: 0
  };

  componentDidMount() {
    axios.get<FilmItemResource[]>(`https://ghibliapi.herokuapp.com/films`)
      .then((res: AxiosResponse) => {
        const films = res.data;
        this.setState({
          films: res.data
        });
      })
  }
  setNbLike = (e: React.MouseEvent, index: number) => {
    let filmsCopy = [...this.state.films];
    let tempIndex = this.state.films[index];
    if (!tempIndex.nbLike) {
      tempIndex.nbLike = 1;
    } else {
      tempIndex.nbLike ++;
    }
    filmsCopy[index] = tempIndex;
    this.setState({
      films: filmsCopy
    });
 };
  
  render() {
    return (
    <>
    <p>FILMS</p>
    {this.state.count}
    {this.state.films.map((item: FilmItemResource, index) => (
      <FilmItem key={item.id} film={item} likes={item.nbLike} handleClick={(e) => this.setNbLike(e, index)}/>  
    ))}
    
    </>
    );
  }
}

