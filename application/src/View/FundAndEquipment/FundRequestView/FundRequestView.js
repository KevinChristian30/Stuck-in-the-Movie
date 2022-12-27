import { useEffect, useState } from "react";
import NavBar from "../../../Components/NavBar/NavBar";
import Title from "../../../Components/Title/Title";
import FundRequestController from "../../../Controller/FundRequestController";
import "./FundRequestView.css";
import DataTable, { createTheme } from 'react-data-table-component';
import {tableStyle} from "../../TableStyle";
import Expanded from "../../../Components/Expanded/Expanded";

const FundRequestView = () => {

  const [fundAmount, setFundAmount] = useState(0);
  const [reason, setReason] = useState('');

  const [fundRequests, setFundRequests] = useState([]);

  let data = [];

  const handleFundRequest = (e) => {

    e.preventDefault();
    FundRequestController.createFundRequest(fundAmount, reason);
    alert('Fund Request Created');

  }

  useEffect(() => {

    const getFundRequest = async () => {
      
      const data = await FundRequestController.getFundRequests();
      setFundRequests(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    
    }
    
    getFundRequest();

  }, []);

  const columns = [
    {
        name: 'Request ID',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Amount Requested',
        selector: row => row.amountOfMoney,
        sortable: true
    },
    {
      name: 'Reason',
      selector: row => row.reason,
      sortable: true,
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true
    }
  ];

  fundRequests.map(e => {

    if (e.requesterEmail === sessionStorage.getItem('EmployeeEmail')){

      data.push({
        id: e.id,
        amountOfMoney: e.amountOfMoney,
        reason: e.reason,
        status: e.status
      });

    }

  });

  const expand = (reason) => {
    
    return( 
      <Expanded text={'Reason: ' + reason} />
    )

  }

  createTheme('tableTheme', {
    text: {
      primary: 'white',
    },
    background: {
      default: '#221F1F',
    },
    context: {
      background: '#221F1F',
      text: '#FFFFFF',
    },
    divider: {
      default: '#F5F5F1',
    },
  }, 'dark');

  return ( 
    <div className="fund-request-view">
      <NavBar />
      <br /><br /><br /><br /><br />
      <Title title="Fund Request"/>

      <div className="fund-request-view-container">
        <form action="" id="fund-request-form" onSubmit={handleFundRequest}>
          <p id="fund-request-form-title">Request Fund</p>
          <div className="line">
            <label htmlFor="">Fund Amount</label>
            <input type="number" id="fund-amount" value={fundAmount} onChange={e => setFundAmount(e.target.value)} />
          </div>
          <div className="line">
            <label htmlFor="">Reason</label>
            <textarea name="" id="" value={reason} onChange={e => setReason(e.target.value)}></textarea>
          </div>
          <button id="fund-request-form-submit-button">Submit Fund Request</button>
        </form>
        <div className="fund-request-view-right">
          <DataTable columns={columns} data={data} theme={'tableTheme'} customStyles={tableStyle} expandableRows expandableRowsComponent={
            (row) => {
              return expand(row.data.reason) 
            }
          } />
        </div>
      </div>

    </div>
  );
}
 
export default FundRequestView;