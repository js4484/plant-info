import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Search from './Search';
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <div className="outer">
      <div className="App">
        <Nav />
        <Search />
      </div>
    </div>
  );
}

export default App;
