import "./AcceptButton.css"

const AcceptButton = (props) => {

  const onclick = props.onclick;
  const text = (!props.text) ? 'Accept' : props.text;

  return ( 
    <button className="accept-button" onClick={onclick}>{ text }</button>
  );
}
 
export default AcceptButton;