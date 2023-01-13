import Facility from "../Model/Facility";

class FacilityController{

  static createFacility(name, description){

    let facility = new Facility(name, description);
    facility.create();
    return facility.identifier;

  }

  static async getFacilities(){

    return await Facility.read();

  }

  static setFacilityStatus(id, status){

    Facility.updateStatus(id, status);

  }

}

export default FacilityController;