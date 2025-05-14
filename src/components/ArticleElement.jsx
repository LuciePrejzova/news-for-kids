import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./ArticleElement.css";
import placeholderImg from "../assets/teenage-news-1.png";
import placeholderImg2 from "../assets/teenage-news-2.png";

const ArticleElement = ({ article }) => {
  const imageArr = [placeholderImg, placeholderImg2];
  const randomInt = useRef(Math.floor(Math.random() * 2));

  return (
    <div className="article-element">
      <Link to={`/article/${article.id}`}>
        <img
          src={article.image ? article.image : imageArr[randomInt.current]}
          alt={article.title}
        ></img>
        <h4>{article.title}</h4>
      </Link>
    </div>
  );
};

export default ArticleElement;
