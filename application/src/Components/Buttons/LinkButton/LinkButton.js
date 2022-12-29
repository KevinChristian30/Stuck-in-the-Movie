import "./LinkButton.css";

const LinkButton = (props) => {

  const url = props.url;
  const text = !props.text ? 'View' : props.text;

  return (  
    <a className="link-button" href={url} target="_blank">{text}</a>
  );
}
 
export default LinkButton;