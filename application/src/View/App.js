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
import HRManagePersonalLeaveRequestsView from './HR/HRManagePersonalLeaveRequests/HRManagePersonalLeaveRequestsView';
import HRManageSalaryChangeRequestView from './HR/HRManageSalaryChangeRequestView/HRManageSalaryChangeRequestView';
import ManagerManageEmployeesSalaryChangeProposalsView from './Manager/ManagerManageEmployeesSalaryChangeProposalsView/ManagerManageEmployeesSalaryChangeProposalsView';
import HRManageWarningLetterProposalsView from './HR/HRManageWarningLetterProposalsView/HRManageWarningLetterProposalsView';
import HRManageTerminationLetterProposalsView from './HR/HRManageTerminationLetterProposalsView/HRManageTerminationLetterProposalsView';
import ManagerManageEmployeesTerminationLetterProposalsView from './Manager/ManagerManageEmployeesTerminationLetterProposalsView/ManagerManageEmployeesTerminationLetterProposalsView';
import ExternalManageAddPartnerView from './External/ExternalManageAddPartnerView/ExternalManageAddPartnerView';
import StorageManageAddFacilityView from './Storage/StorageManageAddFacilityView/StorageManageAddFacilityView';
import PrintFacility from './Prints/PrintFacility';
import StorageManageFacilitiesToPurchase from './Storage/StorageManageFacilitiesToPurchase/StorageManageFacilitiesToPurchase';
import ExternalManageRecordExternalInformation from './External/ExternalManageRecordExternalInformation/ExternalManageRecordExternalInformation';
import HRUpdateEmployeeWorkingTimeView from './HR/HRUpdateEmployeeWorkingTimeView/HRUpdateEmployeeWorkingTimeView';
import MovieFrontOfficeManageAddMemberView from './MovieFrontOffice/MovieFrontOfficeManageAddMemberView/MovieFrontOfficeManageAddMemberView';
import PrintMembershipCard from './Prints/PrintMembershipCard';
import StorageManageBrokenFacilityReportsView from './Storage/StorageManageBrokenFacilityReportsView/StorageManageBrokenFacilityReportsViewStorageManageBrokenFacilityReportsView';
import ExternalViewAdvertisementPartnersView from './External/ExternalViewAdvertisementPartnersView/ExternalViewAdvertisementPartnersView';
import HRManageViewEmployeesView from './HR/HRManageViewEmployeesView/HRManageViewEmployeesView';
import HRViewWorkingTimeView from './HR/HRViewWorkingTimeView/HRViewWorkingTimeView';
import PromotionAndEventViewMembersView from './PromotionAndEvent/PromotionAndEventViewMembersView/PromotionAndEventViewMembersView';
import ExternalViewMovieProducersView from './External/ExternalViewMovieProducersView/ExternalViewMovieProducersView';
import ExternalAddMovieView from './External/ExternalAddMovieView/ExternalAddMovieView';
import MovieScheduleGenerateMovieSchedulesView from './MovieSchedule/MovieScheduleGenerateMovieSchedulesView/MovieScheduleGenerateMovieSchedulesView';

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
          <Route exact path="/manager/employees/termination-letter-proposals" element={<ManagerManageEmployeesTerminationLetterProposalsView />}></Route>
          <Route exact path="/manager/employees/salary-change-proposals" element={<ManagerManageEmployeesSalaryChangeProposalsView />}></Route>

          <Route exact path="/accounting-and-finance/fund-and-facility-requests" element={<AccountingAndFinanceManageFundAndFacilityRequestsView />}></Route>

          <Route exact path="/hr/add-employee" element={<AddEmployee />}></Route>
          <Route exact path="/hr/view-employees" element={<HRManageViewEmployeesView />}></Route>
          <Route exact path="/hr/personal-leave-requests" element={<HRManagePersonalLeaveRequestsView />}></Route>
          <Route exact path="/hr/salary-change-requests" element={<HRManageSalaryChangeRequestView />}></Route>
          <Route exact path="/hr/warning-letter-proposals" element={<HRManageWarningLetterProposalsView />}></Route>
          <Route exact path="/hr/terminiation-letter-proposals" element={<HRManageTerminationLetterProposalsView />}></Route>
          <Route exact path="/hr/update-working-time" element={<HRUpdateEmployeeWorkingTimeView />}></Route>
          <Route exact path="/hr/view-working-times" element={<HRViewWorkingTimeView />}></Route>
          
          <Route exact path="/external/add-partner" element={<ExternalManageAddPartnerView />}></Route>
          <Route exact path="/external/record-external-information" element={<ExternalManageRecordExternalInformation />}></Route>
          <Route exact path="/external/view-advertisement-partners" element={<ExternalViewAdvertisementPartnersView />}></Route>
          <Route exact path="/external/view-movie-producers" element={<ExternalViewMovieProducersView />}></Route>
          <Route exact path="/external/add-movie" element={<ExternalAddMovieView />}></Route>

          <Route exact path="/storage/add-facility-and-equipment" element={<StorageManageAddFacilityView />}></Route>
          <Route exact path="/storage/facilities-to-purchase" element={<StorageManageFacilitiesToPurchase />}></Route>
          <Route exact path="/storage/broken-facilities-report" element={<StorageManageBrokenFacilityReportsView />}></Route>
          
          <Route exact path="/movie-front-office/add-member" element={<MovieFrontOfficeManageAddMemberView />}></Route>

          <Route exact path="/movie-schedule/generate-schedule" element={<MovieScheduleGenerateMovieSchedulesView />}></Route>

          <Route exact path="/promotion-and-event/view-members" element={<PromotionAndEventViewMembersView />}></Route>

          <Route exact path="/print-facility" element={<PrintFacility />}></Route>
          <Route exact path="/print-membership-card" element={<PrintMembershipCard />}></Route>
          
          
        </Routes>
      </div> 
    </Router>
  );
};

export default App;


