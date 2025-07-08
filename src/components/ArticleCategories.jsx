import React, { useEffect } from "react";
import "./ArticleCategories.css";
import ArticlesRow from "./ArticlesRow";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../state/reducers/articlesSlice";
import keywordsByCategory from "../keywordsByCategory";
import useUser from "../context/useUser";

const CHILD_FRIENDLY_CATEGORIES = [
  "příroda",
  "věda",
  "technologie",
  "sport",
  "zábava",
  "zdraví",
  "cestování",
  "ostatní",
];

const ArticleCategories = ({
  categoriesToShow = CHILD_FRIENDLY_CATEGORIES,
}) => {
  const { user } = useUser();
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.list);
  const status = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchArticles());

      console.log(articles);
    }
    if (status === "failed") {
      console.error(error);
    }
  }, [dispatch, status]);

  const categorizeArticle = (articleText) => {
    const categories = [];

    for (const [category, keywords] of Object.entries(keywordsByCategory)) {
      for (const keyword of keywords) {
        if (articleText.toLowerCase().includes(keyword.toLowerCase())) {
          categories.push(category);
          break;
        }
      }
    }

    if (categories.length === 0) {
      categories.push("ostatní");
    }

    return categories;
  };

  const enrichedArticles = articles.map((article) => {
    const customCategories = categorizeArticle(
      article.title + " " + article.body
    );
    console.log(article.title, customCategories);
    return {
      ...article,
      customCategories,
    };
  });

  return (
    <div className="article-categories">
      {!user
        ? CHILD_FRIENDLY_CATEGORIES.map((category) => {
            return (
              <ArticlesRow
                key={category}
                category={category}
                articles={enrichedArticles}
              />
            );
          })
        : categoriesToShow.map((category) => {
            return (
              <ArticlesRow
                key={category}
                category={category}
                articles={enrichedArticles}
              />
            );
          })}
    </div>
  );
};

export default ArticleCategories;
