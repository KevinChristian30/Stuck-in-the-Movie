import "./ManagerManageEmployeesWarningLetterProposalsView.css"
import Header from "../../../Components/Header/Header";
import { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import WarningLetterController from "../../../Controller/WarningLetterController";
import { tableStyle } from "../../TableStyle";
import "./ManagerManageEmployeesWarningLetterProposalsView.css";
import AcceptButton from "../../../Components/Buttons/AcceptButton/AcceptButton";
import RejectButton from "../../../Components/Buttons/RejectButton/RejectButton";

const ManagerManageEmployeesWarningLetterProposalsView = () => {

  const [warningLetters, setWarningLetters] = useState([]);

  let data = [];

  const columns = [
    {
        name: 'Letter ID',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Status',
        selector: row => row.status,
        sortable: true
    },
    {
      name: 'Action',
      selector: row => row.action,
      sortable: false
    }
  ];

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

  useEffect(() => {

    const getWarningLetters = async () => {

      const databaseData = await WarningLetterController.getWarningLetters();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setWarningLetters(temp);

    }

    getWarningLetters();

  }, []);

  const handleAccept = (id) => {

    WarningLetterController.setWarningLetterStatus(id, 'Accepted');
    alert('Warning Letter Accepted');

  }

  const handleReject = (id) => {
    
    WarningLetterController.setWarningLetterStatus(id, 'Rejected');
    alert('Warning Letter Rejected');

  }

  warningLetters.map((item) => {

    if (item.status === 'Pending'){

      data.push({
        id: item.identifier,
        status: item.status,
        action: <div className="action-container">
                  <a className="view-link" href={item.fileURL} target="_blank">View</a>
                  <AcceptButton onclick={() => { handleAccept(item.id) }} />
                  <RejectButton onclick={() => { handleReject(item.id) }} />
                </div> 
      });

    }
   

  });
    
  return ( 
    <div className="manager-manage-employees-warning-letter-proposal">

      <Header title="Employee Warning Letter Proposals" />

      <div className="container">
        <DataTable className="data-table" columns={columns} data={data} customStyles={tableStyle} theme='tableTheme' />
      </div>
     
      <br /><br /><br /><br /><br />

    </div>
  );

}
 
export default ManagerManageEmployeesWarningLetterProposalsView;