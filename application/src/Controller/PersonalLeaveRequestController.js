import PersonalLeaveRequest from "../Model/PersonalLeaveRequest"

class PersonalLeaveRequestController{

  static createPersonalLeaveRequest(leaveStartTime, leaveEndTime, reason){

    let personalLeaveRequest = new PersonalLeaveRequest(leaveStartTime, leaveEndTime, reason);
    personalLeaveRequest.create();

  }

  static getPersonalLeaveRequests(){

    return PersonalLeaveRequest.read();

  }

  static updateLeaveRequestStatus(id, status){

    PersonalLeaveRequest.updateLeaveRequestStatus(id, status)

  }

}

export default PersonalLeaveRequestController;