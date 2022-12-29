import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddEmployee from './AddEmployee/AddEmployee';
import './App.css';
import FundRequestView from './FundAndEquipment/FundRequestView/FundRequestView';
import FinanceAndEquipment from './FundAndEquipment/FundAndEquipment';
import Home from './Home/Home';
import HumanResource from './HumanResource/HumanResource';
import PersonalLeaveRequestView from './HumanResource/PersonalLeaveRequestView/PersonalLeaveRequestView';
import ResignationLetterView from './HumanResource/ResignationLetterView/ResignationLetterView';
import WorkingTimeRequestView from './HumanResource/WorkingTimeRequestView/WorkingTimeRequestView';
import Login from './Login/Login';
import Report from './Report/Report';
import EquipmentRequestView from './FundAndEquipment/EquipmentRequestView/EquipmentRequestView';
import BrokenFacilityReportView from './Report/BrokenFacilityReportView/BrokenFacilityReportView';
import ManagerManageEmployeesView from './Manager/ManagerManageEmployeesView';
import ManagerManageEmployeesWarningLetterProposalsView from './Manager/ManagerManageEmployeesWarningLetterProposalsView/ManagerManageEmployeesWarningLetterProposalsView';
import ManagerManageEmployeesResignationProposalsView from './Manager/ManagerManageEmployeesResignationProposalsView/ManagerManageEmployeesResignationProposalsView';
import ManagerManageViewEmployeesView from './Manager/ManagerManageViewEmployeesView/ManagerManageViewEmployeesView';
import AccountingAndFinanceManageFundAndFacilityRequestsView from './AccountingAndFinance/AccountingAndFinanceManageFundAndFacilityRequestsView/AccountingAndFinanceManageFundAndFacilityRequestsView';

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

          <Route exact path="/fund-and-equipment" element={<FinanceAndEquipment />}></Route>
          <Route exact path="/fund-and-equipment/fund-request" element={<FundRequestView />}></Route>
          <Route exact path="/fund-and-equipment/equipment-request" element={<EquipmentRequestView />}></Route>

          <Route exact path="/reports" element={<Report />}></Route>
          <Route exact path="/reports/broken-facility-report" element={<BrokenFacilityReportView />}></Route>

          <Route exact path="/manager/employees" element={<ManagerManageEmployeesView />}></Route>
          <Route exact path="/manager/employees/view-employees" element={<ManagerManageViewEmployeesView />}></Route>
          <Route exact path="/manager/employees/employee-resignation-proposals" element={<ManagerManageEmployeesResignationProposalsView />}></Route>
          <Route exact path="/manager/employees/warning-letter-proposals" element={<ManagerManageEmployeesWarningLetterProposalsView/>}></Route>

          <Route exact path="/accounting-and-finance/fund-and-facility-requests" element={<AccountingAndFinanceManageFundAndFacilityRequestsView />}></Route>

        </Routes>
      </div> 
    </Router>
  );
};

export default App;


