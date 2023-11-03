// import React, { useEffect } from 'react'
// import NewsItem from '../components/NewsItem'
// import { useDispatch, useSelector } from 'react-redux'
// import { getNewsStart } from '../redux/action/news.action';

// export default function Home() {
//   const news = useSelector(state => state.news);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getNewsStart())

//   }, [dispatch])



//   return (
//     <div className="container">
//       <div className="row">
//         {
//           news.length > 0 && news.map((n, i) => (
//             <NewsItem key={i} />
//           ))
//         }
//       </div>

//     </div>

//   )
// }



import React, { useEffect } from 'react'
import NewsItem from '../components/NewsItem'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsStart } from '../redux/action/news.action';

export default function Home() {
  const news = useSelector(state => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsStart())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="container">
        <div className="row">
            {
                news.length > 0 && news.map((n,i) => (
                    <NewsItem data={n} key={i}/>
                ))
            }
        </div>
      </div>
  )
}
