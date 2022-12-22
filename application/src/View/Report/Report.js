import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import RouteCard from "../../Components/RouteCard/RouteCard";
import "./Report.css";

const Report = () => {
  return ( 

    <div className="report">

      <NavBar />

      <div className="card-container">
        <br /><br /><br /><br /><br />
        <Link to="/reports/broken-facility-report">
          <RouteCard className="card" title="My Broken Facility Reports"/>
        </Link>
      </div>

    </div>

   );
}
 
export default Report;