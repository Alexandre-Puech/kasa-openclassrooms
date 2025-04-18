import Slideshow from "../../components/Slideshow";
import Logements from "../../data/logements.json";
import { useParams, useNavigate } from "react-router";
import "../../styles/css/Accomodation.css";
import Logement from "../../components/Accomodation/index";
import { useEffect } from "react";

function Accomodation() {
  const { id } = useParams();
  let navigate = useNavigate();
  const logement = Logements.find((logement) => logement.id === id);
  useEffect(() => {
    if (!logement) {
      navigate("/*"), { replace: true };
    }
  }, [logement, navigate]);
  if (!logement) return null;
  return (
    <div className="accomodation-body">
      <Slideshow pictures={logement.pictures} />
      <Logement {...logement} />
    </div>
  );
}

export default Accomodation;
