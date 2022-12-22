import "./NavBarButton.css";

const NavBarButton = (props) => {

  const label = props.label;

  return ( 
    <div className="navbar-button">
      <p>{label}</p>
      <span id="line"></span>
    </div>
   );
}
 
export default NavBarButton;