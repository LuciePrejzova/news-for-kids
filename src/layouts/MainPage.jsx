import React from "react";
import Navbar from "../components/Navbar";
import LatestNews from "../components/LatestNews";
import NewsOfTheDay from "../components/NewsOfTheDay";
import ArticleCategories from "../components/ArticleCategories";

const MainPage = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <Navbar />
      <NewsOfTheDay />
      <ArticleCategories />
    </div>
  );
};

export default MainPage;
