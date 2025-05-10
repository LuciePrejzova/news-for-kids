import React from 'react'
import './ArticleElement.css'

const ArticleElement = ({article}) => {
  return (
    <div className='article-element'>
        <img src={article.image}></img>
        <h4>{article.title}</h4>
    </div>
  )
}

export default ArticleElement