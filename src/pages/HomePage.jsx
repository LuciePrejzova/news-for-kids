import NewsOfTheDay from "../components/NewsOfTheDay";
import ArticleCategories from "../components/ArticleCategories";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="main-page">
      <NewsOfTheDay />
      <ArticleCategories />
    </div>
  );
};

export default HomePage;
