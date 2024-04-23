import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const RatingStars = ({ rating }: any) => {
  const totalStars = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

  return (
    <div className='flex'>
      {[...Array(totalStars)].map((_, index) => {
        if (index < filledStars) {
          return <FaStar key={index} color="#ffc107" />;
        } else if (hasHalfStar && index === filledStars) {
          return <FaStarHalfAlt key={index} color="#ffc107" />;
        } else {
          return <FaStar key={index} color="#e4e5e9" />;
        }
      })}
    </div>
  );
};

export default RatingStars;
