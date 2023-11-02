import React, { useEffect } from 'react'
import NewsItem from '../components/NewsItem'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsStart } from '../redux/action/news.action';

export default function Home() {
   const news =  useSelector(state => state.news);
   const dispatch = useDispatch();
   useEffect(()=>{

    dispatch(getNewsStart())
    
   }, [] )


  return (
    <div className="container">
      <div className="row">
        {
          news.length > 0 && news.map((n,i) =>  (
            <NewsItem key={i}/>
          ))
        }
      </div>
      
    </div>

  )
}
