import React, { useState } from 'react'
import axios from 'axios'
import Pag from '../Pagination/Pag'
import { useEffect} from 'react'
import './Newscontnet.css'
export default function Newscontent({searchTerm}) {
    const [datas,setData]=useState([])
    const[page,setpage]=useState(1)
    const[totalResult,setTotalresult]=useState(0)
    const pageSize=12;
    const totalPages=Math.min(Math.ceil(totalResult/pageSize),100)
   
    
    useEffect(() => {
      const callApi = async () => {
        let query = searchTerm || 'Nepal';  // If no search term, use 'latest' as the default query
  
        console.log('Calling API with search term:', query);
  
        try {
          const response = await axios.get(
              `https://newsapi.org/v2/everything?q=${query}&page=${page}&pageSize=${pageSize}&apiKey=cc41578833bc4e40b0945cc22f692e28`
          );
  
          const articlesWithImages = response.data.articles.filter(
            (article) =>
              article.urlToImage &&
              typeof article.urlToImage === 'string' &&
              article.urlToImage.trim() !== ''
          );
         setTotalresult(response.data.totalResults)
  
          setData(articlesWithImages); // Update state with articles that have images
        } catch (error) {
          console.error('Error fetching data:', error); // Log any errors during the API call
        }
      };
  
      callApi(); // Trigger the API call
    }, [searchTerm,page]);
  

  return (
    <>
 
   <div className="main-content">
  {datas.map((list, index) => (
  <a href={list.url} target="_blank" rel="noopener noreferrer" key={index}>
    <div className="news-main" key={index}>
      <img src={list.urlToImage} alt={`News ${index}`} />
      <div className="title">
        <p>{list.title}</p>
      </div>
    </div>
  </a>))}
</div>
<Pag currentPage={page} totalPages={totalPages} onPagechange={setpage} pageSize={12}></Pag>

</>
    
  )
}
