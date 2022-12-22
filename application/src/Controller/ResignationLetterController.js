import ResignationLetter from "../Model/ResignationLetter";

class ResignationLetterController{

  static createResignationLetter(identifier){

    let resignationLetter = new ResignationLetter(identifier);
    resignationLetter.create();

  }

}

export default ResignationLetterController;