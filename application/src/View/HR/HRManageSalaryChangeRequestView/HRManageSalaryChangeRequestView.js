import { useEffect, useState } from "react";
import Header from "../../../Components/Header/Header";
import EmployeeController from "../../../Controller/EmployeeController";
import DataTable, { createTheme } from "react-data-table-component";
import { tableStyle } from "../../TableStyle";
import "./HRManageSalaryChangeRequestView.css";
import SubmitButton from "../../../Components/Buttons/SubmitButton/SubmitButton";
import SalaryChangeRequestController from "../../../Controller/SalaryChangeRequestController";
import Title from "../../../Components/Title/Title";

const HRManageSalaryChangeRequestView = () => {

  const [employees, setEmployees] = useState([]);
  const [salaryChangeProposals, setSalaryChangeProposals] = useState([]);
 
  let employeesData = [];
  let salaryChangeData = [];

  useEffect(() => {

    const getEmployees = async () => {

      const databaseData = await EmployeeController.getEmployees();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setEmployees(temp);

    }

    getEmployees();

    const getSalaryChangeProposals = async () => {
      
      const databaseData = await SalaryChangeRequestController.getSalaryChangeRequests();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setSalaryChangeProposals(temp);

    }
    
    getSalaryChangeProposals();

  }, []);

  employees.map(e => {

    employeesData.push({
      id: e.id,
      email: e.EmployeeEmail,
      salary: e.EmployeeSalary,
      department: e.EmployeeDepartment
    });

  });

  salaryChangeProposals.map(e => {

    if (e.status === 'Pending'){

      salaryChangeData.push({
        employeeID: e.employeeID,
        email: e.email,
        oldSalary: e.oldSalary,
        newSalary: e.newSalary,
        status: e.status
      });    

    }

  });

  const handleSalaryChangeRequestCreation = (data, newSalary) => {

    SalaryChangeRequestController.createSalaryChangeRequest(data.id, data.email, data.salary, newSalary);
    alert('Employee Salary Change Request Uploaded');

  }

  const expand = (data) => {

    return (
      <div className="hr-manage-salary-change-request-view-expand">
        <form action="" id="create-salary-change-request-form">
          <label htmlFor="">New Salary</label>
          <input type="number" id={"salary-form" + data.id} />
          <SubmitButton id="submit-button" onclick={() => handleSalaryChangeRequestCreation(data, document.getElementById("salary-form" + data.id).value)}>Submit</SubmitButton>
        </form>
      </div>
    );

  }

  const employeesColumns = [
    {
      name: 'Employee ID',
      selector: row => row.id,
      sortable: true
    },
    {
      name: 'Employee Email',
      selector: row => row.email,
      sortable: true
    },
    {
      name: 'Employee Department',
      selector: row => row.department,
      sortable: true
    },
    {
      name: 'Employee Salary',
      selector: row => row.salary,
      sortable: true
    },
  ];

  const salaryChangesColumns = [
    {
      name: 'Employee ID',
      selector: row => row.employeeID,
      sortable: true,
    },
    {
      name: 'Employee Email',
      selector: row => row.email,
      sortable: true
    },
    {
      name: 'Old Salary',
      selector: row => row.oldSalary,
      sortable: true,
    },
    {
      name: 'New Salary',
      selector: row => row.newSalary,
      sortable: true
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true
    }
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
    <div className="hr-manage-salary-change-request-view">

      <Header title={'Request Salary Change'} />
      
      <div className="employees-list">
        <DataTable id="employees" columns = {employeesColumns} data = {employeesData} theme = {'tableTheme'} 
          customStyles = {tableStyle} expandableRows expandableRowsComponent={
            row => {
              return expand(row.data);
            }
          }
        />
      </div>

      <br /><br /><br /><br />

      <Title title={'Submitted Requests'} />
      <div className="employees-list">
        
        <DataTable columns = {salaryChangesColumns} data = {salaryChangeData} theme = {'tableTheme'} 
          customStyles = {tableStyle} />
        </div>

      <br /><br /><br /><br />

    </div>
  );
}

export default HRManageSalaryChangeRequestView;