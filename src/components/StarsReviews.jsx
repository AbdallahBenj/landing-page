import { FaRegStar, FaStarHalf, FaStar } from "react-icons/fa";
const StarsReview = ({ score = 5 }) => {
  const fillStars = Math.floor(score);
  const halfStars = Math.ceil(score - fillStars);
  const emptyStars = 5 - (fillStars + halfStars);

  return (
    <div className="flex text-2xl text-amber-500">
      {Array(fillStars)
        .fill(0)
        .map((_, i) => {
          return <FaStar key={`fill-${i}`} />;
        })}
      {Array(halfStars)
        .fill(0)
        .map((_, i) => {
          return (
            <div key={`halp-${i}`} className="relative half-star">
              <FaRegStar />
              <FaStarHalf className="absolute top-0 right-0" />
            </div>
          );
        })}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => {
          return <FaRegStar key={`empty-${i}`} />;
        })}
    </div>
  );
};

export default StarsReview;
