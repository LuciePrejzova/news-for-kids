import React, { useEffect } from "react";
import "./ArticleCategories.css";
import ArticlesRow from "./ArticlesRow";
// import { fetchLatestNews } from '../api/news'
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../state/reducers/articlesSlice";
import keywordsByCategory from "../keywordsByCategory";

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

const ArticleCategories = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.list);
  const status = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);
  // const [articles, setArticles] = useState([]);
  // const [category, setCategory] = useState("default");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchArticles());

      console.log(articles);
    }
    if (status === "failed") {
      console.error(error);
    }
  }, [dispatch, status]);

  // useEffect(() => {
  //   fetchLatestNews()
  //     .then((data) => {
  //       console.log("Data received", data);
  //       setArticles(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching articles:", error);
  //     });
  // }, []);

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
  const customCategories = categorizeArticle(article.title + " " + article.body);
  console.log(article.title, customCategories); // ➤ ZDE UVIDÍŠ CO SE PŘIŘADILO
  return {
    ...article,
    customCategories,
  };
});

  return (
    <div className="article-categories">
      {/* <h1>Article Categories</h1> */}
      {CHILD_FRIENDLY_CATEGORIES.map((category) => {
        // console.log(articles);
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
