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
        <Link to="/hr/view-employees">
          <RouteCard className="card" title="View Employees"/>
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
        <Link to="/hr/view-working-times">
          <RouteCard className="card" title="View Working Times"/>
        </Link>
        <Link to="/hr/update-working-time">
          <RouteCard className="card" title="Update Working Time"/>
        </Link>
        <br /><br /><br /><br />
      </div>

    </div>
  );
}
 
export default HRHomeView;