import PersonalLeaveRequest from "../Model/PersonalLeaveRequest"

class PersonalLeaveRequestController{

  static createPersonalLeaveRequest(leaveStartTime, leaveEndTime, reason){

    let personalLeaveRequest = new PersonalLeaveRequest(leaveStartTime, leaveEndTime, reason);
    personalLeaveRequest.create();

  }

}

export default PersonalLeaveRequestController;