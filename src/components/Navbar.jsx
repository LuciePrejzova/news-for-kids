import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <a href="/">
        <span>New For Kids</span>
      </a>
      <Link to="/">Link 1</Link>
      <Link to="/">Link 2</Link>
    </nav>
  );
};

export default Navbar;
