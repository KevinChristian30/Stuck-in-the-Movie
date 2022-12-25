import { useEffect, useLayoutEffect, useState } from "react";
import CardWithText from "../../../Components/CardWithText/CardWithText";
import NavBar from "../../../Components/NavBar/NavBar";
import Title from "../../../Components/Title/Title";
import WorkingTimeCard from "../../../Components/WorkingTimeCard/WorkingTimeCard";
import WorkingTimeController from "../../../Controller/WorkingTimeController";
import "./WorkingTimeRequestView.css"

const WorkingTimeRequestView = () => {

  const [workingTimes, setWorkingTimes] = useState([]);
  const [workingTime, setWorkingTime] = useState({});

  const [workingTimeRequests, setWorkingTimeRequests] = useState([]);

  const [monday, setMonday] = useState('Morning');
  const [tuesday, setTuesday] = useState('Morning');
  const [wednesday, setWednesday] = useState('Morning');
  const [thursday, setThursday] = useState('Morning');
  const [friday, setFriday] = useState('Morning');
  const [saturday, setSaturday] = useState('Morning');
  const [sunday, setSunday] = useState('Morning');

  // useEffect(() => {

  //   const getWorkingTimeData = async () => {

  //     const data = await WorkingTimeController.getWorkingTime();
  //     setWorkingTimes(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

  //   }

  //   getWorkingTimeData();

  //   for (let i = 0; i < workingTimes.length; i++){
  //     if (workingTimes[i].email === sessionStorage.getItem('EmployeeEmail')){
  //       setWorkingTime(workingTimes[i]);
  //     }
  //   }

  // });

  const handleRequestWorkingTime = (e) => {

    e.preventDefault();
    console.log(monday);
    console.log(tuesday);
    console.log(wednesday);
    console.log(thursday);
    console.log(friday);
    console.log(saturday);
    console.log(sunday);

  }

  const getWorkingTimeRequest = () => {

    if (workingTimeRequests.length > 0){
      return <WorkingTimeCard workingTime={workingTimeRequests} title="My Working Time Request" />
    } else {
      return (
      <div id="no-working-time-request">
        <CardWithText text="You haven't made any working time request" />
      </div>
      )
    }

  }

  return ( 
    <div className="working-time-request-view">
      <NavBar />
      <br /><br /><br /><br /><br />
      <Title title="Working Time"/>
      <div className="working-time-request-view-container">
        <WorkingTimeCard id="current-working-time" workingTime={workingTime} title="My Working Time" />

        
        { getWorkingTimeRequest() }

        <form action="" id="working-time-request-form" onSubmit={handleRequestWorkingTime}>
          <p id="working-time-request-form-title">Request Working Time</p>
          <div className="line">
            <p>Monday</p>
            <select name="" id="" value={monday} onChange={e => setMonday(e.target.value)}>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <div className="line">
            <p>Tuesday</p>
            <select name="" id="" value={tuesday} onChange={e => setTuesday(e.target.value)}>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <div className="line">
            <p>Wednesday</p>
            <select name="" id="" value={wednesday} onChange={e => setWednesday(e.target.value)}>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <div className="line">
            <p>Thursday</p>
            <select name="" id="" value={thursday} onChange={e => setThursday(e.target.value)}>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <div className="line">
            <p>Friday</p>
            <select name="" id="" value={friday} onChange={e => setFriday(e.target.value)}>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <div className="line">
            <p>Saturday</p>
            <select name="" id="" value={saturday} onChange={e => setSaturday(e.target.value)}>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <div className="line">
            <p>Sunday</p>
            <select name="" id="" value={sunday} onChange={e => setSunday(e.target.value)}>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <button id="working-time-request-view-button">Submit Request</button>
        </form>

      </div>
    </div>
  );
}
 
export default WorkingTimeRequestView;
