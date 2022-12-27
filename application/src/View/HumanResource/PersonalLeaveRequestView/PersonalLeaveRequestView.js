import { useEffect, useMemo, useState } from "react";
import NavBar from "../../../Components/NavBar/NavBar";
import Title from "../../../Components/Title/Title";
import "./PersonalLeaveRequestView.css"
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../Utility/firebase-config";
import PersonalLeaveRequestController from "../../../Controller/PersonalLeaveRequestController";
import { useTable } from "react-table";
import PersonalLeaveRequestCard from "../../../Components/PersonalLeaveRequestView/PersonalLeaveRequestCard";
import DataTable, { createTheme } from "react-data-table-component";
import { tableStyle, tableTheme } from "../../TableStyle";
import Expanded from "../../../Components/Expanded/Expanded";

const PersonalLeaveRequestView = () => {

  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [reason, setReason] = useState('');

  const [personalLeaveRequests, setPersonalLeaveRequests] = useState([]);
  const personalLeaveRequestCollectionRef = collection(db, 'personal-leave-requests');

  let displayedRequest = {};
  let data = [];

  useEffect(() => {

    const getPersonalLeaveRequests = async () => {

      const data = await PersonalLeaveRequestController.getPersonalLeaveRequests();
      setPersonalLeaveRequests(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

    }

    getPersonalLeaveRequests();

  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault();
    PersonalLeaveRequestController.createPersonalLeaveRequest(startTime, endTime, reason);
    alert('Personal Leave Request Created');

  }

  const columns = [
    {
        name: 'Request ID',
        selector: row => row.id,
        sortable: true,
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
      name: 'Leave Reason',
      selector: row => row.reason,
      sortable: true
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true
    }
  
  ];

  personalLeaveRequests.map(e => {
    if (e.email === sessionStorage.getItem('EmployeeEmail'))
      if (!displayedRequest[e.id]){
        displayedRequest[e.id] = true;
        
        data.push({
          id: e.id,
          leaveStartTime: e.leaveStartTime,
          leaveEndTime: e.leaveEndTime,
          reason: e.reason,
          status: e.status
        });

      }
  })

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
    <div className="personal-leave-request-view">
      <NavBar />
      <br /><br /><br /><br /><br />
      <Title title="Personal Leave"/>
      <div className="content">

        <div className="personal-leave-right">
          <DataTable columns={columns} data={data} customStyles={tableStyle} theme={'tableTheme'} expandableRows expandableRowsComponent={
            (row) => {
              return expand(row.data.reason) 
            }
          } />
        </div>

        <form action="" onSubmit={handleSubmit} className='personal-leave-left'>
          <b id="personal-leave-card-title">Create Personal Leave Request</b>
          <div className="line">
            <label htmlFor="">Leave Start</label>
            <input type="datetime-local" id="leave-start-date" value={startTime} onChange={ e => { setStartTime(e.target.value) } } />
          </div>
          <div className="line">
            <label htmlFor="">Leave End</label>
            <input type="datetime-local" id="leave-end-date" value={endTime} onChange={ e => { setEndTime(e.target.value) }} />
          </div>
          <div className="line">
            <label htmlFor="">Reason</label>
            <textarea name="" id="reason" value={reason} onChange={e => {setReason(e.target.value)}}></textarea>
          </div>
          <button id="submit-button">Create Request</button>
        </form>

      </div>
      
    </div>
   );
}
 
export default PersonalLeaveRequestView;