import Banner from "../components/Banner.jsx";
import "../styles/css/Home.css";
import Logements from "../data/logements.json";
import Card from "../components/Card.jsx";

function Home() {
  return (
    <div className="home-body">
      <Banner
        image="src/assets/home-banner-img.jpg"
        text="Chez vous, partout et ailleurs"
      />
      <div className="cards-container">
        {Logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            cover={logement.cover}
            title={logement.title}
            link={`/logement/${logement.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
