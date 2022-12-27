import "./ReviseButton.css"

const ReviseButton = (props) => {

  const onclick = props.onclick;

  return ( 
    <button className="revise-button" onClick={onclick}>Revise</button>
  );
}
 
export default ReviseButton;