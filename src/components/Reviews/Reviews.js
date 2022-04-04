import React from "react";
import useReviews from "../../hooks/useReviews";
import ReviewCard from "../ReviewCard/ReviewCard";

const Reviews = () => {
  const [userReviews] = useReviews([]);
  // console.log("Hello", userReviews);
  return (
    <div>
      <h1 className="text-center mt-10 text-5xl">Reviews from customers</h1>
      {userReviews.map((review) => (
        <ReviewCard key={review.id} review={review}></ReviewCard>
      ))}
    </div>
  );
};

export default Reviews;
