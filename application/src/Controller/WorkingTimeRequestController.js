import WorkingTimeRequest from "../Model/WorkingTimeRequest";


class WorkingTimeRequestController{

  static createWorkingTimeRequest(monday, tuesday, wednesday, thursday, friday, saturday, sunday){

    let workingTimeRequest = new WorkingTimeRequest(monday, tuesday, wednesday, thursday, friday, saturday, sunday);
    workingTimeRequest.create();

  }

  static getWorkingTimeRequests(){

    return WorkingTimeRequest.read();

  }

}

export default WorkingTimeRequestController;