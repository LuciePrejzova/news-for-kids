import React from 'react'
import './ArticleElement.css'

const ArticleElement = ({article}) => {
  return (
    <div>
        <img src={article.image}></img>
        <h3>{article.title}</h3>
    </div>
  )
}

export default ArticleElement