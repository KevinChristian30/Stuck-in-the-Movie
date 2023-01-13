import { useState } from "react";
import Header from "../../../Components/Header/Header";
import "./StorageManageAddFacilityView.css";
import FacilityController from "../../../Controller/FacilityController";
import { useNavigate } from "react-router-dom";

const StorageManageAddFacilityView = () => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const nav = useNavigate();

  const handleAddFacility = (e) => {

    e.preventDefault();
    const identifier = FacilityController.createFacility(name, description);
    nav('/print-facility', { state: { identifier : identifier } });

  }

  return ( 
    <div className="storage-manage-add-facilitiy-view">

      <Header title={'Add New Facility/Equipment'} />

      <div className="container">

        <form action="" id="add-employee-form" onSubmit={handleAddFacility}>

          <h1 id="title">Add Facility/Equipment</h1>
          <br />  
          <div className="add-employee-input-container">    
            <label htmlFor="add-employee-name">Name</label>
            <input type="text" name="add-employee-name" id="add-employee-name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="add-employee-input-container">    
            <label htmlFor="add-employee-name">Description</label>
            <textarea name="add-employee-name" id="add-employee-name" value={description} onChange={e => setDescription(e.target.value)} />
          </div>
          <div className="add-employee-input-container">
            <button id="add-employee-submit-button">Add Facility/Equipment</button>
          </div>
          
        </form>

      </div>

    </div>
   );
}
 
export default StorageManageAddFacilityView;