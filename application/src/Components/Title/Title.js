import "./Title.css";

const Title = (props) => {

  const text = props.title;

  return ( 
    <div className="title-component">
      <h3>{ text }</h3>
    </div>
   );
}
 
export default Title;