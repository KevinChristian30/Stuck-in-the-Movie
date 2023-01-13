import DataTable, { createTheme } from "react-data-table-component";
import Header from "../../../Components/Header/Header";
import SalaryChangeRequestController from "../../../Controller/SalaryChangeRequestController";
import { useEffect, useState } from "react";
import { tableStyle } from "../../TableStyle"; 
import "./ManagerManageEmployeesSalaryChangeProposalsView.css";
import AcceptButton from "../../../Components/Buttons/AcceptButton/AcceptButton";
import RejectButton from "../../../Components/Buttons/RejectButton/RejectButton";

const ManagerManageEmployeesSalaryChangeProposalsView = () => {

  const [salaryChangeProposals, setSalaryChangeProposals] = useState([]);

  let data = [];

  useEffect(() => {

    const getSalaryChangeProposals = async () => {
      
      const databaseData = await SalaryChangeRequestController.getSalaryChangeRequests();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setSalaryChangeProposals(temp);

    }
    
    getSalaryChangeProposals();

  }, []);

  const handleAccept = (id) => {

    SalaryChangeRequestController.changeSalaryChangeRequestStatus(id, 'Accepted');
    alert('Salary Change Request Accepted');
    
  }
  
  const handleReject = (id) => {
    
    SalaryChangeRequestController.changeSalaryChangeRequestStatus(id, 'Rejected');
    alert('Salary Change Request Rejected');

  }

  salaryChangeProposals.map(e => {

    if (e.status === 'Pending'){

      data.push({
        employeeID: e.employeeID,
        email: e.email,
        oldSalary: e.oldSalary,
        newSalary: e.newSalary,
        status: e.status,
        action: <div className="action-container">
                    <AcceptButton onclick={ () => handleAccept(e.id) } />
                    <RejectButton onclick={ () => handleReject(e.id) } />
                </div> 
      });    

    }

  });

  const columns = [
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
    },
    {
      name: 'Action',
      selector: row => row.action
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
    <div className="manager-manage-employees-salary-change-proposals-view">

      <Header title={'Employee Salary Change Proposals'} />

      <div className="container">
        <DataTable id="salary-change-proposal-data" columns={columns} data={data} theme={'tableTheme'} customStyles={ tableStyle } />
      </div>

    </div>
  );
}
 
export default ManagerManageEmployeesSalaryChangeProposalsView;