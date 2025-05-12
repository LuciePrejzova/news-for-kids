import React, { useRef } from "react";
import "./ArticleElement.css";
import placeholderImg from "../assets/teenage-news-1.png";
import placeholderImg2 from "../assets/teenage-news-2.png";

const ArticleElement = ({ article }) => {
  const imageArr = [placeholderImg, placeholderImg2];
  const randomInt = useRef(Math.floor(Math.random() * 2));

  return (
    <div className="article-element">
      <a href={article.url}>
        <img
          src={
            article.image !== "None"
              ? article.image
              : imageArr[randomInt.current]
          }
          alt={article.title}
        ></img>
        <h4>{article.title}</h4>
      </a>
    </div>
  );
};

export default ArticleElement;
