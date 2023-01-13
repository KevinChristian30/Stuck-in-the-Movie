import { useEffect, useState } from "react";
import Header from "../../../Components/Header/Header";
import TerminationLetterController from "../../../Controller/TerminationLetterController";
import { tableStyle } from "../../TableStyle";
import DataTable, { createTheme } from "react-data-table-component";
import "./ManagerManageEmployeesTerminationLetterProposalsView.css";
import AcceptButton from "../../../Components/Buttons/AcceptButton/AcceptButton";
import RejectButton from "../../../Components/Buttons/RejectButton/RejectButton";

const ManagerManageEmployeesTerminationLetterProposalsView = () => {

  const [terminationLetters, setTerminationLetters] = useState([]);

  let data = [];

  useEffect(() => {

    const getTerminationLetters = async () => {

      const databaseData = await TerminationLetterController.getTerminationLetters();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setTerminationLetters(temp);

    }

    getTerminationLetters();

  }, []);

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
    },
  ];

  const handleAccept = (id) => {

    TerminationLetterController.setTerminationLetterStatus(id, 'Accepted');
    alert('Termination Letter Accepted');
    
  }
  
  const handleReject = (id) => {
    
    TerminationLetterController.setTerminationLetterStatus(id, 'Rejected');
    alert('Termination Letter Rejected');

  }

  terminationLetters.map((item) => {

    if (item.status === 'Pending'){

      data.push({
        id: item.identifier,
        status: item.status,
        action: 
              <div className="action-container">
                <a className="view-link" href={item.fileURL} target="_blank">View</a>
                <AcceptButton onclick={ () => { handleAccept(item.id) }} />
                <RejectButton onclick={ () => { handleReject(item.id) }} />
              </div> 
        
      });
    }

  });

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
    <div className="manager-manage-employees-termination-letter-proposal-view">

      <Header title={'Termination Letter Proposals'} />

      <div className="manager-manage-employees-termination-letter-proposal-view-container">
        <DataTable className="data-table" columns={columns} data={data} 
          customStyles={tableStyle} theme='tableTheme' />        
      </div>

    </div>
  );
}
 
export default ManagerManageEmployeesTerminationLetterProposalsView;