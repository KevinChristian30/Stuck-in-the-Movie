import { useEffect, useState } from "react";
import NavBar from "../../../Components/NavBar/NavBar";
import Title from "../../../Components/Title/Title";
import EquipmentRequestController from "../../../Controller/EquipmentRequestController";
import "./EquipmentRequestView.css";
import "../../../Components/Expanded/Expanded";
import Expanded from "../../../Components/Expanded/Expanded";
import DataTable, { createTheme } from "react-data-table-component";
import {tableStyle} from "../../TableStyle";

const EquipmentRequestView = () => {

  const [request, setRequest] = useState('');

  const [equipmentRequests, setEquipmentRequests] = useState([]);

  let data = [];

  const handleEquipmentRequest = (e) => {

    e.preventDefault();
    EquipmentRequestController.createEquipmentRequest(request);
    alert('Equipment Request Created');

  }

  useEffect(() => {

    const getEquipmentRequest = async () => {
      
      const data = await EquipmentRequestController.getEquipmentRequests();
      setEquipmentRequests(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    
    }
    
    getEquipmentRequest();

  }, []);

  const columns = [
    {
        name: 'Request ID',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Equipment Requested',
        selector: row => row.request,
        sortable: true
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
    },
  ];

  equipmentRequests.map(e => {

    if (e.requesterEmail === sessionStorage.getItem('EmployeeEmail')){
      data.push({
        id: e.id,
        request: e.request,
        status: e.status,
        revisionReason: e.revisionReason
      });
    }

  });

  const expand = (data) => {

    const getReviseReason = () => {
      if (data.status === 'Revised') 
        return <Expanded text={'Revision Reason: ' + data.revisionReason} />
    }

    return( 
      <div className="container">
        <Expanded text={'Reason: ' + data.request} />
        { getReviseReason() }
      </div>
    )

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
    <div className="equipment-request-view">
      <NavBar />
      <br /><br /><br /><br /><br />
      <Title title="Equipment Request"/>

      <div className="equipment-request-view-container">
        <form action="" id="equipment-request-form" onSubmit={handleEquipmentRequest} >
          <p id="equipment-request-form-title">Request Equipment</p>
          <div className="line">
            <label htmlFor="">Request</label>
            <textarea value={request} onChange={e => setRequest(e.target.value)}></textarea>
          </div>
          <button id="equipment-request-form-submit-button">Submit Equipment Request</button>
        </form>
        <div className="equipment-request-view-right">

          <DataTable columns={columns} data={data} customStyles={tableStyle} expandableRows expandableRowsComponent={(row) => { return expand(row.data) }} theme={'tableTheme'} />

      </div>
      </div>
    </div>
  );
}
 
export default EquipmentRequestView;