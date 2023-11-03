import { CATEGORY_NEWS_SUCCESS, GET_NEWS_SUCCESS } from "../constant/news.constant";

const initialstate = {
    news: [],
    categoryNews: [],
    category: [

        "war",
        "goverment",
        "politics",
        "education",
        "Health",
        "environment",
        "economy",
        "fashion",
        "entertainment",
        "sports"

    ]
}

export const NewsReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_NEWS_SUCCESS: 

            return {
                ...state,
                news: [...action.payload]
            }
        case CATEGORY_NEWS_SUCCESS: 
            return {
                ...state,
                categoryNews: [...action.payload]
            }
    
        default:
            return state;
    }
}
