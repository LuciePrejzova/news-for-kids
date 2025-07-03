import React, { useEffect } from "react";
import "./NewsOfTheDay.css";
import { fetchArticles } from "../state/reducers/articlesSlice";
import { useSelector, useDispatch } from "react-redux";
import ImagePlaceholder from "./ImagePlaceholder";
// import { fetchLatestNews } from "../api/news";

const NewsOfTheDay = () => {
  // const [article, setArticle] = useState({});
  // const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.list);
  const status = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);

  // useEffect(() => {
  //   fetchLatestNews()
  //     .then((data) => {
  //       setArticle(data[0]);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching news: " + error);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchArticles());
      console.log(articles);
    }
    if (status === "failed") {
      console.error(error);
    }
  }, [dispatch, status]);

  if (status === "loading") return <p>Loading...</p>;
  if (articles.length < 1) return <p>No article found</p>;

  const pickNewOfTheDay = (articles) => {
    if (!articles || articles.length === 0) return null;

    const filtered = articles.filter((article) => {
      const hasValidImg = article.image !== null;
      const hasTitle = article.title !== null;
      const isCzech = article.lang === "ces";
      return hasValidImg && isCzech && hasTitle;
    });

    if (filtered.length === 0) return null;

    const sorted = filtered.sort((a, b) => b.wgt - a.wgt);

    return sorted[0];
  };

  const pickedNews = pickNewOfTheDay(articles);

  if (!pickedNews) return <p>No suitable article found</p>;

  return (
    <div className="news-of-the-day">
      <h2>News Of The Day</h2>
      {pickedNews.image ? (
        <img src={pickedNews.image} alt={pickedNews.title} />
      ) : (
        <ImagePlaceholder title={pickedNews.title} />
      )}
      <h3>{pickedNews.title}</h3>
    </div>
  );
};

export default NewsOfTheDay;
