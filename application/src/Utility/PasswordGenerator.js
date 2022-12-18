export const PasswordGenerator = (function() {

  class PasswordGenerator{

    generatePassword(name, dob){
      return name + dob;
    }

  }

  let instance;

  function createPasswordGenerator(){
    return new PasswordGenerator();
  }

  return {
    getInstance: function(){
      if(!instance) instance = createPasswordGenerator();
      return instance;
    }
  }

})();
