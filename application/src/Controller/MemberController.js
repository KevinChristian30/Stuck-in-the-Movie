import Member from "../Model/Member";

class MemberController{

  static createMember(name, gender, email, phoneNumber, address, dateOfBirth, paymentMethod){

    let member = new Member(name, gender, email, phoneNumber, address, dateOfBirth, paymentMethod);
    member.create();

  }

  static async getMembers(){

    return await Member.read();

  }

}

export default MemberController;