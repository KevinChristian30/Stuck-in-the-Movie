import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";
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

  static async read(){

    const personalLeaveRequestCollectionRef = collection(db, 'personal-leave-requests');
    const data = await getDocs(personalLeaveRequestCollectionRef);
    return data;

  }

  static async updateLeaveRequestStatus(id, status){

    const toUpdate = {status: status};
    const leaveRequestDoc = doc(db, 'personal-leave-requests', id);
    await updateDoc(leaveRequestDoc, toUpdate);

  }

}

export default PersonalLeaveRequest;