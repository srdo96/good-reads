import React from "react";
import MyLink from "../../customLink/MyLink";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <MyLink to="/" className="hover:text-yellow-400">
        HOME
      </MyLink>
      <MyLink to="/reviews" className="mx-5 hover:text-yellow-300">
        REVIEWS
      </MyLink>
      <MyLink to="/dashboard" className="hover:text-yellow-300">
        DASHBOARD
      </MyLink>
      <MyLink to="/blogs" className="mx-5 hover:text-yellow-300">
        BLOGS
      </MyLink>
      <MyLink to="/about" className=" hover:text-yellow-300">
        ABOUT
      </MyLink>
    </nav>
  );
};

export default Header;
