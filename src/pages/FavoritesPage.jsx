import "./FavoritesPage.css";
import useUser from "../context/useUser";
import { useNavigate } from "react-router-dom";
import ArticleCategories from "../components/ArticleCategories";

const FavoritesPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  return (
    <div>
      {!user && navigate("/login")}
      <h1>Oblíbené kategorie</h1>
      <ArticleCategories categoriesToShow={user.favorites} />
    </div>
  );
};

export default FavoritesPage;
