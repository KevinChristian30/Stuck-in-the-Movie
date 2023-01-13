import NavBar from "../../Components/NavBar/NavBar";  
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import AccountingAndFinanceHomeView from "./AccountingAndFinanceHomeView/AccountingAndFinanceHomeView";
import ExternalHomeView from "./ExternalHomeView/ExternalHomeView";
import HRHomeView from "./HRHomeView/HRHomeView";
import "./Home.css"
import ManagerHomeView from "./ManagerHomeView/ManagerHomeView";

const Home = () => {

  const loadHomeMenus = () => {

    if (sessionStorage.getItem('EmployeeDepartment') === 'Manager') 
      return <ManagerHomeView />;
    else if (sessionStorage.getItem('EmployeeDepartment') === 'Accounting and Finance')
      return <AccountingAndFinanceHomeView />;
    else if (sessionStorage.getItem('EmployeeDepartment') === 'Human Resource')
      return <HRHomeView />
    else if (sessionStorage.getItem('EmployeeDepartment') === 'External')
      return <ExternalHomeView />

  }

  return (
    <div className="home">
      <NavBar  />
      <br /><br /><br /><br /><br />
      <ProfileCard className="profile-card" />
      <br /><br /><br />

      { loadHomeMenus() }

    </div>
  );
}

export default Home;