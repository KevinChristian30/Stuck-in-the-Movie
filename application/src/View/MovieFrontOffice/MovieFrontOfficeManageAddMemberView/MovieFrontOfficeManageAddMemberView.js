import { useState } from "react";
import Header from "../../../Components/Header/Header";
import "./MovieFrontOfficeManageAddMemberView.css";
import MemberController from "../../../Controller/MemberController";
import { useNavigate } from "react-router-dom";

const MovieFrontOfficeManageAddMemberView = () => {

  const [name, setName] = useState('');
  const [gender, setGender] = useState('-');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const nav = useNavigate();

  const handleAddEmployee = (e) => {

    e.preventDefault();
    MemberController.createMember(name, gender, email, phoneNumber, address, dateOfBirth);
    nav('/print-membership-card', { state: { email : email, name : name } });

  }

  return ( 
    <div className="movie-front-office-manage-add-member-view">
      
      <Header title={'Add Member'} />

      <div className="add-employee">
        
        <form action="" id="add-employee-form" onSubmit={handleAddEmployee}>
          <h1 id="title">Add Member</h1>
          <br />  
          <div className="add-employee-input-container">    
            <label htmlFor="add-employee-name">Name</label>
            <input type="text" name="add-employee-name" id="add-employee-name" value={name} onChange={e => setName(e.target.value)} />
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
            <label htmlFor="add-employee-email">Email</label>
            <input type="email" name="add-employee-email" id="add-employee-email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="add-employee-input-container">
            <label htmlFor="add-employee-phonenumber">Phone Number</label>
            <input type="number" className="add-employee-phonenumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
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
            <button id="add-employee-submit-button">Add Member</button>
          </div>
        </form>
      </div>

    </div>
   );
}
 
export default MovieFrontOfficeManageAddMemberView;