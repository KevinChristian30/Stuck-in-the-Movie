import "./NavBar.css";
import { Link } from "react-router-dom";
import { auth } from "../../Utility/firebase-config";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const nav = useNavigate();

  const handleLogOut = () => {

    auth.signOut();
    nav('/login');

  }

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
          <button className="logout-button" onClick={ handleLogOut }>Log Out</button>
        </div>
      </div>
   );
}
 
export default NavBar;