import React from "react";
import Navbar from "../components/Navbar";
import LatestNews from "../components/LatestNews";
import NewsOfTheDay from "../components/NewsOfTheDay";
import ArticleCategories from "../components/ArticleCategories";
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <Navbar />
      <NewsOfTheDay />
      <ArticleCategories />
    </div>
  );
};

export default MainPage;
