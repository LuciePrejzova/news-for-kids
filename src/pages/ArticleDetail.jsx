import React, { useEffect } from "react";
import "./ArticleDetail.css";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../state/reducers/articlesSlice";

const ArticleDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.list);
  const status = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);

useEffect(() => {
if (status === 'idle'){
  dispatch(fetchArticles());
}
},[dispatch,status])

if(status === 'loading') return <p>Loading...</p>
if(status === 'failed') return <p>Error: {error}</p>

const article = articles.find(a => a.uri === id);

if(!article) return <p>No article found</p>

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <img src={article.image} alt={article.title}/>
      <p>{article.body}</p>
      <Link to={article.url}>Read at the original source</Link>
      <Link to='/'>Go back</Link>
    </div>
  );
};

export default ArticleDetail;
