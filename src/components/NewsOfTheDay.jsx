import React, { useEffect, useRef } from "react";
import "./NewsOfTheDay.css";
import imagePlaceholder from "../assets/teenage-news-1.png";
import imagePlaceholder2 from "../assets/teenage-news-2.png";
import { fetchArticles } from "../state/reducers/articlesSlice";
import { useSelector, useDispatch } from "react-redux";
// import { fetchLatestNews } from "../api/news";

const NewsOfTheDay = () => {
  // const [article, setArticle] = useState({});
  // const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.list);
  const status = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);

  const imageArr = [imagePlaceholder, imagePlaceholder2];
  const randomInt = useRef(Math.floor(Math.random() * 2));

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
      return hasValidImg && isCzech;
    });

    if (filtered.length === 0) return null;

    const sorted = filtered.sort((a, b) => b.wgt - a.wgt);

    return sorted[0];
  };

  const pickedNews = pickNewOfTheDay(articles);

  if(!pickedNews) return <p>No suitable article found</p>

  return (
    <div className="news-of-the-day">
      <h2>News Of The Day</h2>
      <img
        src={
          pickedNews.image ? pickedNews.image : imageArr[randomInt.current]
        }
        alt={pickedNews.title}
      />
      <h3>{pickedNews.title}</h3>
    </div>
  );
};

export default NewsOfTheDay;
