import Banner from "../../components/Banner/index.jsx";
import Collapse from "../../components/Collapse/index.jsx";
import "../../styles/css/About.css";

function About() {
  return (
    <div className="about-body">
      <Banner image="src/assets/about-banner-img.jpg" text="" />
      <div className="collapses-container">
        <Collapse
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"
        />
        <Collapse
          title="Respect"
          content="Le bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme"
        />
        <Collapse
          title="Service"
          content="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance"
        />
        <Collapse
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de cérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
}

export default About;
