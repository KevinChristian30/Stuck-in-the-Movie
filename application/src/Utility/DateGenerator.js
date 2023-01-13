export const DateGenerator = (function() {

  class DateGenerator{

    getCurrentDate(){
      return new Date().toDateString();
    }

  }

  let instance;

  return {
    getInstance: function(){
      if(!instance) instance = new DateGenerator();
      return instance;
    }
  }

})();
