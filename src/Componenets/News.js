import React from 'react'
import './News.css'

function News({news}) {
  return (
    <div className = 'newscard' >
        <img src={news.image_url} alt={news.title} />
        <h2>{news.title}</h2>
        <p>{news.description}</p>
    </div>
  )
}

export default News