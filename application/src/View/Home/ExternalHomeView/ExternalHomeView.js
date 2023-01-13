import { Link } from "react-router-dom";
import RouteCard from "../../../Components/RouteCard/RouteCard";
import "./ExternalHomeView.css";

const ExternalHomeView = () => {

  return ( 
    <div className="external-home-view-container">

      <div className="card-container">

        <Link to="/external/add-partner">
          <RouteCard className="card" title="Add Partner"/>
        </Link>
        <Link to="/external/record-external-information">
          <RouteCard className="card" title="Add External Party Information"/>
        </Link>

        <br /><br /><br /><br />
      </div>

    </div>
  );
}
 
export default ExternalHomeView;