import React, { useRef } from "react";
import "./ArticlesRow.css";
import ArticleElement from "./ArticleElement";
import useUser from "../context/useUser";
import { useNavigate } from "react-router-dom";

const ArticlesRow = ({ category, articles }) => {
  const { user, addFavoriteCategory } = useUser();
  const scrollRef = useRef(); // Ref k samotnému scrolovatelnému divu
  const navigate = useNavigate();
  // console.log(
  //   category,
  //   articles.filter((a) => a.customCategories.includes(category))
  // );

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth; // scroll o velikost viditelné oblasti
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  //   const filtered = articles.filter(
  //   (article,index) => article.categories[index].label?.includes(category)
  // );
  const filtered = articles.filter(
    (article) =>
      article.customCategories &&
      article.customCategories.some(
        (cat) => cat.toLowerCase() === category.toLowerCase()
      )
  );
  console.log("→", category, filtered.length);

  if (!filtered.length) return null;

  const addToFavorite = (category) => {
  if (!user) {
    navigate("/login");
    return;
  }

  const usersArr = JSON.parse(localStorage.getItem('users') || '[]');
  const userIndex = usersArr.findIndex(u => u.email === user.email);

  if (userIndex !== -1) {
    const currentUser = usersArr[userIndex];

    if (!currentUser.favorites) {
      currentUser.favorites = [];
    }

    if (!currentUser.favorites.includes(category)) {
      currentUser.favorites.push(category);
      usersArr[userIndex] = currentUser;

      localStorage.setItem('users', JSON.stringify(usersArr));

      addFavoriteCategory(category);
    }
  }
};


  return (
    <div className="article-row-container">
      <div>
        <h3>{category.toUpperCase()}</h3>
        <button onClick={() => addToFavorite(category)}>
          {user?.favorites?.includes(category) ? "⭐" : "☆"}
        </button>
      </div>
      <div className="slider-container">
        <button className="arrow left" onClick={() => scroll("left")}>
          &lt;
        </button>

        <div className="article-row" ref={scrollRef}>
          {filtered.map((article) => (
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
