// import newsdata from '../newsdata'
import newsdata2 from "../newsdata2";

export async function fetchLatestNews() {
  // console.log(`${import.meta.env.VITE_API_BASE_URL}/latest-news`);
  // console.log(`${import.meta.env.VITE_API_BASE_URL}/article/getArticles`);

  //fetch data from Currents News API
  // const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/latest-news`, {
  //     headers: {
  //         'Authorization': import.meta.env.VITE_API_KEY,
  //         'Content-Type': 'application/json'
  //     }
  // })

  //   if (!response.ok) {
  //     throw new Error(`API error: ${response.status}`);
  //   }

  // const data = await response.json();
  // return data.news;

  //fetch data from newsapi.ai
  //         const response = await fetch(`https://eventregistry.org/api/v1/article/getArticles?apiKey=${import.meta.env.VITE_API_KEY}&lang=ces&resultType=articles&includeArticleCategories=true
  // `);

  //   if (!response.ok) {
  //     throw new Error(`API error: ${response.status}`);
  //   }

  //   const data = await response.json();
  //   return data.articles.results;

  //fetch data from temporary static file
  const data = newsdata2;
  return data;
}
