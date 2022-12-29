import EquipmentRequest from  "../Model/EquipmentRequest"

class EquipmentRequestController{

  static createEquipmentRequest(request){

    let equipmentRequest = new EquipmentRequest(request);
    equipmentRequest.create();

  }

  static getEquipmentRequests(){

    return EquipmentRequest.read();

  }

  static setEquipmentRequestStatus(id, status){

    EquipmentRequest.updateStatus(id, status);

  }

  static reviseFacilityRequest(id, revisionReason){

    EquipmentRequest.revise(id, revisionReason);

  }
  
}

export default EquipmentRequestController;