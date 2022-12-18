import "./AddEmployee.css";

const AddEmployee = () => {
  return ( 
    <div className="add-employee">
      <form action="" id="add-employee-form">
        <h1 id="title">Add Employee</h1>
        <div className="add-employee-input-container">
          <label htmlFor="add-employee-name">Name</label>
          <input type="text" name="add-employee-name" id="add-employee-name" />
        </div>
        <div className="add-employee-input-container">
          <label htmlFor="add-employee-email">Email</label>
          <input type="email" name="add-employee-email" id="add-employee-email" />
        </div>
        <div className="add-employee-input-container">
          <label htmlFor="add-employee-phonenumber">Phone Number</label>
          <input type="number" className="add-employee-phonenumber" />
        </div>
        <div className="add-employee-input-container">
          <label htmlFor="add-employee-gender">Gender</label>
          <select name="add-employee-gender" id="add-employee-gender">
            <option value="">-</option>
            <option value="">Male</option>
            <option value="">Female</option>
          </select>
        </div>
        <div className="add-employee-input-container">
          <label htmlFor="add-employee-department">Department</label>
          <select name="add-employee-department" id="add-employee-department">
            <option value="">-</option>
            <option value="">Manager</option>
            <option value="">Human Resource</option>
            <option value="">Storage</option>
            <option value="">Accounting and Finance</option>
            <option value="">External</option>
            <option value="">Promotion and Event</option>
            <option value="">Cafe - Front Office</option>
            <option value="">Cafe - Kitchen</option>
            <option value="">Movie - Front Office</option>
            <option value="">Movie - Schedule</option>
            <option value="">Movie - Operation</option>
            <option value="">Administrator</option>
          </select>
        </div>  
        <div className="add-employee-input-container">
          <label htmlFor="add-employee-salary">Salary</label>
          <input type="number" className="add-employee-salary" />
        </div>
        <div className="add-employee-input-container">
          <label htmlFor="add-employee-address">Address</label>
          <textarea id="add-employee-address"></textarea>
        </div>
        <div className="add-employee-input-container">
          <label htmlFor="add-employee-dob">Date of Birth</label>
          <input type="date" id="add-employee-dob" />
        </div>
        <div className="add-employee-input-container">
          <button id="add-employee-submit-button">Add Employee</button>
        </div>
      </form>
    </div>
   );
}
 
export default AddEmployee;