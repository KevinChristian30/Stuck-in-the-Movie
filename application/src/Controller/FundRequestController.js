import FundRequest from  "../Model/FundRequest"

class FundRequestController{

  static createFundRequest(fundAmount, reason){

    let fundRequest = new FundRequest(fundAmount, reason);
    fundRequest.create();

  }

  static getFundRequests(){

    return FundRequest.read();

  }
  
}

export default FundRequestController;