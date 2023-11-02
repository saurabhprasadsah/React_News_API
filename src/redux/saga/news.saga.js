import {put, takeLatest} from 'redux-saga/effects'
import { GET_NEWS_START } from "../constant/news.constant";
import { getNewsApi } from '../service/news.service';
import { getNewsSuccess } from '../action/news.action' ;


function* getNews(){

    let data =yield getNewsApi();
    yield put(getNewsSuccess(data));
}

export function* news(){

    yield takeLatest(GET_NEWS_START, getNews)

}
