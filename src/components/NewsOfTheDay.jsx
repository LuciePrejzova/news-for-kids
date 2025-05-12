import React, { useState, useEffect, useRef } from "react";
import "./NewsOfTheDay.css";
import imagePlaceholder from "../assets/teenage-news-1.png";
import imagePlaceholder2 from "../assets/teenage-news-2.png";

import { fetchLatestNews } from "../api/news";

const NewsOfTheDay = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  const imageArr = [imagePlaceholder, imagePlaceholder2];
  const randomInt = useRef(Math.floor(Math.random() * 2));

  useEffect(() => {
    fetchLatestNews()
      .then((data) => {
        setArticle(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news: " + error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!article) return <p>No article found</p>;

  return (
    <div className="news-of-the-day">
      <h2>News Of The Day</h2>
      <img
        src={
          article.image !== "None" ? article.image : imageArr[randomInt.current]
        }
        alt={article.title}
      />
      <h3>{article.title}</h3>
      <h4>{article.description}</h4>
    </div>
  );
};

export default NewsOfTheDay;
