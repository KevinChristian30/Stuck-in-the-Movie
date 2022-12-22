import "./RouteCard.css";

const RouteCard = (props) => {

  const title = props.title;

  return ( 
    <div className="route-card">
      <p className="left">{ title }</p>
      <p className="right">o</p>
    </div>
   );
}
 
export default RouteCard;

