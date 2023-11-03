import React from 'react'
import { Link } from 'react-router-dom';

export default function NewsItem({data}) {
  return (
    <div className='col-sm-3 mt-4'>
      <div className="card">
        <img src={data.urlToImage} className="card-img-top" alt={data.title} />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
          <Link to={data.url} className="btn btn-primary" target='_blank'>Read more</Link>
        </div>
      </div>
    </div>
  )
}

