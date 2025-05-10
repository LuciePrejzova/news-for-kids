import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <a href="/">
        <span>New For Kids</span>
      </a>
      <Link to="/">Home</Link>
      <Link to="/">Categories</Link>
      <Link to="/">About us</Link>
    </nav>
  );
};

export default Navbar;
