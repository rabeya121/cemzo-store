import { getStars } from "../utils/helpers";

export default function StarRating({ rate, count }) {
  const { full, half, empty } = getStars(rate);

  return (
    <div className="star-row">
      <div className="stars">
        {Array(full).fill(0).map((_, i) => <span key={`f${i}`} className="star full">★</span>)}
        {half && <span className="star half">★</span>}
        {Array(empty).fill(0).map((_, i) => <span key={`e${i}`} className="star empty">★</span>)}
      </div>
      <span className="rating-text">{rate} ({count})</span>
    </div>
  );
}
