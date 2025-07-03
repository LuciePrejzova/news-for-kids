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
          // const response = await fetch(`https://eventregistry.org/api/v1/article/getArticles?apiKey=${import.meta.env.VITE_API_KEY}&lang=ces&resultType=articles&includeArticleCategories=true`);
    //       const response = await fetch(`https://eventregistry.org/api/v1/article/getArticles?apiKey=${import.meta.env.VITE_API_KEY}&query=%7B%22%24query%22%3A%7B%22%24and%22%3A%5B%7B%22%24or%22%3A%5B%7B%22categoryUri%22%3A%22dmoz%2FHealth%22%7D%2C%7B%22categoryUri%22%3A%22news%2FHealth%22%7D%2C%7B%22categoryUri%22%3A%22news%2FTechnology%22%7D%2C%7B%22categoryUri%22%3A%22dmoz%2FScience%22%7D%2C%7B%22categoryUri%22%3A%22news%2FScience%22%7D%2C%7B%22categoryUri%22%3A%22news%2FArts_and_Entertainment%22%7D%2C%7B%22categoryUri%22%3A%22dmoz%2FGames%22%7D%2C%7B%22categoryUri%22%3A%22news%2FEnvironment%22%7D%2C%7B%22categoryUri%22%3A%22news%2FSports%22%7D%2C%7B%22categoryUri%22%3A%22dmoz%2FSports%22%7D%2C%7B%22categoryUri%22%3A%22dmoz%2FComputers%22%7D%2C%7B%22categoryUri%22%3A%22dmoz%2FArts%22%7D%5D%7D%2C%7B%22lang%22%3A%22ces%22%7D%5D%7D%2C%22%24filter%22%3A%7B%22forceMaxDataTimeWindow%22%3A%2231%22%2C%22dataType%22%3A%5B%22news%22%2C%22blog%22%5D%7D%7D&resultType=articles&articlesSortBy=date`);


    // if (!response.ok) {
    //   throw new Error(`API error: ${response.status}`);
    // }

    // const data = await response.json();
    // console.log(data.articles.results);
    // return data.articles.results;

  //fetch data from temporary static file
  const data = newsdata2;
  return data;
}
