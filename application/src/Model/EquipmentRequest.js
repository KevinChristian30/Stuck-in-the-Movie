import { db } from "../Utility/firebase-config";
import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";

class EquipmentRequest{

  constructor(request) {
    this.request = request;
    this.requesterEmail = sessionStorage.getItem('EmployeeEmail');
    this.requesterDepartment = sessionStorage.getItem('EmployeeDepartment');
    this.status = 'Pending';
  }

  async create(){

    const equipmentRequestsCollectionRef = collection(db, 'equipment-requests');
    await addDoc(equipmentRequestsCollectionRef, {
      request: this.request,
      requesterEmail: this.requesterEmail,
      requesterDepartment: this.requesterDepartment,
      status: this.status
    });

  }

  static async read(){

    const equipmentRequestsCollectionRef = collection(db, 'equipment-requests');
    const data = await getDocs(equipmentRequestsCollectionRef);
    return data;

  }

  static async updateStatus(id, status){

    const toUpdate = {status: status};
    const facilityRequestDoc = doc(db, 'equipment-requests', id);
    await updateDoc(facilityRequestDoc, toUpdate);

  }

  static async revise(id, revisionReason){

    const toUpdate = {status: 'Revised', revisionReason: revisionReason};
    const facilityRequestDoc = doc(db, 'equipment-requests', id);
    await updateDoc(facilityRequestDoc, toUpdate);

  }

}

export default EquipmentRequest;