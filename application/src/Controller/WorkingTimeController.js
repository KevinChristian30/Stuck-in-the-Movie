import WorkingTime from "../Model/WorkingTime";

class WorkingTimeController{

  static createWorkingTime(email){

    let workingTime = new WorkingTime(email);
    workingTime.create();

  }

  static getWorkingTime(){

    return WorkingTime.read();

  }

}

export default WorkingTimeController;