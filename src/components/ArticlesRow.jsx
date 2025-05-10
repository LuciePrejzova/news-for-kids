import React from "react";
import "./ArticlesRow.css";
import ArticleElement from "./ArticleElement";

const ArticlesRow = ({ category, articles }) => {
  console.log("articles prop received:", articles);

  if (!articles) return <p>No articles</p>;

  return (
    <div className="article-row-container">
      <h3>{category.toUpperCase()}</h3>
      <div className="article-row">
        {articles
          .filter((article) => article.category === category)
          .map((article) => (
            <ArticleElement key={article.id} article={article} />
          ))}
      </div>
    </div>
  );
};

export default ArticlesRow;
