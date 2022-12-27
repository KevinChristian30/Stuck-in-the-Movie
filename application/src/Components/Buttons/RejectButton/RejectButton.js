import "./RejectButton.css";

const RejectButton = (props) => {

  const onclick = props.onclick;

  return ( 
    <button className="reject-button" onClick={onclick}>Reject</button>
  );
}
 
export default RejectButton;