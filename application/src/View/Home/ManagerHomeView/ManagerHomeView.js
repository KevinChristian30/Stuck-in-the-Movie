import { Link } from "react-router-dom";
import RouteCard from "../../../Components/RouteCard/RouteCard";
import "./ManagerHomeView.css";

const ManagerHomeView = () => {
  return ( 
    <div className="manager-home-view-container">

      <div className="card-container">
        <Link to="/manager/employees">
          <RouteCard className="card" title="Employees"/>
        </Link>
        <Link to="/manager/finances">
          <RouteCard className="card" title="Finances"/>
        </Link>
        <Link to="/manager/operations">
          <RouteCard className="card" title="Operations"/>
        </Link>
        <Link to="/manager/facilities-and-equipment">
          <RouteCard className="card" title="Facilities and Equipments"/>
        </Link>
        <Link to="/manager/memberships">
          <RouteCard className="card" title="Memberships"/>
        </Link>
        <Link to="/manager/externals">
          <RouteCard className="card" title="Externals"/>
        </Link>
        <br /><br /><br /><br />
      </div>
      
    </div>
  );
}
 
export default ManagerHomeView;