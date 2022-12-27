import EquipmentRequest from  "../Model/EquipmentRequest"

class EquipmentRequestController{

  static createEquipmentRequest(request){

    let equipmentRequest = new EquipmentRequest(request);
    equipmentRequest.create();

  }

  static getEquipmentRequests(){

    return EquipmentRequest.read();

  }
  
}

export default EquipmentRequestController;