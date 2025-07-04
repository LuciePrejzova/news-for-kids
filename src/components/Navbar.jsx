import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../context/useUser";


const Navbar = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  }

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
          <>
          <Link to='/favorites'>Favorites</Link>
          <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
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
