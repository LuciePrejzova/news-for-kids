import React, {useEffect, useState} from 'react'
import { fetchLatestNews } from '../api/news'

const LatestNews = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);

   try {
     useEffect(()=> {
         fetchLatestNews()
         .then(setNews)
         .then(console.log(news))
         .catch(setError)
     },[])
   } catch (error) {
    console.log(error)
   }

    console.log(news);

    if(error) return <p>Error: {error.message}</p>;
    if (!news.length) return <p>Loading...</p>
    
  return (
    <div>LatestNews</div>
  )
}

export default LatestNews