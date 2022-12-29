import FundRequest from  "../Model/FundRequest"

class FundRequestController{

  static createFundRequest(fundAmount, reason){

    let fundRequest = new FundRequest(fundAmount, reason);
    fundRequest.create();

  }

  static async getFundRequests(){

    return await FundRequest.read();

  }

  static setFundRequestStatus(id, status){

    FundRequest.updateStatus(id, status);

  }

  static reviseFundRequst(id, reviseReason){

    FundRequest.revise(id, reviseReason);

  }
  
}

export default FundRequestController;