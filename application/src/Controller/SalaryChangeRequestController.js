import SalaryChangeRequest from "../Model/SalaryChangeRequest";

class SalaryChangeRequestController{

  static createSalaryChangeRequest(employeeID, email, oldSalary, newSalary){
    
    const salaryChangeRequest = new SalaryChangeRequest(employeeID, email, oldSalary, newSalary);
    salaryChangeRequest.create();

  }

  static async getSalaryChangeRequests(){

    return await SalaryChangeRequest.read();

  }

  static changeSalaryChangeRequestStatus(id, status){

    SalaryChangeRequest.updateStatus(id, status);

  }
  
}

export default SalaryChangeRequestController;