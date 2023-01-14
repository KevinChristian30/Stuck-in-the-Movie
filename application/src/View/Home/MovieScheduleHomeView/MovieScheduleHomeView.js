import { Link } from "react-router-dom";
import "./MovieScheduleHomeView.css";
import RouteCard from "../../../Components/RouteCard/RouteCard";

const MovieScheduleHomeView = () => {
  return ( 
    <div className="movie-schedule-home-view">

      <div className="card-container">
        <Link to="/movie-schedule/generate-schedule">
          <RouteCard className="card" title="Generate Schedule"/>
        </Link>
        <br /><br /><br /><br />
      </div>

    </div>
   );
}
 
export default MovieScheduleHomeView;