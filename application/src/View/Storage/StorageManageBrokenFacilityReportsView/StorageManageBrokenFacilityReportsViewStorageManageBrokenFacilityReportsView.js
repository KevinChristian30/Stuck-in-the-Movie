import { useEffect, useState } from "react";
import Header from "../../../Components/Header/Header";
import FacilityController from "../../../Controller/FacilityController";
import DataTable, { createTheme } from "react-data-table-component";
import { tableStyle } from "../../TableStyle";
import Expanded from "../../../Components/Expanded/Expanded";
import "./StorageManageBrokenFacilityReportsView.css";
import AcceptButton from "../../../Components/Buttons/AcceptButton/AcceptButton";
import RejectButton from "../../../Components/Buttons/RejectButton/RejectButton";

const StorageManageBrokenFacilityReportsView = () => {

  const [facilities, setFacilities] = useState([]);

  let facilitiesData = [];

  useEffect(() => {

    const getFacilities = async () => {
      
      const databaseData = await FacilityController.getFacilities();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setFacilities(temp);

    }
    
    getFacilities();

  }, []);

  const handleFix = (data) => {

    FacilityController.setFacilityStatus(data.id, 'Normal');
    FacilityController.setBrokenDescription(data.id, null, null);
    alert('Facility Status Updated');
    
  }
  
  const handleBroken = (data) => {
    
    FacilityController.setFacilityStatus(data.id, 'Broken');
    FacilityController.setBrokenDescription(data.id, null, null);
    alert('Facility Status Updated');

  }

  facilities.map(e => {

    if (e.status === 'Reported Broken'){

      facilitiesData.push({
        id: e.id,
        name: e.name,
        description: e.description,
        brokenDescription: e.brokenDescription,
        status: e.status,
        action: <div className="action-container">
          <AcceptButton text={'Fixed'} onclick={() => handleFix(e)} />
          <RejectButton text={'Broken'} onclick={() => handleBroken(e)} />
        </div>
      });    

    }

  });

  const facilitiesColumns = [
    {
        name: 'Facility ID',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true
    },
    {
      name: 'Description',
      selector: row => row.description,
      sortable: true,
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

  const expand = (data) => {

    return( 
      <div className="expand-container">
        <Expanded text={'Name: ' + data.name} />
        <Expanded text={'Description: ' + data.description} />
        <Expanded text={'Broken Description: ' + data.brokenDescription} />
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
    <div className="storage-manage-broken-facility-reports-view">

      <Header title={'Broken Facility Reports'} />

      <div className="container">
        <DataTable columns={facilitiesColumns} data={facilitiesData} theme={'tableTheme'} customStyles={ tableStyle } expandableRows expandableRowsComponent={
              (row) => {
                return expand(row.data) 
              }
        } />
      </div>
    
    </div>
   );
}
 
export default StorageManageBrokenFacilityReportsView;