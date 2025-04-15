import "../../styles/css/Error-404.css";
import { Link } from "react-router";

function Error404() {
  return (
    <div className="error404-body">
      <p className="error404-icon">404</p>
      <p className="error404-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="home-link">
        Retourner à la page d'accueil
      </Link>
    </div>
  );
}
export default Error404;
