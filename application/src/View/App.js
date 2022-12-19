import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddEmployee from './Add-Employee/AddEmployee';
import './App.css';
import Home from './Home/Home';
import Login from './Login/Login';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/add-employee" element={<AddEmployee />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div> 
    </Router>
  );
};

export default App;
