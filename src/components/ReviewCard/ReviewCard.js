import React from "react";

const ReviewCard = ({ review }) => {
  const { name, title, comment, ratting } = review;
  return (
    <div className="mt-14 mx-32">
      <div className="flex items-center justify-center mb-4 space-x-4 space-y-1 font-medium">
        <p>{name}</p>
      </div>
      <div className="flex items-center justify-center mb-1">
        <h3 className="border bg-yellow-200 px-2  text-black rounded">
          Stars: {ratting}
        </h3>
        <h3 className="ml-2 text-sm font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="mb-4 font-light text-center text-gray-500 ">{comment}</p>
      <hr />
    </div>
  );
};

export default ReviewCard;
