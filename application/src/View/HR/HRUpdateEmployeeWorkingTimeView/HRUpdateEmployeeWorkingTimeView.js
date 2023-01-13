import { useEffect, useState } from "react";
import Header from "../../../Components/Header/Header";
import DataTable, { createTheme } from "react-data-table-component";
import { tableStyle } from "../../TableStyle";
import "./HRUpdateEmployeeWorkingTimeView.css";
import WorkingTimeController from "../../../Controller/WorkingTimeController";
import WorkingTimeCard from "../../../Components/WorkingTimeCard/WorkingTimeCard";
import WorkingTimeRequestController from "../../../Controller/WorkingTimeRequestController";
import CardWithText from "../../../Components/CardWithText/CardWithText";

const HRUpdateEmployeeWorkingTimeView = () => {

  const [workingTime, setWorkingTimes] = useState([]);
  const [workingTimeRequests, setWorkingTimeRequests] = useState([]);

  let data = [];

  useEffect(() => {

    const getWorkingTimes = async () => {
      
      const databaseData = await WorkingTimeController.getWorkingTimes();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setWorkingTimes(temp);

    }
    
    getWorkingTimes();

    const getWorkingTimeRequests = async () => {

      const databaseData = await WorkingTimeRequestController.getWorkingTimeRequests();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setWorkingTimeRequests(temp);

    }

    getWorkingTimeRequests();

  }, []);

  let keyToID = {};

  workingTime.map(e => {
    
    keyToID[e.email] = e.id;
    data.push({
      employeeEmail: e.email,
      monday: e.monday,
      tuesday: e.tuesday,
      wednesday: e.wednesday,
      thursday: e.thursday,
      friday: e.friday,
      saturday: e.saturday,
      sunday: e.sunday
    });

  });

  // fundRequests.map(e => {

  //   if (e.requesterEmail === sessionStorage.getItem('EmployeeEmail')){

  //     data.push({
  //       id: e.id,
  //       amountOfMoney: e.amountOfMoney,
  //       reason: e.reason,
  //       status: e.status,
  //       revisionReason: e.revisionReason
  //     });    

  //   }

  // });

  // resignationLetters.map((item) => {
  //   if (!displayedLetter[item.identifier] && item.status === 'Pending'){
  //     displayedLetter[item.identifier] = true;
      
  //     data.push({
  //       id: item.identifier,
  //       action: <div className="action-container">
  //                 <LinkButton url={item.fileURL} />
  //                 <AcceptButton onclick={ () => handleAccept(item.id) } />
  //                 <RejectButton onclick={ () => handleReject(item.id) } />
  //               </div> 
  //     });

  //   }
  // })

  const expand = (email) => {

    let req = null;

    for (let i = 0; i < workingTimeRequests.length; i++){
      if (workingTimeRequests[i].requesterEmail === email){
        req = workingTimeRequests[i];
        break;
      }
    }

    const getRequest = () => {
      if (req !== null){
        return <WorkingTimeCard workingTime={req} title="Preference" />
      } else {
        return (
        <div id="no-working-time-request">
          <CardWithText text="Employee hasn't made any working time request" />
        </div>
        )
      }
    }

    const handleUpdateWorkingTime = () => {

      const monday = document.getElementById('monday' + email).value;
      const tuesday = document.getElementById('tuesday' + email).value;
      const wednesday = document.getElementById('wednesday' + email).value;
      const thursday = document.getElementById('thursday' + email).value;
      const friday = document.getElementById('friday' + email).value;
      const saturday = document.getElementById('saturday' + email).value;
      const sunday = document.getElementById('sunday' + email).value;
      WorkingTimeController.updateWorkingTime(keyToID[email], monday, tuesday, wednesday, thursday, friday, saturday, sunday);
      alert('Employee Working Time Updated');
    
    }
    
    return( 
      <div className="expand-container">
        <br />
        <div className="left">
          { getRequest() }
        </div>
        <div className="right">
          <form action="">
          <div className="line">
            <p>Monday</p>
            <select name="" id={'monday' + email} >
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <div className="line">
            <p>Tuesday</p>
            <select name="" id={'tuesday' + email} >
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <div className="line">
            <p>Wednesday</p>
            <select name="" id={'wednesday' + email} >
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <div className="line">
            <p>Thursday</p>
            <select name="" id={'thursday' + email} >
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <div className="line">
            <p>Friday</p>
            <select name="" id={'friday' + email} >
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <div className="line">
            <p>Saturday</p>
            <select name="" id={'saturday' + email} >
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <div className="line">
            <p>Sunday</p>
            <select name="" id={'sunday' + email} >
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <div className="line">
            <button id="hr-update-employee-working-time-view-button" type="button"
            onClick={handleUpdateWorkingTime}>Update</button>
          </div>
          </form>
        </div>
        <br />
      </div>
    )

  }

  const columns = [
    {
      name: 'Employee Email',
      selector: row => row.employeeEmail,
      sortable: true,
    },
    {
      name: 'Monday',
      selector: row => row.monday,
      sortable: true
    },
    {
      name: 'Tuesday',
      selector: row => row.tuesday,
      sortable: true,
    },
    {
      name: 'Wednesday',
      selector: row => row.wednesday,
      sortable: true
    },
    {
      name: 'Thursday',
      selector: row => row.thursday,
      sortable: true
    },
    {
      name: 'Friday',
      selector: row => row.friday,
      sortable: true
    },
    {
      name: 'Saturday',
      selector: row => row.saturday,
      sortable: true
    },
    {
      name: 'Sunday',
      selector: row => row.sunday,
      sortable: true
    },
  ];

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
    <div className="hr-update-employee-working-time-view">

      <Header title={'Update Employee Working Time'} />
      
      <div className="container">
        <DataTable columns={columns} data={data} theme={'tableTheme'} customStyles={tableStyle}
        expandableRows expandableRowsComponent={
          (row) => {
            return expand(row.data.employeeEmail) 
          }
        } />
      </div>

    </div>
   );
}
 
export default HRUpdateEmployeeWorkingTimeView;

  