import Receipt from "../Model/Receipt";
import EquipmentRequestController from "./EquipmentRequestController";


class ReceiptController{

  static createReceipt(id, file){

    const receipt = new Receipt(id, file);
    receipt.create();

    EquipmentRequestController.setEquipmentRequestStatus(id, 'Purchased');

  }

}

export default ReceiptController;