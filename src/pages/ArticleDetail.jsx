import React from "react";
import "./ArticleDetail.css";
import { useParams, Link } from "react-router-dom";

const ArticleDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Article Detail for ID: {id}</h2>
      <Link to='/'>Go back</Link>
    </div>
  );
};

export default ArticleDetail;
