import { Link } from "react-router";
import logo from "../../assets/header-logo.svg";
import "../../styles/css/Header.css";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="header-logo" />
      <nav className="nav">
        <Link to="/" className="nav-link">
          Accueil
        </Link>
        <Link to="/a-propos" className="nav-link">
          A Propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;
