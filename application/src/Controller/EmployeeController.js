import Employee from "../Model/Employee";

class EmployeeController{

  static createEmployee(name, email, phoneNumber, gender, department, salary, address, dateOfBirth){

    let employee = new Employee(name, email, phoneNumber, gender, department, salary, address, dateOfBirth);
    employee.create();

  }

  static async getEmployees(){

    return await Employee.read();

  }

}

export default EmployeeController;