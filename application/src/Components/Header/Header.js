import NavBar from "../NavBar/NavBar";
import Title from "../Title/Title";

const Header = (props) => {
  
  const title = props.title;

  return ( 
    <div className="header">
      <NavBar />
      <br /><br /><br /><br /><br />
      <Title title={title}/>
    </div>
  );
}
 
export default Header;