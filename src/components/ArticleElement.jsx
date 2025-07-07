import { Link, useNavigate } from "react-router-dom";
import "./ArticleElement.css";
import ImagePlaceholder from "./ImagePlaceholder";
import useUser from "../context/useUser";

const ArticleElement = ({ article }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  if (!user && article.isPreviewPlaceholder) {
    return (
      <div className="article-element login-card">
        <p>Pro zobrazení více článků se přihlaste.</p>
        <button onClick={() => navigate("/login")}>Přihlásit se</button>
      </div>
    );
  }

  return (
    <div className="article-element">
      <Link to={`/article/${article.uri}`}>
        {article.image ? (
          <img src={article.image} alt={article.title} />
        ) : (
          <ImagePlaceholder title={article.title} />
        )}
        <h4>{article.title}</h4>
      </Link>
    </div>
  );
};

export default ArticleElement;
