import { useState, useRef, useEffect } from "react";
import "../../styles/scss/Collapse.scss";
import buttonIcon from "../../assets/collapse-button.svg";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = isOpen
        ? contentRef.current.scrollHeight + "px"
        : "0px";
    }
  }, [isOpen]);

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
      <div
        ref={contentRef}
        className={isOpen ? "collapse-content open" : "collapse-content"}
      >
        <div className="collapse-content-text">{content}</div>
      </div>
    </div>
  );
}

export default Collapse;
