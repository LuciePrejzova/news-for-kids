import React, { useEffect } from "react";
import "./ArticleCategories.css";
import ArticlesRow from "./ArticlesRow";
// import { fetchLatestNews } from '../api/news'
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../state/reducers/articlesSlice";


const CATEGORIES = [
  "regional",
  "technology",
  "lifestyle",
  "business",
  "general",
  "programming",
  "science",
  "entertainment",
  "world",
  "sports",
  "finance",
  "academia",
  "politics",
  "health",
  "opinion",
  "food",
  "game",
];

const ArticleCategories = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.list);
  const status = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);
  // const [articles, setArticles] = useState([]);
  // const [category, setCategory] = useState("default");

  useEffect(()=>{
    if(status === 'idle'){
      dispatch(fetchArticles());
    }
    if(status === 'failed'){
      console.error(error);
    }
  },[dispatch, status])

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


  return (
    <div className='article-categories'>
      {/* <h1>Article Categories</h1> */}
      {CATEGORIES.map((category) => {
        return <ArticlesRow key={category} category={category} articles={articles}/>;
      })}
    </div>
  );
};

export default ArticleCategories;
