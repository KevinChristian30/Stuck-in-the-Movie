import "./LinkButton.css";

const LinkButton = (props) => {

  const url = props.url;

  return (  
    <a className="link-button" href={url} target="_blank">View</a>
  );
}
 
export default LinkButton;