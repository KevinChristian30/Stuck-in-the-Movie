import PartnerFactory from "../Factories/PartnerFactory";
import AdvertisementPartner from "../Model/AdvertisementPartner";
import MovieProducer from "../Model/MovieProducer";

class PartnerController{

  static createPartner(name, email, phoneNumber, division, address){

    const partner = PartnerFactory.create(name, email, phoneNumber, division, address);
    partner.create();

  }

  static async getAdvertisementPartners(){

    return await AdvertisementPartner.read();

  }

  static async getMovieProducers(){

    return await MovieProducer.read();

  }

}

export default PartnerController;