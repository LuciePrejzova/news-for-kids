export async function fetchLatestNews(){
    console.log(`${import.meta.env.VITE_API_BASE_URL}/latest-news`);

    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/latest-news`, {
        headers: {
            'Authorization': import.meta.env.VITE_API_KEY,
            'Content-Type': 'application/json'
        }
    })

    if(!response.ok){
        throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
}