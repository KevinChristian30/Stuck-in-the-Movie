import { Link } from "react-router-dom";
import RouteCard from "../../../Components/RouteCard/RouteCard";
import "./HRHomeView.css";

const HRHomeView = () => {
  return ( 
    <div className="hr-home-view-container">

      <div className="card-container">
        <Link to="/hr/add-employee">
          <RouteCard className="card" title="Add Employee"/>
        </Link>
        <Link to="/hr/personal-leave-requests">
          <RouteCard className="card" title="Personal Leave Requests"/>
        </Link>
        <Link to="/hr/salary-change-requests">
          <RouteCard className="card" title="Request Salary Change"/>
        </Link>
        <Link to="/hr/warning-letter-proposals">
          <RouteCard className="card" title="Propose Warning Letter"/>
        </Link>
        <Link to="/hr/terminiation-letter-proposals">
          <RouteCard className="card" title="Propose Termination Letter"/>
        </Link>
        <br /><br /><br /><br />
      </div>

    </div>
  );
}
 
export default HRHomeView;