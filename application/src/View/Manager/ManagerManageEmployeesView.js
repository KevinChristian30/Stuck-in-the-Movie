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
          <Link to="/manager/employees/view-employees">
            <RouteCard className="card" title="View Employees"/>
          </Link>
          <Link to="/manager/employees/employee-resignation-proposals">
            <RouteCard className="card" title="Resignation Proposals"/>
          </Link>
          <Link to="/manager/employees/salary-change-proposals">
            <RouteCard className="card" title="Salary Change Proposals"/>
          </Link>
          <Link to="/manager/employees/warning-letter-proposals">
            <RouteCard className="card" title="Warning Letter Proposals"/>
          </Link>
          <Link to="/manager/employees/termination-letter-proposals">
            <RouteCard className="card" title="Termination Letter Proposals"/>
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

