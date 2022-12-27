import "./NavBar.css";
import { Link } from "react-router-dom";
import { auth } from "../../Utility/firebase-config";
import { useNavigate } from "react-router-dom";
import NavBarButton from "../NavBarButton/NavBarButton";
import { SessionSetter } from "../../Utility/SessionSetter";

const NavBar = (props) => {

  const nav = useNavigate();

  const handleLogOut = () => {

    auth.signOut();
    SessionSetter.getInstance().resetUserSession();
    nav('/login');

  }

  return ( 
      <div id="navbar">
        <div className="left">
          <Link className="logo" to='/'>Stuck-in-the-Movie</Link>
        </div>
        <div className="middle">
          
          <Link to='/human-resource'>
            <NavBarButton label="Human Resource" />
          </Link>
          <Link to='/fund-and-equipment'>
            <NavBarButton label="Fund and Equipment" />
          </Link>
          <Link to='/reports'>
            <NavBarButton label="Reports" />
          </Link>

        </div>
        <div className="right">
          <button className="logout-button" onClick={ handleLogOut }>Log Out</button>
        </div>
      </div>
   );
}

{/* <Link to='/add-employee'>Add Employee</Link> */}
 
export default NavBar;