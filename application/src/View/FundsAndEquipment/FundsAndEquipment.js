import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import RouteCard from "../../Components/RouteCard/RouteCard";
import "./FundsAndEquipment.css";

const FundsAndEquipment = () => {
  return ( 

    <div className="finance-and-equipment">

      <NavBar />

      <div className="card-container">
        <br /><br /><br /><br /><br />
        <Link to="/finance-and-equipment/fund-requests">
          <RouteCard className="card" title="My Fund Requests"/>
        </Link>
        <Link to="/finance-and-equipment/equipment-requests">
          <RouteCard className="card" title="My Equipment Requests"/>
        </Link>
      </div>

    </div>

   );
}
 
export default FundsAndEquipment;