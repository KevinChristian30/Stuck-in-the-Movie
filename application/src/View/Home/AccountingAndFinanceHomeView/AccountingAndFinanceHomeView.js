import { Link } from "react-router-dom";
import RouteCard from "../../../Components/RouteCard/RouteCard";
import "./AccountingAndFinanceHomeView.css";

const AccountingAndFinanceHomeView = () => {
  return ( 
    <div className="accounting-and-finance-home-view">

      <div className="card-container">

        <Link to="/accounting-and-finance/fund-and-facility-requests">
          <RouteCard className="card" title="Fund and Facility Requests"/>
        </Link>
        
        <br /><br /><br /><br />
      </div>

    </div>
  );
}
 
export default AccountingAndFinanceHomeView;