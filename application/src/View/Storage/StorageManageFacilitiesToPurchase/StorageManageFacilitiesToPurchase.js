import { useEffect, useState } from "react";
import Header from "../../../Components/Header/Header";
import "./StorageManageFacilitiesToPurchase.css";
import Expanded from "../../../Components/Expanded/Expanded";
import EquipmentRequestController from "../../../Controller/EquipmentRequestController";
import DataTable, { createTheme } from "react-data-table-component";
import { tableStyle } from "../../TableStyle";
import { reauthenticateWithCredential } from "firebase/auth";
import ReceiptController from "../../../Controller/ReceiptController";

const StorageManageFacilitiesToPurchase = () => {

  const [facilityRequests, setFacilityRequests] = useState([]);
  
  let facilityRequestData = [];

  let files = {};

  useEffect(() => {

    const getFacilityRequests = async () => {

      const databaseData = await EquipmentRequestController.getEquipmentRequests();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setFacilityRequests(temp);

    }

    getFacilityRequests();


  }, []);

  const facilityRequestColumns = [
    {
      name: 'Requester Email',
      selector: row => row.requesterEmail,
      sortable: true,
    },
    {
      name: 'Requester Department',
      selector: row => row.requesterDepartment,
      sortable: true,
    },
    {
      name: 'Request',
      selector: row => row.request,
      sortable: true,
    }
  ];

  facilityRequests.map(facilityRequest => {

    if (facilityRequest.status === 'Accepted'){

      facilityRequestData.push({
        id: facilityRequest.id,
        requesterEmail: facilityRequest.requesterEmail,
        requesterDepartment: facilityRequest.requesterDepartment,
        request: facilityRequest.request,
      });
    
    }
      
  });
  
  const handleSubmit = (id, file) => {

    if (!file) return;

    ReceiptController.createReceipt(id, file);
    alert('Receipt Uploaded');

  }

  const expand = (left, data) => {

    return (<div className="expanded-container">
            <Expanded text={left + data.request} />
            <form action="" className="receipt-form" >
              <input type="file" id={data.id} value={files[data.id]} onChange={
                (e) => {files[data.id] = e.target.files[0]}} />
              <button type='button' id='submit-button'
              onClick={() => handleSubmit(data.id, files[data.id])}>Submit</button>
            </form>
          </div>);

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
    <div className="storage-manage-facilities-to-purchase">
      
      <Header title={'Facilities to Purchase'} />

      <div className="container">

        <DataTable columns={facilityRequestColumns} data={facilityRequestData} 
          customStyles={tableStyle} theme={'tableTheme'} expandableRows 
          expandableRowsComponent={(row) => { return expand('Request: ', row.data) }}/>      

      </div>

    </div>
   );
}
 
export default StorageManageFacilitiesToPurchase;