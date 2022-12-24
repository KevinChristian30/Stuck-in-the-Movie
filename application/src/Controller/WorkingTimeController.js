import WorkingTime from "../Model/WorkingTime";

class WorkingTimeController{

  static createWorkingTime(email){

    let workingTime = new WorkingTime(email);
    workingTime.create();

  }

}

export default WorkingTimeController;