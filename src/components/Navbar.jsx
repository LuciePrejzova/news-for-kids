import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
      <a href="/">
        <span>News For Kids</span>
      </a>
      </div>
      <div className="navbar-links">
      <Link to="/">Home</Link>
      <Link to="/">Categories</Link>
      <Link to="/">About us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
