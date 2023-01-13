import AdvertisementPartner from "../Model/AdvertisementPartner";
import MovieProducer from "../Model/MovieProducer";
import Supplier from "../Model/Supplier";

class PartnerFactory{

  static create(name, email, phoneNumber, division, address){

    if (division === 'Supplier'){
      
      return new Supplier(name, email, phoneNumber, address);

    } else if (division === 'Movie Producer'){
      
      return new MovieProducer(name, email, phoneNumber, address);

    } else if (division === 'Advertisement Partner'){
      
      return new AdvertisementPartner(name, email, phoneNumber, address);

    }

  }

}

export default PartnerFactory;