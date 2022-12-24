import { useEffect, useMemo, useState } from "react";
import NavBar from "../../../Components/NavBar/NavBar";
import Title from "../../../Components/Title/Title";
import "./PersonalLeaveRequestView.css"
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../Utility/firebase-config";
import PersonalLeaveRequestController from "../../../Controller/PersonalLeaveRequestController";
import { useTable } from "react-table";
import PersonalLeaveRequestCard from "../../../Components/PersonalLeaveRequestView/PersonalLeaveRequestCard";

const PersonalLeaveRequestView = () => {

  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [reason, setReason] = useState('');

  const [personalLeaveRequests, setPersonalLeaveRequests] = useState([]);
  const personalLeaveRequestCollectionRef = collection(db, 'personal-leave-requests');

  let displayedRequest = {};

  useEffect(() => {

    const getPersonalLeaveRequests = async () => {

      const data = await getDocs(personalLeaveRequestCollectionRef);
      setPersonalLeaveRequests(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

    }

    getPersonalLeaveRequests();

  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault();
    PersonalLeaveRequestController.createPersonalLeaveRequest(startTime, endTime, reason);
    alert('Personal Leave Request Created');

  }

  return ( 
    <div className="personal-leave-request-view">
      <NavBar />
        <br /><br /><br /><br /><br />
      <Title title="Personal Leave"/>
      <div className="content">
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
      <div className="personal-leave-right">
        {
          personalLeaveRequests.map(e => {
            if (e.email === sessionStorage.getItem('EmployeeEmail'))
              if (!displayedRequest[e.id]){
                displayedRequest[e.id] = true;
                return (
                  <PersonalLeaveRequestCard key={e.id} request={e} />
                );
              }
          })
        }
      </div>
      </div>
      
    </div>
   );
}
 
export default PersonalLeaveRequestView;