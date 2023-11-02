const initialstate ={
    news: [],
    categoryNews: [],
    category :[
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
 
        default:
            return state;
    }
}