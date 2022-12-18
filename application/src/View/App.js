import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AddEmployee from './Add-Employee/AddEmployee';
import './App.css';
import Home from './Home/Home';
import Login from './Login/Login';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/add-employee">
            <NavBar />
            <AddEmployee />
          </Route>
          <Route path="/">
            <NavBar />
            <Home />
          </Route>
        </Switch>
      </div> 
    </Router>
  );
};

export default App;
