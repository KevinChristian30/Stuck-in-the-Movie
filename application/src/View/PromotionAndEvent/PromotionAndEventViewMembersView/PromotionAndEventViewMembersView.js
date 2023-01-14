import { useEffect, useState } from "react";
import Header from "../../../Components/Header/Header";
import "./PromotionAndEventViewMembersView.css"
import MemberController from "../../../Controller/MemberController";
import DataTable, { createTheme } from "react-data-table-component";
import { tableStyle } from "../../../View/TableStyle";
import Expanded from "../../../Components/Expanded/Expanded";

const PromotionAndEventViewMembersView = () => {

  const [members, setMembers] = useState([]);

  let data = [];

  useEffect(() => {

    const getMembers = async () => {
      
      const databaseData = await MemberController.getMembers();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setMembers(temp);

    }
    
    getMembers();

  }, []);

  members.map(e => {

    data.push({
      id: e.id,
      name: e.name,
      email: e.email,
      phoneNumber: e.phoneNumber,
      points: e.points,
      address: e.address,
      dateOfBirth: e.dateOfBirth,
      gender: e.gender,
      memberSince: e.memberSince
    });    

  });


  const columns = [
    {
        name: 'Member ID',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'PhoneNumber',
      selector: row => row.phoneNumber,
      sortable: true
    },
    {
      name: 'Points',
      selector: row => row.points,
      sortable: true
    }
  ];

  const expand = (data) => {

    return (
      <div className="expand-container">
        <Expanded text={'Address: ' + data.address} />
        <Expanded text={'Date of Birth: ' + data.dateOfBirth} />
        <Expanded text={'Gender: ' + data.gender} />
        <Expanded text={'Member Since: ' + data.memberSince} />
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
    <div className="promotion-and-event-view-members-view">

      <Header title={'View Members'} />

      <div className="container">

        <DataTable columns={columns} data={data} theme={'tableTheme'} customStyles={ tableStyle } expandableRows expandableRowsComponent={
              (row) => {
                return expand(row.data) 
              }
        } />

      </div>

    </div>
  );
}
 
export default PromotionAndEventViewMembersView;