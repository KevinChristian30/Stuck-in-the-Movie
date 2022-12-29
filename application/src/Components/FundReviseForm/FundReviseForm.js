import { useState } from "react";
import FundRequestController from "../../Controller/FundRequestController";
import "./FundReviseForm.css";

const FundReviseForm = (props) => {

  const fundRequest = props.fundRequest;
  const handleCancel = props.handleCancel;

  const [reviseReason, setReviseReason] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();
    alert('Fund Request Revision Submitted');
    FundRequestController.reviseFundRequst(fundRequest.id, reviseReason);

  };

  return ( 
    <div className="fund-revise-form">
    
      <form action="" className="container">
        <div className="line">
          <label htmlFor="">Request ID:</label>
          <label htmlFor="" className="right">{fundRequest.id}</label>
        </div>
        <div className="line">
          <label htmlFor="">Requester Email</label>
          <label htmlFor="" className="right">{fundRequest.requesterEmail}</label>
        </div>
        <div className="line">
          <label htmlFor="">Requester Department</label>
          <label htmlFor="" className="right">{fundRequest.requesterDepartment}</label>
        </div>
        <div className="line">
          <label htmlFor="">Money Requested:</label>
          <label htmlFor="" className="right">{fundRequest.amountOfMoney}</label>
        </div>
        <div className="line">
          <label htmlFor="">Reason:</label>
          <label htmlFor="" className="right">{fundRequest.reason}</label>
        </div>
        <br />
        <label htmlFor="">Revision Reason</label>
        <textarea value={reviseReason} onChange={(e) => setReviseReason(e.target.value)} name="" id="" className="revise-reason"></textarea>
        <button onClick={ handleCancel } >Cancel</button>
        <button onClick={ handleSubmit }>Submit</button>
      </form>
    
    </div>
  );
}
 
export default FundReviseForm;