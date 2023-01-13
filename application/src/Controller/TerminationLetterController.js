import TerminationLetter from "../Model/TerminationLetter";

class TerminationLetterController{

  static createTerminationLetter(file){

    let terminationLetter = new TerminationLetter(file);
    terminationLetter.create();

  }

  static async getTerminationLetters(){

    return await TerminationLetter.read();

  }

  static setTerminationLetterStatus(id, status){

    TerminationLetter.updateStatus(id, status);

  }

}

export default TerminationLetterController;