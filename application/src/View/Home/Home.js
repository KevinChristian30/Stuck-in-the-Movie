import NavBar from "../NavBar/NavBar";
import Login from "../Login/Login";
import AddEmployee from "../Add-Employee/AddEmployee";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = () => {
  return (
    <Router>
      <div id="home">
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
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}
 
export default Home;