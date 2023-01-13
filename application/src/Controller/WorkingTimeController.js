import WorkingTime from "../Model/WorkingTime";

class WorkingTimeController{

  static createWorkingTime(email){

    let workingTime = new WorkingTime(email);
    workingTime.create();

  }

  static getWorkingTimes(){

    return WorkingTime.read();

  }

  static updateWorkingTime(id, monday, tuesday, wednesday, thursday, friday, saturday, sunday){

    WorkingTime.updateWorkingTime(id, monday, tuesday, wednesday, thursday, friday, saturday, sunday);

  }

}

export default WorkingTimeController;