import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/reviews" className="mx-5">
        REVIEWS
      </Link>
      <Link to="/dashboard">DASHBOARD</Link>
      <Link to="/blogs" className="mx-5">
        BLOGS
      </Link>
      <Link to="/about">ABOUT</Link>
    </nav>
  );
};

export default Header;
