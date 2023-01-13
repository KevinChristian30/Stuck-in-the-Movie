import { Link } from "react-router-dom";
import RouteCard from "../../../Components/RouteCard/RouteCard";
import "./MovieFrontOfficeHomeView.css";

const MovieFrontOfficeHomeView = () => {
  return ( 
    <div className="movie-front-office-home-view">

      <div className="card-container">
        <Link to="/movie-front-office/add-member">
          <RouteCard className="card" title="Add Member"/>
        </Link>
        <br /><br /><br /><br />
      </div>

    </div>
   );
}
 
export default MovieFrontOfficeHomeView;