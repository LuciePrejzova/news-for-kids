import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Stránka nenalezena.</p>
      <Link to="/">Zpět na hlavní stránku</Link>
    </div>
  );
};

export default NotFound;
