import React, { useEffect } from 'react'
import NewsItem from '../components/NewsItem'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { categoryNewsStart } from '../redux/action/news.action';

export default function Category() {
    let { name } = useParams();

    const categoryNews = useSelector(state => state.categoryNews);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categoryNewsStart(name))
    }, [categoryNews.length, name])
    return (
        <div className="container">
            <div className="row">
                {
                    categoryNews.length > 0 && categoryNews.map((n,i) => (
                        <NewsItem data={n} key={i} />
                    ))
                }
            </div>
        </div>
    )
}
