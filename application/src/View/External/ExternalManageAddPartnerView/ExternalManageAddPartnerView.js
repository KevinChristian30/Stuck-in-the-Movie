import { useState } from "react";
import Header from "../../../Components/Header/Header";
import "./ExternalManageAddPartnerView.css";
import PartnerController from "../../../Controller/PartnerController";

const ExternalManageAddPartnerView = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [division, setDivision] = useState('-');
  const [address, setAddress] = useState('');

  const handleAddEmployee = (e) => {

    e.preventDefault();
    PartnerController.createPartner(name, email, phoneNumber, division, address);
    alert('Partner Created');

  }

  return ( 

    <div className="container">
      
      <Header title={'Add Partner'} />
      <div className="external-manage-add-partner-view">

        <form action="" id="add-employee-form" onSubmit={handleAddEmployee}>
          <h1 id="title">Add Partner</h1>
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
            <label htmlFor="add-employee-department">Division</label>
            <select name="add-employee-department" id="add-employee-department" value={division} onChange={e => {setDivision(e.target.value)}}>
              <option value="-">-</option>
              <option value="Advertisement Partner">Advertisement Partner</option>
              <option value="Movie Producer">Movie Producer</option>
              <option value="Supplier">Supplier</option>
            </select>
          </div>    
          <div className="add-employee-input-container">
            <label htmlFor="add-employee-address">Address</label>
            <textarea id="add-employee-address" value={address} onChange={e => setAddress(e.target.value)}></textarea>
          </div>
          <div className="add-employee-input-container">
            <button id="add-employee-submit-button">Add Partner</button>
          </div>
        </form>

      </div>

    </div>
  );
}
 
export default ExternalManageAddPartnerView;