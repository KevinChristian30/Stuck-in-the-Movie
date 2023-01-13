import Member from "../Model/Member";

class MemberController{

  static createMember(name, gender, email, phoneNumber, address, dateOfBirth){

    let member = new Member(name, gender, email, phoneNumber, address, dateOfBirth);
    member.create();

  }

}

export default MemberController;