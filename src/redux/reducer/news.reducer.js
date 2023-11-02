const initialstate = {

    news: [],
    categoryNews: [],
    category: [
        "war",
        "goverment",
        "politics",
        "education",
        "health",
        "environment",
        "economy",
        "fashion",
        "entertainment",
        "sport"
    ]
}

export const NewsReducer = (state = initialstate, action) => {
    switch (action.type) {
        // eslint-disable-next-line no-undef
        case GET_NEWS_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                news: [...action.payload]

            }

        default:
            return state;
    }
}