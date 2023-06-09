import React, { useState, useEffect } from "react";
import './news.css'


export default function News() {

  const [data, setData] = useState([]);

  
  const twoWeeksAgo = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000 );

  const formattedDate = twoWeeksAgo.toISOString().split('T')[0];


  
  
  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=PremierLeague&from=${formattedDate}&sortBy=publishedAt&language=en&apiKey=37c7650b964f487d9ff51e5e3b3eb831`)
    .then(res => res.json())
    .then((data) => setData(data.articles))
    .then(console.log(data))
  }, [])
  
  
  
  return (
    <div className="articles">

    {data.map((article) => (
      <div onClick={() => window.location.replace(article.url)} key={article.url} className="single-article">
        <h1>{article.title}</h1>
        <img className="article-img" src={article.urlToImage} />
        <div className="sources">
          <p>Published at: {new Date(article.publishedAt).toDateString()}</p>
          <p>Source: {article.source.name} </p>
        </div>
      </div>
      ))}
      </div>
  )
}
