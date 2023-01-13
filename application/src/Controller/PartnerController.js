import PartnerFactory from "../Factories/PartnerFactory";

class PartnerController{

  static createPartner(name, email, phoneNumber, division, address){

    const partner = PartnerFactory.create(name, email, phoneNumber, division, address);
    partner.create();

  }

}

export default PartnerController;