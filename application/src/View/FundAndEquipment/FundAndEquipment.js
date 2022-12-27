import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import RouteCard from "../../Components/RouteCard/RouteCard";
import "./FundAndEquipment.css";

const FundAndEquipment = () => {
  return ( 

    <div className="finance-and-equipment">

      <NavBar />

      <div className="card-container">
        <br /><br /><br /><br /><br />
        <Link to="/fund-and-equipment/fund-request">
          <RouteCard className="card" title="My Fund Requests"/>
        </Link>
        <Link to="/fund-and-equipment/equipment-request">
          <RouteCard className="card" title="My Equipment Requests"/>
        </Link>
      </div>

    </div>

   );
}
 
export default FundAndEquipment;