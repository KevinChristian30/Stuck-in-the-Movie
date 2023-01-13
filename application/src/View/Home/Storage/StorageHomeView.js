import { Link } from "react-router-dom";
import "./StorageHomeView.css";
import RouteCard from "../../../Components/RouteCard/RouteCard";

const StorageHomeView = () => {
  return ( 
    <div className="storage-home-view">

      <div className="card-container">
        <Link to="/storage/add-facility-and-equipment">
          <RouteCard className="card" title="Add Facility/Equipment"/>
        </Link>
        <Link to="/storage/facilities-to-purchase">
          <RouteCard className="card" title="Facilities to Purchase"/>
        </Link>
        <br /><br /><br /><br />
      </div>

    </div>
   );
}
 
export default StorageHomeView;