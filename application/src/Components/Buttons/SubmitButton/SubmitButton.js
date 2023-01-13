import "./SubmitButton.css"

const SubmitButton = (props) => {

  const onclick = props.onclick;

  return ( 
    <button type="button" className="submit-button" onClick={onclick}>Submit</button>
  );
}
 
export default SubmitButton;