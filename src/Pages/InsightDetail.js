import React,{useEffect,useState} from "react";
import {getArticleList} from "../Services/api"
import { useParams,useNavigate} from "react-router-dom";

function InsightDetail(params) {
    const {newsItemPublishedAt} = useParams();    
    const [articlesDetail, setArticlesDetail] = useState([])
    const [allArticles, setAllArticles] = useState([])
    
    const navigate = useNavigate()
        const DetailsPage = (params) => {
            navigate(`/insight/${params}`)
        }

    useEffect(() => {

       getArticleList().then((result) => {
            setArticlesDetail(result)                
          })

          getArticleList(1,3).then((result) => {
            setAllArticles(result)                
          })
    },[])
    
    const ArticleList = () => {                
        return allArticles.map((article,i) => {
          const handleClick = (e) => {
              e.preventDefault();
              console.log('The link was clicked.');
              DetailsPage(article.publishedAt)
            }
          return (                    
            <div className="border border-start border-top-0 border-bottom-0 border-end-0 py-5 px-3" onClick={handleClick} >
                <div className="card h-100 border-0" key={i}>
                  <img src={article.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body">      
                      <p className="card-text">
                        <a href="#" className="stretched-link text-primary">{article.source.name}</a>
                      </p>
    
                    <h5 className="card-title text-start mt-3">{article.title}</h5>
                    {/* <p className="card-text">{article.description}</p> */}
                     <p className="card-text">{article.publishedAt}</p>
                  </div>
                </div>
            </div>
          )
        })
      }

    return (        
<div className="container" >
    {articlesDetail.map((article) => {
        if (article.publishedAt == newsItemPublishedAt) {                     
            return <div className="col-md-8">
                <p className="card-text mt-5 pt-5">
                    <a href="#" className="stretched-link text-primary">{article.source.name}</a>
                </p>                
                <h5 className="card-title mt-3">{article.title}</h5>
                <p className="card-text">{article.publishedAt}</p>
                <button className="btn btn-primary tombol primary-color my-4">
                    Download PDF
                </button> <br />
                <img src={article.urlToImage} className="card-image" alt="..." />
                <h5 className="card-title mt-3">{article.title}</h5>
                <p className="card-text ">{article.content}</p>                
            </div>
            
        }
    })}
    <div className="col-md-12">
        {/* <div className="row row-cols-2 g-2"> */}

        {/* </div> */}
        <div className="row mt-5">
            <div className="col-md-6">
            <div className="display-6 mb-4"> Related Articles </div>
            </div>                   
        </div> 
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">              
                <ArticleList />                              
        </div>
    </div>
</div>

    )
}

export default InsightDetail;