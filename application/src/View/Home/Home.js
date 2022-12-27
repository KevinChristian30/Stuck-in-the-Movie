import NavBar from "../../Components/NavBar/NavBar";  
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import AccountingAndFinanceHomeView from "./AccountingAndFinanceHomeView/AccountingAndFinanceHomeView";
import "./Home.css"
import ManagerHomeView from "./ManagerHomeView/ManagerHomeView";

const Home = () => {

  const loadHomeMenus = () => {

    if (sessionStorage.getItem('EmployeeDepartment') === 'Manager') 
      return <ManagerHomeView />;
    else if (sessionStorage.getItem('EmployeeDepartment') === 'Accounting and Finance')
      return <AccountingAndFinanceHomeView />;

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