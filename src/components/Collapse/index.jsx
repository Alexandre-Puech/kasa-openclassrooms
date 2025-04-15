import { useState } from "react";
import "../../styles/scss/Collapse.scss";
import buttonIcon from "../../assets/collapse-button.svg";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="collapse">
      <div className="collapse-preview">
        <p className="collapse-title">{title}</p>
        <button
          className={isOpen ? "collapse-button open" : "collapse-button"}
          onClick={toggleCollapse}
        >
          <img src={buttonIcon} alt="Bouton" />
        </button>
      </div>
      <div className={isOpen ? "collapse-content open" : "collapse-content"}>
        <p>{content}</p>
      </div>
    </div>
  );
}
export default Collapse;
