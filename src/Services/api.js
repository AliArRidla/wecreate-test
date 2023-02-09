import axios from "axios"
//get data list
// export const getArticleList = async() =>{
//     const articles = await axios.get(`${process.env.REACT_APP_BASEURL}/everything?q=${process.env.REACT_APP_KEY}&apiKey=${process.env.REACT_APP_APIKEY}`)    
//     return articles.data.articles;
// }
export const getArticleList = async(currentPage,countPage) =>{
    const articles = await axios.get(`${process.env.REACT_APP_BASEURL}/everything?q=${process.env.REACT_APP_KEY}&apiKey=${process.env.REACT_APP_APIKEY}&pageSize=${countPage}&page=${currentPage}`)    
    // console.log(articles)
    return articles.data.articles;
}

//get data search
export const searchArticle = async (q) => {
    const search = await axios.get(`${process.env.REACT_APP_BASEURL}/everything?q=${q}&apiKey=${process.env.REACT_APP_APIKEY}`)
    return search.data.articles;
}

const pageSize = 4
//get data list 4
export const getArticleListContainer = async() =>{
    const articles = await axios.get(`${process.env.REACT_APP_BASEURL}/everything?q=${process.env.REACT_APP_KEY}&apiKey=${process.env.REACT_APP_APIKEY}&pageSize=${pageSize}`)    
    return articles.data.articles;
}


//get data list headline
export const getArticleHeadline = async() =>{
    const headline = await axios.get(`${process.env.REACT_APP_BASEURL}/everything?q=${process.env.REACT_APP_KEY}&apiKey=${process.env.REACT_APP_APIKEY}&pageSize=1`)    
    return headline.data.articles;
}