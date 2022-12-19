import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"
import { auth } from "../Utility/firebase-config";
import { PasswordGenerator } from "../Utility/PasswordGenerator";

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
  }

  create(){

    createUserWithEmailAndPassword(auth, this.email, 
      PasswordGenerator.getInstance().generatePassword(this.name, this.dateOfBirth));

    // let employeesCollectionRef = collection(db, "employees");
    // await addDoc(employeesCollectionRef, {
    //   EmployeeName: name,
    //   EmployeeEmail: email,
    //   EmployeePhoneNumber: phoneNumber,
    //   EmployeeGender: gender,
    //   EmployeeDepartment: department,
    //   EmployeeSalary: Number(salary),
    //   EmployeeAddress: address,
    //   EmployeeDateOfBirth: dateOfBirth
    // });

  }

  read(){

  }

  update(){

  }

}

export default Employee;
