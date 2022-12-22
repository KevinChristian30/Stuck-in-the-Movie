import { useState } from "react";
import "./ResignationLetterCard.css";

const ResignationLetterCard = (props) => {

  const url = props.url;
  const count = props.count;

  return ( 
    <div className="resignation-letter-card">
      <p>Resignation Request {count}</p>
      <a id="file-link" target="_blank" href={url}>View</a>
    </div>
   );
}
 
export default ResignationLetterCard;