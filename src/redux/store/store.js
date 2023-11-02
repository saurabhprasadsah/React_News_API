import { configureStore } from "@reduxjs/toolkit";
import { NewsReducer } from "../reducer/news.reducer";
import createSagaMiddleware from "redux-saga";
import { news } from "../saga/news.saga";

const SagaMiddleware = createSagaMiddleware();


 const store = configureStore({

    reducer:NewsReducer,
    middleware: [SagaMiddleware],
    devTools: process.env.NODE_ENV === 'development' ? true : false

})


SagaMiddleware.run(news)

export default store;