import "../../styles/css/Footer.css";
import logo from "../../assets/footer-logo.svg";

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="Logo" className="footer-logo" />
      <p className="footer-text">@ 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
