import WorkingTimeRequest from "../Model/WorkingTimeRequest";


class WorkingTimeRequestController{

  static createWorkingTimeRequest(monday, tuesday, wednesday, thursday, friday, saturday, sunday){

    let workingTimeRequest = new WorkingTimeRequest(monday, tuesday, wednesday, thursday, friday, saturday, sunday);
    workingTimeRequest.create();

  }

}

export default WorkingTimeRequestController;