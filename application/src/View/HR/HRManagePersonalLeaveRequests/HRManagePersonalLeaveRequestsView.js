import { useEffect, useState } from "react";
import Header from "../../../Components/Header/Header";
import { tableStyle } from "../../TableStyle";
import Expanded from "../../../Components/Expanded/Expanded";
import PersonalLeaveRequestController from "../../../Controller/PersonalLeaveRequestController";
import DataTable, { createTheme } from "react-data-table-component";
import "./HRManagePersonalLeaveRequestsView.css";
import AcceptButton from "../../../Components/Buttons/AcceptButton/AcceptButton";
import RejectButton from "../../../Components/Buttons/RejectButton/RejectButton";

const HRManagePersonalLeaveRequestsView = () => {

  const [personalLeaveRequests, setPersonalLeaveRequests] = useState([]);
  
  let data = [];

  useEffect(() => {

    const getPersonalLeaveRequests = async () => {

      const databaseData = await PersonalLeaveRequestController.getPersonalLeaveRequests();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setPersonalLeaveRequests(temp);

    }

    getPersonalLeaveRequests();

  }, []);

  const handleAcceptLeaveRequest = (id) => {

    PersonalLeaveRequestController.updateLeaveRequestStatus(id, 'Accepted');
    alert('Personal Leave Request Accepted');
    
  }
  
  const handleRejectLeaveRequest = (id) => {
    
    PersonalLeaveRequestController.updateLeaveRequestStatus(id, 'Rejected');
    alert('Personal Leave Request Rejected');

  }

  personalLeaveRequests.map(e => {

    if (e.status === 'Pending'){

      data.push({
        id: e.id,
        email: e.email,
        leaveStartTime: e.leaveStartTime,
        leaveEndTime: e.leaveEndTime,
        reason: e.reason,
        status: e.status,
        action: <div className="action-container">
          <AcceptButton id="accept-button" onclick={ () => handleAcceptLeaveRequest(e.id) } />
          <RejectButton onclick={ () => handleRejectLeaveRequest(e.id) }  />
        </div>
      });

    }

  });

  const expand = (data) => {
    
    return( 
      <div className="container">
        <Expanded text={'Reason: ' + data.reason} />
      </div>
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

  const columns = [
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true
    },
    {
      name: 'Leave Start',
      selector: row => row.leaveStartTime,
      sortable: true
    },
    {
      name: 'Leave End',
      selector: row => row.leaveEndTime,
      sortable: true
    },
    {
      name: 'Reason',
      selector: row => row.reason,
      sortable: true
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true
    },
    {
      name: 'Action',
      selector: row => row.action
    }
  ]

  return ( 
    <div className="hr-manage-personal-leave-requests-view">

      <Header title={"Personal Leave Requests"}/>

      <DataTable id="data-container"
        columns = {columns} data = {data} theme = {'tableTheme'}
        customStyles = {tableStyle} expandableRows expandableRowsComponent={
          row => {
            return expand(row.data);
          }
        }
      />

    </div>
  );
}
 
export default HRManagePersonalLeaveRequestsView;