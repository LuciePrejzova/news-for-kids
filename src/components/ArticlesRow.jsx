import React, { useRef } from "react";
import "./ArticlesRow.css";
import ArticleElement from "./ArticleElement";
import useUser from "../context/useUser";
import { useNavigate } from "react-router-dom";

const ArticlesRow = ({ category, articles }) => {
  const { user, addFavoriteCategory, removeFavoriteCategory } = useUser();
  const scrollRef = useRef();
  const navigate = useNavigate();

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const filtered = articles.filter(
    (article) =>
      article.customCategories &&
      article.customCategories.some(
        (cat) => cat.toLowerCase() === category.toLowerCase()
      )
  );

  if (!filtered.length) return null;

  const handleFavorite = (category) => {
    if (!user) {
      navigate("/login");
      return;
    }

    const usersArr = JSON.parse(localStorage.getItem("users") || "[]");
    const userIndex = usersArr.findIndex((u) => u.email === user.email);

    if (userIndex === -1) return;

    const currentUser = usersArr[userIndex];
    currentUser.favorites = currentUser.favorites || [];

    const isFavorite = currentUser.favorites.includes(category);

    if (isFavorite) {
      currentUser.favorites = currentUser.favorites.filter(
        (cat) => cat !== category
      );
      removeFavoriteCategory(category);
    } else {
      currentUser.favorites.push(category);
      addFavoriteCategory(category);
    }

    usersArr[userIndex] = currentUser;
    localStorage.setItem("users", JSON.stringify(usersArr));
  };

  // Create preview list for non-logged-in users
  const previewArticle = { isPreviewPlaceholder: true, uri: "login-prompt" };
  const articlesToRender = !user
    ? [...filtered.slice(0, 3), previewArticle]
    : filtered;

  return (
    <div className="article-row-container">
      <div className="category-header">
        <h3>{category.toUpperCase()}</h3>
        <button
          className="star"
          onClick={() => handleFavorite(category)}
          title={
            user?.favorites?.includes(category)
              ? "Remove from favorites"
              : "Add to favorites"
          }
        >
          {user?.favorites?.includes(category) ? "★" : "☆"}
        </button>
      </div>

      <div className="slider-container">
        <button className="arrow left" onClick={() => scroll("left")}>
          &lt;
        </button>

        <div className="article-row" ref={scrollRef}>
          {articlesToRender.map((article) => (
            <ArticleElement key={article.uri} article={article} />
          ))}
        </div>

        <button className="arrow right" onClick={() => scroll("right")}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ArticlesRow;
