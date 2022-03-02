import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Main from './common/main';
import Film from './components/Film/Film';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <header>
       <h1>Welcome to Ghibli App !</h1>
      </header>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/films'>Films</Link></li>
        </ul>
        <hr />
        <Main />       
      </div>   
    </div>
  );
}

export default App;
