import "./AddEmployee.css";

import { useState } from "react";

import NavBar from "../NavBar/NavBar";
import AddEmployeeController from "../../Controller/AddEmployeeController";

const AddEmployee = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('-');
  const [department, setDepartment] = useState('-');
  const [salary, setSalary] = useState(0);
  const [address, setAddress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleAddEmployee = async (e) => {

    e.preventDefault();
    AddEmployeeController.createEmployee(name, email, phoneNumber, gender, department, salary, address, dateOfBirth);

  }

  return ( 
    <div className="add-employee-container">
      <NavBar />
      <div className="add-employee">
        
        <form action="" id="add-employee-form" onSubmit={handleAddEmployee}>
          <h1 id="title">Add Employee</h1>
          <br />  
          <div className="add-employee-input-container">
            <label htmlFor="add-employee-name">Name</label>
            <input type="text" name="add-employee-name" id="add-employee-name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="add-employee-input-container">
            <label htmlFor="add-employee-email">Email</label>
            <input type="email" name="add-employee-email" id="add-employee-email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="add-employee-input-container">
            <label htmlFor="add-employee-phonenumber">Phone Number</label>
            <input type="number" className="add-employee-phonenumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
          </div>
          <div className="add-employee-input-container">
            <label htmlFor="add-employee-gender">Gender</label>
            <select name="add-employee-gender" id="add-employee-gender" value={gender} onChange={e => setGender(e.target.value)}>
              <option value="-">-</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="add-employee-input-container">
            <label htmlFor="add-employee-department">Department</label>
            <select name="add-employee-department" id="add-employee-department" value={department} onChange={e => {setDepartment(e.target.value)}}>
              <option value="-">-</option>
              <option value="Manager">Manager</option>
              <option value="Human">Human Resource</option>
              <option value="Storage">Storage</option>
              <option value="Accounting and Finance">Accounting and Finance</option>
              <option value="External">External</option>
              <option value="Promotion and Event">Promotion and Event</option>
              <option value="Cafe - Front Office">Cafe - Front Office</option>
              <option value="Cafe - Kitchen">Cafe - Kitchen</option>
              <option value="Movie - Front Office">Movie - Front Office</option>
              <option value="Movie - Schedule">Movie - Schedule</option>
              <option value="Movie - Operation">Movie - Operation</option>
              <option value="Administrator">Administrator</option>
            </select>
          </div>  
          <div className="add-employee-input-container">
            <label htmlFor="add-employee-salary">Salary</label>
            <input type="number" className="add-employee-salary" value={salary} onChange={e => setSalary(e.target.value)} />
          </div>
          <div className="add-employee-input-container">
            <label htmlFor="add-employee-address">Address</label>
            <textarea id="add-employee-address" value={address} onChange={e => setAddress(e.target.value)}></textarea>
          </div>
          <div className="add-employee-input-container">
            <label htmlFor="add-employee-dob">Date of Birth</label>
            <input type="date" id="add-employee-dob" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} />
          </div>
          <div className="add-employee-input-container">
            <button id="add-employee-submit-button">Add Employee</button>
          </div>
        </form>
      </div>
    </div>
   );
}
 
export default AddEmployee;