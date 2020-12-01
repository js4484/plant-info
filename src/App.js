import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <div className="MainApp">Search for a plant
        <div>search input</div>
      </div>
    </div>
  );
}

export default App;
