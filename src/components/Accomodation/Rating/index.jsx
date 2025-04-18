import FullStar from "../../../assets/full-star.svg";
import EmptyStar from "../../../assets/empty-star.svg";

function RatingScale({ rating }) {
  const totalStars = 5;
  const scaleValue = parseInt(rating, 10);

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <span key={index} className="rating-star">
          <img
            src={index < scaleValue ? FullStar : EmptyStar}
            alt={index < scaleValue ? "Étoile remplie" : "Étoile vide"}
          />
        </span>
      ))}
    </div>
  );
}
export default RatingScale;
