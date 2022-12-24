import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddEmployee from './AddEmployee/AddEmployee';
import './App.css';
import FinanceAndEquipment from './FundsAndEquipment/FundsAndEquipment';
import Home from './Home/Home';
import HumanResource from './HumanResource/HumanResource';
import PersonalLeaveRequestView from './HumanResource/PersonalLeaveRequestView/PersonalLeaveRequestView';
import ResignationLetterView from './HumanResource/ResignationLetterView/ResignationLetterView';
import WorkingTimeRequestView from './HumanResource/WorkingTimeRequestView/WorkingTimeRequestView';
import Login from './Login/Login';
import Report from './Report/Report';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/add-employee" element={<AddEmployee />}></Route>
          <Route exact path="/human-resource" element={<HumanResource />}></Route>
          <Route exact path="/human-resource/resignation-letter" element={<ResignationLetterView />}></Route>
          <Route exact path="/human-resource/personal-leave-request" element={<PersonalLeaveRequestView />}></Route>
          <Route exact path="/human-resource/working-time-request" element={<WorkingTimeRequestView />}></Route>
          <Route exact path="/funds-and-equipments" element={<FinanceAndEquipment />}></Route>
          <Route exact path="/reports" element={<Report />}></Route>

        </Routes>
      </div> 
    </Router>
  );
};

export default App;
