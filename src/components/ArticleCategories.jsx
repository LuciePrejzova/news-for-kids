import React, { useState, useEffect } from "react";
import "./ArticleCategories.css";
import ArticlesRow from "./ArticlesRow";
import { fetchLatestNews } from '../api/news'


const CATEGORIES = [
  "regional",
  "technology",
  "lifestyle",
  "business",
  "general",
  "programming",
  "science",
  "entertainment",
  "world",
  "sports",
  "finance",
  "academia",
  "politics",
  "health",
  "opinion",
  "food",
  "game",
];

const ArticleCategories = () => {
  const [articles, setArticles] = useState([]);
  // const [category, setCategory] = useState("default");

useEffect(()=>{
  fetchLatestNews()
  .then((data)=>{
    console.log("Data received "+data);
    setArticles(data)
  .catch(error => console.error(error))
  }
  )
  
},[])

  return (
    <div className='article-categories'>
      <h1>Article Categories</h1>
      {CATEGORIES.map((category) => {
        return <ArticlesRow category={category} articles={articles}/>;
      })}
    </div>
  );
};

export default ArticleCategories;
