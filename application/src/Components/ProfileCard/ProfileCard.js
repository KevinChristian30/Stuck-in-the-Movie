import "./ProfileCard.css"

const ProfileCard = () => {
  return ( 
    <div className="profile-card">
      <p>Hello, {global.CurrentUser.EmployeeName} <br />
          {global.CurrentUser.EmployeeDepartment}
      </p>
    </div>
   );
}

export default ProfileCard;