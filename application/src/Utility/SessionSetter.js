export const SessionSetter = (function() {

  class SessionSetter{

    resetUserSession(){

      sessionStorage.removeItem('EmployeeName');
      sessionStorage.removeItem('EmployeeAddress');
      sessionStorage.removeItem('EmployeeDateOfBirth');
      sessionStorage.removeItem('EmployeeDepartment');
      sessionStorage.removeItem('EmployeeEmail');
      sessionStorage.removeItem('EmployeeGender');
      sessionStorage.removeItem('EmployeePhoneNumber');
      sessionStorage.removeItem('EmployeeSalary');
    
    }
    
    setUserSession(currentEmployee){
    
      sessionStorage.setItem('EmployeeName', currentEmployee.EmployeeName);
      sessionStorage.setItem('EmployeeAddress', currentEmployee.EmployeeAddress);
      sessionStorage.setItem('EmployeeDateOfBirth', currentEmployee.EmployeeDateOfBirth);
      sessionStorage.setItem('EmployeeDepartment', currentEmployee.EmployeeDepartment);
      sessionStorage.setItem('EmployeeEmail', currentEmployee.EmployeeEmail);
      sessionStorage.setItem('EmployeeGender', currentEmployee.EmployeeGender);
      sessionStorage.setItem('EmployeePhoneNumber', currentEmployee.EmployeePhoneNumber);
      sessionStorage.setItem('EmployeeSalary', currentEmployee.EmployeeSalary);
    
    }

  }

  let instance;

  return {
    getInstance: function(){
      if(!instance) instance = new SessionSetter();
      return instance;
    }
  }

})();