import { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import Expanded from "../../../Components/Expanded/Expanded";
import Header from "../../../Components/Header/Header";
import EquipmentRequestController from "../../../Controller/EquipmentRequestController";
import FundRequestController from "../../../Controller/FundRequestController";
import { tableStyle } from "../../TableStyle";
import "./AccountingAndFinanceManageFundAndFacilityRequestsView.css";
import AcceptButton from "../../../Components/Buttons/AcceptButton/AcceptButton";
import RejectButton from "../../../Components/Buttons/RejectButton/RejectButton";
import ReviseButton from "../../../Components/Buttons/ReviseButton/ReviseButton";
import LinkButton from "../../../Components/Buttons/LinkButton/LinkButton";
import FundReviseForm from "../../../Components/FundReviseForm/FundReviseForm";
import FacilityReviseForm from "../../../Components/FacilityReviseForm/FacilityReviseForm";

const AccountingAndFinanceManageFundAndFacilityRequestsView = () => {

  const [fundRequests, setFundRequests] = useState([]);
  const [facilityRequests, setFacilityRequests] = useState([]);

  const [fundRequestToRevise, setFundRequestToRevise] = useState(null);
  const [facilityRequestToRevise, setFacilityRequestToRevise] = useState(null);

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

  const handleAcceptFundRequest = (id) => {

    FundRequestController.setFundRequestStatus(id, 'Accepted');
    alert('Fund Request Accepted');

  }

  const handleRejectFundRequest = (id) => {

    FundRequestController.setFundRequestStatus(id, 'Rejected');
    alert('Fund Request Rejected');
    
  }

  const handleReviseFundRequest = (fundRequest) => {

    setFundRequestToRevise(fundRequest);
    
  }

  fundRequests.map(fundRequest => {

    if (fundRequest.status === 'Pending'){

      fundRequestData.push({
        requesterEmail: fundRequest.requesterEmail,
        requesterDepartment: fundRequest.requesterDepartment,
        amountOfMoney: fundRequest.amountOfMoney,
        reason: fundRequest.reason,
        action: <div className="action-container">
                  <AcceptButton onclick={ () => handleAcceptFundRequest(fundRequest.id) } />
                  <RejectButton onclick={ () => handleRejectFundRequest(fundRequest.id) }  />
                  <ReviseButton onclick={ () => handleReviseFundRequest(fundRequest) }  />
                </div> 
      });

    }

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

  const handleAcceptFacilityRequest = (id) => {

    EquipmentRequestController.setEquipmentRequestStatus(id, 'Accepted');
    alert('Facility/Equipment Request Accepted');

  }

  const handleRejectFacilityRequest = (id) => {

    EquipmentRequestController.setEquipmentRequestStatus(id, 'Rejected');
    alert('Facility/Equipment Request Rejected');
    
  }

  const handleReviseFacilityRequest = (fundRequest) => {

    setFacilityRequestToRevise(fundRequest);
    
  }

  facilityRequests.map(facilityRequest => {

    if (facilityRequest.status === 'Pending'){

      facilityRequestData.push({
        requesterEmail: facilityRequest.requesterEmail,
        requesterDepartment: facilityRequest.requesterDepartment,
        request: facilityRequest.request,
        action: <div className="action-container">
                  <AcceptButton onclick={ () => handleAcceptFacilityRequest(facilityRequest.id) } />
                  <RejectButton onclick={ () => handleRejectFacilityRequest(facilityRequest.id) } />
                  <ReviseButton onclick={ () => handleReviseFacilityRequest(facilityRequest) } />
                </div> 
      });

    }

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

  const getReviseFundRequestForm = () => {

    const handleCancel = (e) => {

      e.preventDefault();
      setFundRequestToRevise(null);

    }

    if (fundRequestToRevise != null) return <FundReviseForm fundRequest={fundRequestToRevise} handleCancel={handleCancel}/>

  }

  const getReviseFacilityRequestForm = () => {

    const handleCancel = (e) => {

      e.preventDefault();
      setFacilityRequestToRevise(null);

    }

    if (facilityRequestToRevise != null) return <FacilityReviseForm facilityRequest={facilityRequestToRevise} handleCancel={handleCancel}/>

  }

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

        { getReviseFundRequestForm() }
        

        <br /><br /><br /><br />

        <h1>Facility and Equipment Requests</h1>
        <br />
        <DataTable columns={facilityRequestColumns} data={facilityRequestData} 
        customStyles={tableStyle} theme={'tableTheme'} expandableRows 
        expandableRowsComponent={(row) => { return expand('Request: ', row.data.request) }}/>

        { getReviseFacilityRequestForm() }

      </div>

      <br /><br /><br /><br /><br /><br /><br />

    </div>
  );
}
 
export default AccountingAndFinanceManageFundAndFacilityRequestsView;