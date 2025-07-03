import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import useUser from "../context/useUser";

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav>
      <div>
        <a href="/">
          <span>News For Kids</span>
        </a>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        {user ? (
          <Link to="/">Logout</Link>
        ) : (
          <div className="navbar-links">
            <Link to="/login">Log-in</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
        <Link to="/">About us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
