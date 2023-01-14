import "./HRViewWorkingTimeView.css";
import Header from "../../../Components/Header/Header";
import WorkingTimeController from "../../../Controller/WorkingTimeController";
import { useEffect, useState } from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const HRViewWorkingTimeView = () => {

  const [workingTimes, setWorkingTimes] = useState([]);

  const data = [
    {day: 'monday', morning: 0, night: 0},
    {day: 'tuesday', morning: 0, night: 0},
    {day: 'wednesday', morning: 0, night: 0},
    {day: 'thursday', morning: 0, night: 0},
    {day: 'friday', morning: 0, night: 0},
    {day: 'saturday', morning: 0, night: 0},
    {day: 'sunday', morning: 0, night: 0},
  ];

  useEffect(() => {

    const getWorkingTimes = async () => {
      
      const databaseData = await WorkingTimeController.getWorkingTimes();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setWorkingTimes(temp);

    }
    
    getWorkingTimes();

  }, []);

  workingTimes.forEach(e => {

    e.monday === 'Morning' ? data[0].morning++ : data[0].night++;
    e.tuesday === 'Morning' ? data[1].morning++ : data[1].night++;
    e.wednesday === 'Morning' ? data[2].morning++ : data[2].night++;
    e.thursday === 'Morning' ? data[3].morning++ : data[3].night++;
    e.friday === 'Morning' ? data[4].morning++ : data[4].night++;
    e.saturday === 'Morning' ? data[5].morning++ : data[5].night++;
    e.sunday === 'Morning' ? data[6].morning++ : data[6].night++;

  });

  return ( 
    <div className="hr-view-working-time-view">

      <Header title={'View Employee Working Times'} />

        <BarChart
          width={1000}
          height={400}
          data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Legend  />
          <Bar dataKey="morning" fill="#F5F5F1" />
          <Bar dataKey="night" fill="#B81d24" />
        </BarChart>
      
    </div>
   );
}
 
export default HRViewWorkingTimeView;