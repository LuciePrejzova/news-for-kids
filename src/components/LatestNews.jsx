import React, {useEffect, useState} from 'react'
import { fetchLatestNews } from '../api/news'

const LatestNews = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);


     useEffect(()=> {
         fetchLatestNews()
         .then(setNews)
         .catch(setError)
     },[])
  

    console.log(news);

    if(error) return <p>Error: {error.message}</p>;
    // if (!news.length) return <p>Loading...</p>
    
  return (
    <div>
        <h1>Latest News</h1>
        <ul>
            {news.map((article, index) => {
                return <li key={article.id || index}>
                    <h2>{article.title}</h2>
                    <img src={article.image}/>
                    <p>{article.description}</p>
                    <a href={article.url} target='_blank'>Read more</a>
                    </li>
            })}
        </ul>
        </div>
  )
}

export default LatestNews