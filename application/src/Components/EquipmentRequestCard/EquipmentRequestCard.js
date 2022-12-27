const EquipmentRequestCard = (props) => {

  const request = props.equipmentRequest;

  return ( 
    <div className="equipment-request-card">
      
      <div className="fund-request-card">
        <div className="fund-request-card-container">
          <div className="line">
            <p>Request ID</p>
            <p>{request.id}</p>
          </div>
          <div className="line">
            <p>Request</p>
            <p>{request.request}</p>
          </div>
          <div className="line">
            <p>Request Status</p>
            <p>{request.status}</p>
          </div>
      </div>

    </div>

    </div>
  );
}
 
export default EquipmentRequestCard;