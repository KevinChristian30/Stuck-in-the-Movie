import { useEffect, useState } from "react";
import Header from "../../../Components/Header/Header";
import "./HRManageViewEmployeesView";
import EmployeeController from "../../../Controller/EmployeeController";
import DataTable, { createTheme } from "react-data-table-component";
import { tableStyle } from "../../TableStyle";
import "./HRManageViewEmployeesView.css";
import Expanded from "../../../Components/Expanded/Expanded";
import WarningLetterController from "../../../Controller/WarningLetterController";
import PersonalLeaveRequestController from "../../../Controller/PersonalLeaveRequestController";
import WorkingTimeController from "../../../Controller/WorkingTimeController";
import WorkingTimeCard from "../../../Components/WorkingTimeCard/WorkingTimeCard";

const HRManageViewEmployeesView = () => {

  const [employees, setEmployees] = useState([]);
  const [warningLetters, setWarningLetters] = useState([]);
  const [personalLeaves, setPersonalLeaves] = useState([]);
  const [workingTimes, setWorkingTimes] = useState([]);

  let employeesData = [];

  useEffect(() => {

    const getEmployees = async () => {
      
      const databaseData = await EmployeeController.getEmployees();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setEmployees(temp);

    }
    
    getEmployees();

    const getWarningLetters = async () => {

      const databaseData = await WarningLetterController.getWarningLetters();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setWarningLetters(temp);

    }

    getWarningLetters();

    const getPersonalLeaves = async () => {

      const databaseData = await PersonalLeaveRequestController.getPersonalLeaveRequests() ;
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setPersonalLeaves(temp);

    }

    getPersonalLeaves();

    const getWorkingTimes = async () => {

      const databaseData = await WorkingTimeController.getWorkingTimes();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setWorkingTimes(temp);

    }

    getWorkingTimes();

  }, []);

  employees.map(e => {

    if (e.EmployeeStatus === 'Active'){

      employeesData.push({
        id: e.id,
        address: e.EmployeeAddress,
        department: e.EmployeeDepartment,
        email: e.EmployeeEmail,
        gender: e.EmployeeGender,
        name: e.EmployeeName,
        phoneNumber: e.EmployeePhoneNumber,
        salary: e.EmployeeSalary,
        status: e.EmployeeStatus
      }); 

    }

  });

  const employeeColumns = [
    {
      name: 'Employee ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Department',
      selector: row => row.department,
      sortable: true
    }
  ];

  const warningLetterColumns = [
    {
      name: 'Warning Letters',
      selector: row => row.url,
      sortable: true
    },
  ]

  const personalLeaveColumns = [
    {
      name: 'Personal Leave Request ID',
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
  ]

  const expand = (data) => {

    let warningLettersData = [];

    warningLetters.map(e => {

      if (e.status === 'Accepted' && e.employeeEmail === data.email){
  
        warningLettersData.push({
          url: <a href={e.fileURL} target="_blank">View</a>
        });
  
      }
  
    })

    let personalLeavesData = [];

    personalLeaves.map(e => {

      if (e.status === 'Accepted' && e.email === data.email){
      
        personalLeavesData.push({
          id: e.id,
          leaveStartTime: e.leaveStartTime,
          leaveEndTime: e.leaveEndTime,
          reason: e.reason,
          status: e.status
        });
      
      }

    })

    let workingTime;
    for (let i = 0; i < workingTimes.length; i++){
    
      if (workingTimes[i].email === data.email){
        workingTime = workingTimes[i];
        break;
      }
    
    }

    return (
      <div className="expand-container">
        <Expanded text={'Address: ' + data.address} />
        <Expanded text={'Email: ' + data.email} />
        <Expanded text={'Gender: ' + data.gender} />
        <Expanded text={'Phone Number: ' + data.phoneNumber} />
        <Expanded text={'Salary: ' + data.salary} />
        <DataTable columns={warningLetterColumns} data={warningLettersData} theme={'tableTheme'} customStyles={tableStyle} />
        <DataTable columns={personalLeaveColumns} data={personalLeavesData} theme={'tableTheme'} customStyles={tableStyle} />
        <WorkingTimeCard id="current-working-time" workingTime={workingTime} title="Working Time" />
      </div>
    );

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
    <div className="hr-manage-view-employees-view">

      <Header title={'View Employees (Personal Information)'} />

      <div className="container">
        <DataTable columns={employeeColumns} data={employeesData} theme={'tableTheme'} customStyles={tableStyle} expandableRows expandableRowsComponent={
            (row) => {
              return expand(row.data) 
            }
          } />
      </div>
      
    </div>
   );
}
 
export default HRManageViewEmployeesView;