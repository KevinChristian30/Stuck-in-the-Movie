import Employee from "../Model/Employee";

class AddEmployeeController{

  static createEmployee(name, email, phoneNumber, gender, department, salary, address, dateOfBirth){

    let employee = new Employee(name, email, phoneNumber, gender, department, salary, address, dateOfBirth);
    employee.create();

  }

}

export default AddEmployeeController;