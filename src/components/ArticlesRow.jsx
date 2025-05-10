import React from "react";
import "./ArticlesRow.css";
import ArticleElement from "./ArticleElement";

const ArticlesRow = ({ category, articles }) => {
console.log("articles prop received:", articles);

  if (!articles) return <p>No articles</p>;

  return (
    <div>
      <h3>{category}</h3>
      {articles
        .filter((article) => article.category === category)
        .map((article) => (
          <ArticleElement key={article.id} article={article} />
        ))}
    </div>
  );
};

export default ArticlesRow;
