import { useEffect } from "react";
import QRCode from "react-qr-code";
import { useLocation, useNavigate } from "react-router-dom";
import "./PrintMembershipCard.css";

const PrintMembershipCard = () => {

  const location = useLocation();
  const name = location.state.name;
  const email = location.state.email;
  
  let printed = false;
  const nav = useNavigate();

  useEffect(() => {
    if (!printed) {
      window.print();
      printed = true;
      nav(-1);
    }
  })

  return ( 
    <div className="print-membership-card">
      <div className="container">
        <div className="text">
          <h1>Stuck in the movie</h1>
          <h3>{ name }</h3>
        </div>
        <QRCode 
          value={email}
          size={256}
        />
      </div>
      
    </div>
   );
}
 
export default PrintMembershipCard;