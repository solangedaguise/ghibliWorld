import './App.css';
import { Link } from 'react-router-dom';
import Main from './common/main';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to Ghibli App !</h1>
      </header>
      <div>
        <Button component={Link} to="/" variant="contained" color="primary">
          Home
        </Button>
        <Button component={Link} to="/films" variant="contained" color="primary">
          Films
        </Button>
      </div>
      <hr />
      <Main />

    </div>
  );
}

export default App;
