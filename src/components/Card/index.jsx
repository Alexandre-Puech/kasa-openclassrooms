import "../../styles/css/Card.css";
import { Link } from "react-router";

function Card({ id, cover, title, link }) {
  return (
    <Link to={link} className="card-link">
      <div
        className="card-body"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(10, 10, 10, 0) 42%, rgba(4, 4, 4, 0.8) 99.99%, rgba(0, 0, 0, 0.8) 100%),
url(${cover})`,
        }}
      >
        <p className="card-title">{`${title}`}</p>
        <p className="card-id">{`${id}`}</p>
      </div>
    </Link>
  );
}

export default Card;
