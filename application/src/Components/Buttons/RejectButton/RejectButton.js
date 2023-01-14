import "./RejectButton.css";

const RejectButton = (props) => {

  const onclick = props.onclick;
  const text = (!props.text) ? 'Reject' : props.text;

  return ( 
    <button className="reject-button" onClick={onclick}>{ text }</button>
  );
}
 
export default RejectButton;