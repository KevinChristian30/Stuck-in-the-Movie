import "./FundRequestCard.css"

const FundRequestCard = (props) => {

  const fundRequest = props.fundRequest;

  return ( 
    <div className="fund-request-card">
      <div className="fund-request-card-container">
        <div className="line">
          <p>Request ID</p>
          <p>{fundRequest.id}</p>
        </div>
        <div className="line">
          <p>Total Requested</p>
          <p>{fundRequest.amountOfMoney}</p>
        </div>
        <div className="line">
          <p>Reason</p>
          <p>{fundRequest.reason}</p>
        </div>
        <div className="line">
          <p>Request Status</p>
          <p>{fundRequest.status}</p>
        </div>
      </div>
    </div>
  );
}
 
export default FundRequestCard;