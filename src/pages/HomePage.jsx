import React from "react";

import LatestNews from "../components/LatestNews";
import NewsOfTheDay from "../components/NewsOfTheDay";
import ArticleCategories from "../components/ArticleCategories";
import './HomePage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <NewsOfTheDay />
      <ArticleCategories />
    </div>
  );
};

export default MainPage;
