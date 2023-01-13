import { useEffect } from "react";
import QRCode from "react-qr-code";
import { useLocation, useNavigate } from "react-router-dom";

const PrintFacility = () => {

  const location = useLocation();
  const identifier = location.state.identifier;

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
    <div className="print-facility">
      <QRCode 
        value={identifier}
        size={256}
      />
    </div>
   );
}
 
export default PrintFacility;