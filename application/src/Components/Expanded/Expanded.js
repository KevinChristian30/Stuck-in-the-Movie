import "./Expanded.css";

const Expanded = (props) => {

  const text = props.text

  return ( 
    <div className="expanded">
        <p>{text}</p>
    </div> 
  );
}
 
export default Expanded;