import React from "react";

const Home = () => {
  return (
    <div className="grid grid-cols-3 mt-14">
      <div className="col-span-2 ml-16">
        <h1 className="text-6xl mt-24 mb-8 font-bold text-red-500">
          The Mirage Of Atheism
        </h1>
        <p className="text-xl">
          In The Divine Reality, Hamza Andreas Tzortzis provides a compelling
          case for the rational and spiritual foundations of Islam, whilst
          intelligently and compassionately deconstructing atheism. Join him on
          an existential, spiritual and rational journey that articulates
          powerful arguments for the existence of God, the Qur’an, the
          Prophethood of Muhammad and why we must know, love and worship God. He
          addresses academic and popular objections while showing how
          contemporary atheism is based on false assumptions about reality,
          which leads to incoherent answers to life’s important questions.
        </p>
        <div className="mt-8 ml-4">
          <a
            className="px-5 py-3 rounded-md bg-blue-300"
            href="https://www.rokomari.com/book/134318/the-divine-reality--god--islam-and-the-mirage-of-atheism"
          >
            BUY
          </a>
        </div>
      </div>
      <div className="justify-self-end">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/41HX-0fknAL._SX331_BO1,204,203,200_.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
