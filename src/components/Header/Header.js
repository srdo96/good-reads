import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav>
      <Link to="/" className="hover:text-yellow-400">
        HOME
      </Link>
      <Link to="/reviews" className="mx-5 hover:text-yellow-300">
        REVIEWS
      </Link>
      <Link to="/dashboard" className="hover:text-yellow-300">
        DASHBOARD
      </Link>
      <Link to="/blogs" className="mx-5 hover:text-yellow-300">
        BLOGS
      </Link>
      <Link to="/about" className=" hover:text-yellow-300">
        ABOUT
      </Link>
    </nav>
  );
};

export default Header;
