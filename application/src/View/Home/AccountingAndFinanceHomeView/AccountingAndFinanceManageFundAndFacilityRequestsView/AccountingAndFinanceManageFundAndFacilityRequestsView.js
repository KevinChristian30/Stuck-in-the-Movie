import { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import Expanded from "../../../../Components/Expanded/Expanded";
import Header from "../../../../Components/Header/Header";
import EquipmentRequestController from "../../../../Controller/EquipmentRequestController";
import FundRequestController from "../../../../Controller/FundRequestController";
import { tableStyle } from "../../../TableStyle";
import "./AccountingAndFinanceManageFundAndFacilityRequestsView.css";
import AcceptButton from "../../../../Components/Buttons/AcceptButton/AcceptButton";
import RejectButton from "../../../../Components/Buttons/RejectButton/RejectButton";
import ReviseButton from "../../../../Components/Buttons/ReviseButton/ReviseButton";

const AccountingAndFinanceManageFundAndFacilityRequestsView = () => {

  const [fundRequests, setFundRequests] = useState([]);
  const [facilityRequests, setFacilityRequests] = useState([]);

  let fundRequestData = [];
  let facilityRequestData = [];

  useEffect(() => {

    const getFundRequests = async () => {
      
      const databaseData = await FundRequestController.getFundRequests();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setFundRequests(temp);

    }
    
    getFundRequests();

    const getFacilityRequests = async () => {

      const databaseData = await EquipmentRequestController.getEquipmentRequests();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setFacilityRequests(temp);

    }

    getFacilityRequests();

  }, []);

  const fundRequestColumns = [
    {
      name: 'Requester Email',
      selector: row => row.requesterEmail,
      sortable: true,
    },
    {
      name: 'Requester Department',
      selector: row => row.requesterDepartment,
      sortable: true,
    },
    {
      name: 'Amount Requested',
      selector: row => row.amountOfMoney,
      sortable: true,
    },
    {
      name: 'Reason',
      selector: row => row.reason,
      sortable: true,
    },
    {
      name: 'Action',
      selector: row => row.action,
      sortable: false
    }
  ];

  fundRequests.map(fundRequest => {

    fundRequestData.push({
      requesterEmail: fundRequest.requesterEmail,
      requesterDepartment: fundRequest.requesterDepartment,
      amountOfMoney: fundRequest.amountOfMoney,
      reason: fundRequest.reason,
      action: <div className="action-container">
                <AcceptButton />
                <RejectButton />
                <ReviseButton />
              </div> 
    });

  });

  const facilityRequestColumns = [
    {
      name: 'Request Email',
      selector: row => row.requesterEmail,
      sortable: true,
    },
    {
      name: 'Requester Department',
      selector: row => row.requesterDepartment,
      sortable: true,
    },
    {
      name: 'Request',
      selector: row => row.request,
      sortable: true,
    },
    {
      name: 'Action',
      selector: row => row.action,
    }
  ];

  facilityRequests.map(facilityRequest => {

    facilityRequestData.push({
      requesterEmail: facilityRequest.requesterEmail,
      requesterDepartment: facilityRequest.requesterDepartment,
      request: facilityRequest.request,
      action: <div className="action-container">
                <AcceptButton />
                <RejectButton />
                <ReviseButton />
              </div> 
    });

  });

  const expand = (left, reason) => {

    return <Expanded text={left + reason} />

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
    <div className="accounting-and-finance-manage-fund-and-facility-request-view">

      <Header title="Fund and Facility Requests" />
      <br /><br />

      <div className="accounting-and-finance-manager-fund-and-facility-request-container">

        <h1>Fund Requests</h1>
        <br />
        <DataTable columns={fundRequestColumns} data={fundRequestData} 
        customStyles={tableStyle} theme={'tableTheme'} expandableRows 
        expandableRowsComponent={(row) => { return expand('Reason: ', row.data.reason) }} />

        <br /><br /><br /><br />

        <h1>Facility and Equipment Requests</h1>
        <br />
        <DataTable columns={facilityRequestColumns} data={facilityRequestData} 
        customStyles={tableStyle} theme={'tableTheme'} expandableRows 
        expandableRowsComponent={(row) => { return expand('Request: ', row.data.request) }}/>

      </div>

      <br /><br /><br /><br /><br /><br /><br />

    </div>
  );
}
 
export default AccountingAndFinanceManageFundAndFacilityRequestsView;