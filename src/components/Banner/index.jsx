import "../../styles/css/Banner.css";

const Banner = ({ image, text }) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
      }}
    >
      <h1 className="banner-text">{text}</h1>
    </div>
  );
};

export default Banner;
