import { Link } from "react-router-dom";
import RouteCard from "../../../Components/RouteCard/RouteCard";
import "./PromotionAndEventHomeView.css"

const PromotionAndEventHomeView = () => {
  return ( 
    <div className="promotion-and-event-home-view">

      <div className="card-container">
        <Link to="/promotion-and-event/view-members">
          <RouteCard className="card" title="View Members"/>
        </Link>
        <br /><br /><br /><br />
      </div>

    </div>
   );
}
 
export default PromotionAndEventHomeView;