import React, { useState, useEffect } from "react";
import './news.css'


export default function News() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=PremierLeague&from=2023-03-11&sortBy=publishedAt&apiKey=37c7650b964f487d9ff51e5e3b3eb831')
      .then(res => res.json())
      .then((data) => setData(data.articles))
      .then(console.log(data))
  }, [])



  return (
    <div className="articles">

    {data.map((article) => (
      <div className="single-article">
        <h1>{article.title}</h1>
        <img className="article-img" src={article.urlToImage} alt="" />
      </div>
      ))}
      </div>
  )
}
