import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import RouteCard from "../../Components/RouteCard/RouteCard";
import "./HumanResource.css";

const HumanResource = () => {
  return ( 
    <div className="human-resource">

      <NavBar />

      <div className="card-container">
        <br /><br /><br /><br /><br />
        <Link to="/human-resource/resignation-letter">
          <RouteCard className="card" title="My Resignation Letter Submission"/>
        </Link>
        <Link to="/human-resource/personal-leave-request">
          <RouteCard className="card" title="My Personal Leave Request"/>
        </Link>
        <Link to="/human-resource/working-time-request">
          <RouteCard className="card" title="My Working Time Request"/>
        </Link>
      </div>

    </div>
   );
}
 
export default HumanResource;