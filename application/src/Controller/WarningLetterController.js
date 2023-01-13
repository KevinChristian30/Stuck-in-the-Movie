import WarningLetter from "../Model/WarningLetter";

class WarningLetterController{

  static createWarningLetter(file){

    let warningLetter = new WarningLetter(file);
    warningLetter.create();

  }

  static async getWarningLetters(){

    return await WarningLetter.read();

  }

  static setWarningLetterStatus(id, status){

    WarningLetter.updateStatus(id, status);

  }

}

export default WarningLetterController;