import ResignationLetter from "../Model/ResignationLetter";

class ResignationLetterController{

  static createResignationLetter(file){

    let resignationLetter = new ResignationLetter(file);
    resignationLetter.create();

  }

  static async getResignationLetters(){

    return await ResignationLetter.read();

  }

  static async setResignationLetterStatus(id, status){

    ResignationLetter.updateStatus(id, status);

  }

}

export default ResignationLetterController;