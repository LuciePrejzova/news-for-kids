import React, { useState, useEffect } from "react";
import "./NewsOfTheDay.css";
import { fetchLatestNews } from "../api/news";

const NewsOfTheDay = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

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

  return <div>
    <h2>News Of The Day</h2>
    <img src={article.image}/>
    <h3>{article.title}</h3>
  </div>;
};

export default NewsOfTheDay;
