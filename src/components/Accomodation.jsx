import "../styles/css/Accomodation-body.css";
import Owner from "./Owner.jsx";
import Rating from "./Rating.jsx";
import Tags from "./Tags.jsx";
import Collapse from "./Collapse.jsx";

function Logement({
  title,
  location,
  host,
  tags,
  rating,
  description,
  equipments,
}) {
  return (
    <div className="logement">
      <div className="logement-upper">
        <div className="logement-left">
          <div className="logement-header-text">
            <h2 className="logement-title">{title}</h2>
            <p className="logement-location">{location}</p>
          </div>
          <Tags tags={tags} />
        </div>
        <div className="logement-right">
          <Owner name={host.name} picture={host.picture} />
          <Rating rating={rating} />
        </div>
      </div>
      <div className="logement-collapses">
        <Collapse title="Description" content={description} />
        <Collapse
          title="Équipements"
          content={equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default Logement;
