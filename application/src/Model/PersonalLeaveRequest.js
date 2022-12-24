import { addDoc, collection } from "firebase/firestore";
import { db } from "../Utility/firebase-config";

class PersonalLeaveRequest{

  constructor(leaveStartTime, leaveEndTime, reason){
    this.leaveStartTime = leaveStartTime;
    this.leaveEndTime = leaveEndTime;
    this.reason = reason;
    this.email = sessionStorage.getItem('EmployeeEmail');
    this.status = 'Pending';
  }

  async create(){

    const personalLeaveRequestCollectionRef = collection(db, 'personal-leave-requests');
    await addDoc(personalLeaveRequestCollectionRef, {
      leaveStartTime: this.leaveStartTime,
      leaveEndTime: this.leaveEndTime,
      reason: this.reason,
      email: this.email,
      status: this.status
    });

  }

}

export default PersonalLeaveRequest;