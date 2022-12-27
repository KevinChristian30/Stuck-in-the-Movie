import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import RouteCard from "../../Components/RouteCard/RouteCard";
import Title from "../../Components/Title/Title";

const ManagerManageEmployeesView = () => {
  return ( 

    <div className="manager-manage-employees-view">
      <NavBar />
      <br /><br /><br /><br /><br />
      <Title title="Manage Employees"/>
      <br />
      <div className="manager-home-view-container">

        <div className="card-container">
          <Link to="/manager/employees/employee-resignation-proposals">
            <RouteCard className="card" title="Resignation Proposal"/>
          </Link>
          <Link to="/manager/employees/warning-letter-proposals">
            <RouteCard className="card" title="Warning Letter Proposal"/>
          </Link>
          <Link to="/manager/employees/update-employee-activity-status">
            <RouteCard className="card" title="Update Employee Activity Status"/>
          </Link>
          <br /><br /><br /><br />
        </div>

      </div>

    </div>

  );
}
 
export default ManagerManageEmployeesView;

