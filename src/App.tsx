import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Main from './common/main';

function App() {
  return (
    <div className="App">
      <header 
      // className="App-header"
      >
       
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
