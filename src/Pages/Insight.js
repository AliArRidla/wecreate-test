import React, { useEffect, useState } from "react"
import {getArticleList, getArticleListContainer, searchArticle, getArticleHeadline} from "../Services/api"
import { useNavigate } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import axios from "axios"

function Insight() {
    const [allArticles, setAllArticles] = useState([])
    const [articlesContainer, setArticlesContainer] = useState([])
    const [articleHeadline, setArticleHeadline] = useState([])
    
    const navigate = useNavigate()
        const DetailsPage = (params) => {
            navigate(`/insight/${params}`)
        }
    
        useEffect(() => {
      getArticleList(1,9).then((result) => {
        setAllArticles(result)      
          
      })

      getArticleListContainer().then((result) => {
        setArticlesContainer(result)                    
      })

      getArticleHeadline().then((result) => {
        setArticleHeadline(result)                    
      })
  
    },[])
  
    const search = async (q) => {
      if (q.length > 3) {
        const query = await searchArticle(q)
        setAllArticles(query)      
      }    
    }
    
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


    const ArticleListContainer = () => {                
        return articlesContainer.map((article,i) => {
          const handleClick = (e) => {
              e.preventDefault();
              console.log('The link was clicked.');
              DetailsPage(article.publishedAt)
            }
          return (                    
            <div className="border border-start border-top-0 border-bottom-0 border-end-0 py-1 px-3" onClick={handleClick} >
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


     const handlePageClick = async (data) => {
        console.log(data.selected)
        let currentPage = data.selected +1
        const articles = await getArticleList(currentPage,9)
        setAllArticles(articles)
      }

      const ArticleHeadline = () => {                
        return articleHeadline.map((article,i) => {
          const handleClick = (e) => {
              e.preventDefault();
              console.log('The link was clicked.');
              DetailsPage(article.publishedAt)
            }
          return (                    
            <div className="border border-start-0 border-top-0 border-bottom border-end-0 " onClick={handleClick} >
                <div className="card h-100 border-0" key={i}>
                  <img src={article.urlToImage} className="card-image-headline" alt="..." />
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
      <div >          
        {/* body  */}
        <div className="container mt-5">
                <div className="row ">
                <div className="col-md-6">
                <ArticleHeadline />
                </div>
                <div className="col-md-6">
                    <div className="row row-cols-2 g-2 ">
                        <ArticleListContainer/>
                    </div>
                </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                    <div className="display-6 mb-4"> Featured Insights </div>
                    </div>
                    <div className="col-md-6">
                    <div className="row g-3 d-flex justify-content-end">
                    <div className="col-auto">
                        <label for="search" className="col-form-label">Search</label>
                    </div>
                    <div className="col-auto">
                        <input onChange={({target}) => search(target.value)} id="search" className="form-control" placeholder="search article" />
                    </div>            
                    </div>    
                    </div>                
                </div>        
              <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">              
                <ArticleList />                              
              </div>
              {/* paginate     */}
              <ReactPaginate 
              pageCount={20}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName ={'pagination justify-content-center'}
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              activeClassName="active"
              />
        </div>     
        {/* banner */}
        <div className="mt-5 py-5 text-white text-center " style={{backgroundColor: "#092474",height:"500px"}}>            
            <h1>Create better products with us</h1>
            <button className="btn btn-primary tombol primary-color my-4">
                Start A Project
            </button>                        
        </div>

      </div> 
    );    
}


export default Insight;
