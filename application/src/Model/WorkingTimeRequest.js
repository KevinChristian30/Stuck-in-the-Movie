import { addDoc, collection } from "firebase/firestore";
import { db } from "../Utility/firebase-config";

class WorkingTimeRequest{

  constructor(monday, tuesday, wednesday, thursday, friday, saturday, sunday){
    this.requesterEmail = sessionStorage.getItem('EmployeeEmail');
    this.monday = monday;
    this.tuesday = tuesday;
    this.wednesday = wednesday;
    this.thursday = thursday;
    this.friday = friday;
    this.saturday = saturday;
    this.sunday = sunday;
    this.status = 'Pending';
  }

  async create(){

    const workingTimeRequestsCollectionRef = collection(db, 'working-time-requests');
    await addDoc(workingTimeRequestsCollectionRef, {
      requesterEmail: this.requesterEmail,
      monday: this.monday,
      tuesday: this.tuesday,
      wednesday: this.wednesday,
      thursday: this.thursday,
      friday: this.friday,
      saturday: this.saturday,
      sunday: this.sunday,
      status: this.status
    });

  }

}

export default WorkingTimeRequest;