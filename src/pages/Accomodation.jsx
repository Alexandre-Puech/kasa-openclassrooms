import Slideshow from "../components/Slideshow";
import Logements from "../data/logements.json";
import { useParams, useNavigate } from "react-router";
import "../styles/css/Accomodation.css";
import Logement from "../components/Accomodation";
import { useEffect } from "react";

function Accomodation() {
  const { id } = useParams();
  let navigate = useNavigate();
  const logement = Logements.find((logement) => logement.id === id);
  useEffect(() => {
    if (!logement) {
      navigate("/*");
    }
  }, [logement, navigate]);
  return logement ? (
    <div className="accomodation-body">
      <Slideshow pictures={logement.pictures} />
      <Logement {...logement} />
    </div>
  ) : null;
}

export default Accomodation;
