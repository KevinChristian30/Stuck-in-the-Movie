import { useEffect, useState } from "react";
import NavBar from "../../../Components/NavBar/NavBar";
import Title from "../../../Components/Title/Title";
import WorkingTimeCard from "../../../Components/WorkingTimeCard/WorkingTimeCard";
import WorkingTimeController from "../../../Controller/WorkingTimeController";

const WorkingTimeRequestView = () => {

  const [workingTimes, setWorkingTimes] = useState([]);
  const [workingTime, setWorkingTime] = useState({});

  useEffect(() => {

    const getWorkingTimeData = async () => {

      const data = await WorkingTimeController.getWorkingTime();
      setWorkingTimes(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

    }

    getWorkingTimeData();

    for (let i = 0; i < workingTimes.length; i++){
      if (workingTimes[i].email === sessionStorage.getItem('EmployeeEmail')){
        setWorkingTime(workingTimes[i]);
      }
    }

  });

  return ( 
    <div className="working-time-request-view">
      <NavBar />
      <br /><br /><br /><br /><br />
      <Title title="Working Time"/>
      <WorkingTimeCard workingTime={workingTime} />
    </div>
  );
}
 
export default WorkingTimeRequestView;
