import { GET_NEWS_START, GET_NEWS_SUCCESS, GET_NEWS_ERROR } from "../constant/news.constant";

export const getNewsStart = () =>({
    type: GET_NEWS_START,
})

export const getNewsSuccess = (data) =>({
    type: GET_NEWS_SUCCESS,
    payload: data

})

export const getNewsError  = (error) =>({
    type: GET_NEWS_ERROR,
    payload: error

})
