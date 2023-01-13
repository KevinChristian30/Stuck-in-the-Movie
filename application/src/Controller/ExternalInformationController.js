import ExternalInformation from "../Model/ExternalInformation";

class ExternalInformationController{

  static createExternalInformation(name, type, file){
    
    const externalInformation = new ExternalInformation(name, type, file);
    externalInformation.create();

  }

}

export default ExternalInformationController;