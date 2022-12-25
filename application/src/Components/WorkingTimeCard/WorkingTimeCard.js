import "./WorkingTimeCard.css";

const WorkingTimeCard = (props) => {

  const workingTime = props.workingTime;
  const title = props.title;

  return ( 
    <div className="working-time-card">

      <div className="container">
        <p id="working-time-card-title">{title}</p>
        <div className="line">
          <p>Monday</p>
          <p>{workingTime.monday}</p>
        </div>
        <div className="line">
          <p>Tuesday</p>
          <p>{workingTime.tuesday}</p>
        </div>
        <div className="line">
          <p>Wednesday</p>
          <p>{workingTime.wednesday}</p>
        </div>
        <div className="line">
          <p>Thursday</p>
          <p>{workingTime.thursday}</p>
        </div>
        <div className="line">
          <p>Friday</p>
          <p>{workingTime.friday}</p>
        </div>
        <div className="line">
          <p>Saturday</p>
          <p>{workingTime.saturday}</p>
        </div>
        <div className="line">
          <p>Sunday</p>
          <p>{workingTime.sunday}</p>
        </div>
      </div>
      
    </div>
  );
}
 
export default WorkingTimeCard;