import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import ReviewCard from "../ReviewCard/ReviewCard";
const Home = () => {
  const [reviews] = useReviews();
  return (
    <div>
      {/* product and its info */}
      <section className="grid grid-cols-3 mt-14 mr-8">
        <div className="col-span-2 ml-16">
          <h1 className="text-6xl mt-24 mb-8 font-bold text-red-500">
            The Mirage Of Atheism
          </h1>
          <p className="text-xl">
            In The Divine Reality, Hamza Andreas Tzortzis provides a compelling
            case for the rational and spiritual foundations of Islam, whilst
            intelligently and compassionately deconstructing atheism. Join him
            on an existential, spiritual and rational journey that articulates
            powerful arguments for the existence of God, the Qur’an, the
            Prophethood of Muhammad and why we must know, love and worship God.
            He addresses academic and popular objections while showing how
            contemporary atheism is based on false assumptions about reality,
            which leads to incoherent answers to life’s important questions.
          </p>
          <div className="mt-8 ml-4">
            <a
              className="px-5 py-3 rounded-md bg-blue-300"
              href="https://www.rokomari.com/book/134318/the-divine-reality--god--islam-and-the-mirage-of-atheism"
            >
              BUY THIS BOOK
            </a>
          </div>
        </div>
        <div className="justify-self-end">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/41HX-0fknAL._SX331_BO1,204,203,200_.jpg"
            alt=""
          />
        </div>
      </section>
      <section>
        <h1 className=" mt-14 text-center text-5xl font-bold">
          Customer Reviews(3)
        </h1>
        <div>
          {reviews.map(
            (review) =>
              review.id < 4 && (
                <ReviewCard key={review.id} review={review}></ReviewCard>
              )
          )}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/reviews"
            className="px-14 py-1 rounded-md bg-blue-600 text-white"
          >
            See All Reviews
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
