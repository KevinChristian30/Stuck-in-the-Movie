import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore"
import WorkingTimeController from "../Controller/WorkingTimeController";
import { auth, db } from "../Utility/firebase-config";
import { PasswordGenerator } from "../Utility/PasswordGenerator";
import WorkingTime from "./WorkingTime";

class Employee{

  constructor(name, email, phoneNumber, gender, department, salary, address, dateOfBirth){
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.gender = gender;
    this.department = department;
    this.salary = Number(salary);
    this.address = address;
    this.dateOfBirth = dateOfBirth;
    this.status = 'Active';
    this.workingTime = new WorkingTime(this.email);
  }

  async create(){

    const employeesCollectionRef = collection(db, "employees");

    await createUserWithEmailAndPassword(auth, this.email, 
      PasswordGenerator.getInstance().generatePassword(this.name, this.dateOfBirth));

    await addDoc(employeesCollectionRef, {
      EmployeeName: this.name,
      EmployeeEmail: this.email,
      EmployeePhoneNumber: this.phoneNumber,
      EmployeeGender: this.gender,
      EmployeeDepartment: this.department,
      EmployeeSalary: this.salary,
      EmployeeAddress: this.address,
      EmployeeDateOfBirth: this.dateOfBirth,
      EmployeeStatus: this.status
    });

    console.log(this.email);
    WorkingTimeController.createWorkingTime(this.email);

  }

}

export default Employee;
