import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../context/useUser";

const Navbar = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav>
      <div>
        <a href="/">
          <span>Zprávy pro děti</span>
        </a>
      </div>
      <div className="navbar-links">
        <Link to="/">Domů</Link>
        {user ? (
          <>
            <Link to="/favorites">Oblíbené</Link>
            <button onClick={handleLogout} className="logout-button">
              Odhlásit
            </button>
          </>
        ) : (
          <div className="navbar-links">
            <Link to="/login">Přihlásit</Link>
            <Link to="/register">Registrovat</Link>
          </div>
        )}
        <Link to="/about">O projektu</Link>
      </div>
    </nav>
  );
};

export default Navbar;
