import "./AcceptButton.css"

const AcceptButton = (props) => {

  const onclick = props.onclick;

  return ( 
    <button className="accept-button" onClick={onclick}>Accept</button>
  );
}
 
export default AcceptButton;