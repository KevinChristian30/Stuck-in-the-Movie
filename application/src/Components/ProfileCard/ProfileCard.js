import "./ProfileCard.css"

const ProfileCard = () => {
  return ( 
    <div className="profile-card">
      <p>Hello, {sessionStorage.getItem('EmployeeName')} <br />
          {sessionStorage.getItem('EmployeeDepartment')}
      </p>
    </div>
   );
}

export default ProfileCard;