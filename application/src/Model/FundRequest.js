import { db } from "../Utility/firebase-config";
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";

class FundRequest{

  constructor(amountOfMoney, reason) {
      this.amountOfMoney = amountOfMoney;
      this.reason = reason;
      this.requesterEmail = sessionStorage.getItem('EmployeeEmail');
      this.requesterDepartment = sessionStorage.getItem('EmployeeDepartment');
      this.status = 'Pending';
  }

  async create(){

    const fundRequestsCollectionRef = collection(db, 'fund-requests')
    await addDoc(fundRequestsCollectionRef, {
      requesterEmail: this.requesterEmail,
      requesterDepartment: this.requesterDepartment,
      amountOfMoney: Number(this.amountOfMoney),
      reason: this.reason,
      status: this.status
    });

  }

  static async read(){

    const fundRequestsCollectionRef = collection(db, 'fund-requests');
    const data = await getDocs(fundRequestsCollectionRef);
    return data;

  }

  static async updateStatus(id, status){

    const toUpdate = {status: status};
    const fundRequestDoc = doc(db, 'fund-requests', id);
    await updateDoc(fundRequestDoc, toUpdate);

  }

  static async revise(id, reviseReason){

    const toUpdate = {status: 'Revised', revisionReason: reviseReason};
    const fundRequestDoc = doc(db, 'fund-requests', id);
    await updateDoc(fundRequestDoc, toUpdate);

  }

}

export default FundRequest;