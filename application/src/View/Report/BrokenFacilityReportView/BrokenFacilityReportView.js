import { useEffect, useState } from "react";
import NavBar from "../../../Components/NavBar/NavBar";
import Title from "../../../Components/Title/Title";
import FacilityController from "../../../Controller/FacilityController";
import DataTable, { createTheme } from "react-data-table-component";
import Expanded from "../../../Components/Expanded/Expanded"
import { tableStyle } from "../../../View/TableStyle";
import "./BrokenFacilityReportView.css";
import "../../../Components/Title/Title";

const BrokenFacilityReportView = () => {

  const [facilities, setFacilities] = useState([]);

  let facilitiesData = [];
  let facilityReportsData = [];

  useEffect(() => {

    const getFacilities = async () => {
      
      const databaseData = await FacilityController.getFacilities();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setFacilities(temp);

    }
    
    getFacilities();

  }, []);

  facilities.map(e => {

    if (e.status === 'Normal'){
      facilitiesData.push({
        id: e.id,
        name: e.name,
        description: e.description,
        status: e.status
      });      
    }
    
    if (e.reporterEmail === sessionStorage.getItem('EmployeeEmail')){
      facilityReportsData.push({
        id: e.id,
        name: e.name,
        description: e.description,
        brokenDescription: e.brokenDescription,
        status: e.status
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
    }
  ];

  const handleReportBrokenFacility = (id, description) => {

    FacilityController.setFacilityStatus(id, 'Reported Broken');
    FacilityController.setBrokenDescription(id, description, sessionStorage.getItem('EmployeeEmail'));
    alert('Facility Reported');

  }

  const expand = (data) => {

    return( 
      <div className="expand-container">
        <Expanded text={'Name: ' + data.name} />
        <Expanded text={'Description: ' + data.description} />
        <div className="report-broken-container">
          
          <form action="" id="add-employee-form" >
            <div className="add-employee-input-container">
              <label htmlFor="add-employee-address">Description</label>
              <textarea id="broken-facility-description"></textarea>
            </div>
            <div className="add-employee-input-container">
            <button type="button" id="add-employee-submit-button" onClick={ () => 
              handleReportBrokenFacility(data.id, document.getElementById("broken-facility-description").value) }>Report Broken Facility</button>
          </div>
          </form>

        </div>
      </div>
    )

  }

  const expandedReport = (data) => {

    return( 
      <div className="expand-container">
        <Expanded text={'Name: ' + data.name} />
        <Expanded text={'Description: ' + data.description} />
        <Expanded text={'Broken Description: ' + data.brokenDescription} />
      </div>
    );

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
    <div className="broken-facility-report-view">

      <NavBar />
      <br /><br /><br /><br /><br />
      <Title title="Report Broken Facility"/>
      
      <div className="container">
        <DataTable columns={facilitiesColumns} data={facilitiesData} theme={'tableTheme'} customStyles={ tableStyle } expandableRows expandableRowsComponent={
              (row) => {
                return expand(row.data) 
              }
            } />

        <br /><br /><br /><br /><br />
        <Title title={'My Broken Facility Reports'} />
        <DataTable columns={facilitiesColumns} data={facilityReportsData} theme={'tableTheme'} customStyles={ tableStyle } expandableRows expandableRowsComponent={
              (row) => {
                return expandedReport(row.data) 
              }
            } />
      </div>

      <br /><br /><br /><br /><br />

    </div>
  );
}
 
export default BrokenFacilityReportView;