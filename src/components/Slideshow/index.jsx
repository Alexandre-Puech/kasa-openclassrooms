import "../../styles/css/Slideshow.css";
import buttonIcon from "../../assets/collapse-button.svg";
import { useState } from "react";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = pictures.length;
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? total - 1 : prevIndex - 1
    );
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === total - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="slideshow-image"
      />
      {total > 1 && (
        <>
          <button className="slideshow-button left" onClick={goToPrevious}>
            <img src={buttonIcon} alt="Précédent" />
          </button>
          <button className="slideshow-button right" onClick={goToNext}>
            <img src={buttonIcon} alt="Suivant" />
          </button>
          <div className="slideshow-counter">
            {currentIndex + 1}/{total}
          </div>
        </>
      )}
    </div>
  );
}
export default Slideshow;
