import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return ( 
      <div id="navbar">
        <div className="left">
          <Link className="logo" to='/'>Stuck-in-the-Movie</Link>
        </div>
        <div className="middle">
          <Link to='/add-employee'>Add Employee</Link>
          <Link to='/'>Menu 2</Link>
          <Link to='/'>Menu 3</Link>
        </div>
        <div className="right">
          <Link className="logout-button" to='/login'>Log Out</Link>
        </div>
      </div>
   );
}
 
export default NavBar;