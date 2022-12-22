import NavBar from "../../Components/NavBar/NavBar";  
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import "./Home.css"

const Home = () => {

  return (
    <div className="home">
      <NavBar  />
      <br /><br /><br /><br /><br />
      <ProfileCard className="profile-card" />
    </div>
  );
}

export default Home;