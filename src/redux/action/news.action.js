import { CATEGORY_NEWS_ERROR, CATEGORY_NEWS_START, CATEGORY_NEWS_SUCCESS, GET_NEWS_ERROR, GET_NEWS_START, GET_NEWS_SUCCESS } from "../constant/news.constant";

// get all news
export const getNewsStart = () => ({
    type: GET_NEWS_START
})

export const getNewsSuccess = (data) => ({
    type: GET_NEWS_SUCCESS,
    payload: data
})

export const getNewsError = (error) => ({
    type: GET_NEWS_ERROR,
    payload: error
})

// get categories
export const categoryNewsStart = (name) => ({
    type: CATEGORY_NEWS_START,
    payload: name
})

export const categoryNewsSuccess = (data) => ({
    type: CATEGORY_NEWS_SUCCESS,
    payload: data
})

export const categoryNewsError = (error) => ({
    type: CATEGORY_NEWS_ERROR,
    payload: error
})