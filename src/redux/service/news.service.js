
export const getNewsApi = async(query = 'all') =>{
    let response = await fetch (`https://newsapi.org/v2/everything?q=${query}&apiKey=ed567a83e8684243843b28a44fe11950`)
    let data= await response.json();

    return data.articles;
}