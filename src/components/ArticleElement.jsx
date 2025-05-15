import { Link } from "react-router-dom";
import "./ArticleElement.css";
import ImagePlaceholder from "./ImagePlaceholder";

const ArticleElement = ({ article }) => {
  return (
    <div className="article-element">
      <Link to={`/article/${article.uri}`}>
        {article.image ? (
          <img src={article.image} alt={article.title}></img>
        ) : (
          <ImagePlaceholder title={article.title} />
        )}
        <h4>{article.title}</h4>
      </Link>
    </div>
  );
};

export default ArticleElement;
