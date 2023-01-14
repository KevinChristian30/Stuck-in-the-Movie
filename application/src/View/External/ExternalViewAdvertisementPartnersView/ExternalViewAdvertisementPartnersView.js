import { useEffect, useState } from "react";
import Header from "../../../Components/Header/Header";
import PartnerController from "../../../Controller/PartnerController";
import Expanded from "../../../Components/Expanded/Expanded";
import DataTable, { createTheme } from "react-data-table-component";
import { tableStyle } from "../../../View/TableStyle";
import "./ExternalViewAdvertisementPartnersView.css";

const ExternalViewAdvertisementPartnersView = () => {

  const [advertisemetPartners, setAdvertisementPartners] = useState([]);

  let data = [];

  useEffect(() => {

    const getAdvertisementPartners = async () => {
      
      const databaseData = await PartnerController.getAdvertisementPartners();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setAdvertisementPartners(temp);

    }
    
    getAdvertisementPartners();

  }, []);

  advertisemetPartners.map(e => {

    data.push({
      id: e.id,
      name: e.name,
      address: e.address,
      email: e.email,
      phoneNumber: e.phoneNumber,
    });    

  });

  const columns = [
    {
      name: 'Partner ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Address',
      selector: row => row.address,
      sortable: true
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Phone Number',
      selector: row => row.phoneNumber,
      sortable: true
    },
  ];

  const expand = (data) => {
    
    return( 
      <div className="expand-container">
        <Expanded text={'Address: ' + data.address} />
        <Expanded text={'Email: ' + data.email} />
        <Expanded text={'Phone Number: ' + data.phoneNumber} />
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
    <div className="external-view-advertisemen-partners-view">

      <Header title={'Advertisement Partners'} />

      <div className="container">

      <DataTable columns={columns} data={data} theme={'tableTheme'} customStyles={tableStyle} expandableRows expandableRowsComponent={
            (row) => {
              return expand(row.data) 
            }
          } />

      </div>

    </div>
   );
}
 
export default ExternalViewAdvertisementPartnersView;