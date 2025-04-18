import Slideshow from "../../components/Slideshow";
import Logements from "../../data/logements.json";
import { useParams } from "react-router";
import "../../styles/css/Accomodation.css";
import Logement from "../../components/Accomodation/index";

function Accomodation() {
  const { id } = useParams();
  const logement = Logements.find((logement) => logement.id === id);
  if (!logement) {
    return <div></div>;
  }
  return (
    <div className="accomodation-body">
      <Slideshow pictures={logement.pictures} />
      <Logement {...logement} />
    </div>
  );
}

export default Accomodation;
