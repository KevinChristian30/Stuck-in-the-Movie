import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../Utility/firebase-config";

class SalaryChangeRequest{

  constructor(employeeID, email, oldSalary, newSalary){
    this.employeeID = employeeID;
    this.email = email;
    this.oldSalary = oldSalary;
    this.newSalary = newSalary;
    this.status = "Pending";
  }

  async create(){

    const salaryChangeRequestCollectionRef = collection(db, 'salary-change-requests')
    await addDoc(salaryChangeRequestCollectionRef, {
      employeeID: this.employeeID,
      email: this.email,
      oldSalary: this.oldSalary,
      newSalary: this.newSalary,
      status: this.status
    });

  }

  static async read(){

    const salaryChangeProposalsCollectionRef = collection(db, 'salary-change-requests');
    const data = await getDocs(salaryChangeProposalsCollectionRef);
    return data;

  }

  
  static async updateStatus(id, status){

    const toUpdate = {status: status};
    const salaryChangeDoc = doc(db, 'salary-change-requests', id);
    await updateDoc(salaryChangeDoc, toUpdate);

  }

}

export default SalaryChangeRequest;