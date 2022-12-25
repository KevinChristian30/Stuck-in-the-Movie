import "./CardWithText.css";

const CardWithText = (props) => {

  const text = props.text;

  return ( 
    <div className="card-with-text">
      <div className="card-with-text-container">
        <p>{text}</p>
      </div>
    </div>
  );
}
 
export default CardWithText;