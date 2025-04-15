import { NavLink } from "react-router";
import logo from "../../assets/header-logo.svg";
import "../../styles/css/Header.css";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="header-logo" />
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          A Propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
