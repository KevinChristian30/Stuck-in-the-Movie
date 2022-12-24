import "./PersonalLeaveRequestCard.css"

const PersonalLeaveRequestCard = (props) => {

  const request = props.request;

  return ( 
  <div className="personal-leave-request-card">
    <div className="container">
      <div className="compartment">
        <p className="request-title">ID</p>
        <p>{request.id}</p>
      </div>
      <div className="compartment">
        <p className="request-title">Leave Start</p>
        <p>{request.leaveStartTime}</p>
      </div>
      <div className="compartment">
        <p className="request-title">Leave End</p>
        <p>{request.leaveEndTime}</p>
      </div>
      <div className="compartment">
        <p className="request-title">Leave Reason</p>
        <p id='personal-leave-card-reason'>{request.reason}</p>
      </div>
      <div className="compartment">
        <p className="request-title">Status</p>
        <p>{request.status}</p>
      </div>
      
    </div>
  </div> );
}
 
export default PersonalLeaveRequestCard;