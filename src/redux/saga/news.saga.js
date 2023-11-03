import {put, takeLatest} from 'redux-saga/effects'
import {CATEGORY_NEWS_START, GET_NEWS_START} from "../constant/news.constant";
import { getNewsApi } from '../service/news.service';
import { categoryNewsSuccess, getNewsSuccess } from '../action/news.action';

function* getNews() {
    let data = yield getNewsApi();
    yield put(getNewsSuccess(data))
}

function* getCategoryNews({payload}) {
    let data = yield getNewsApi(payload);
    yield put(categoryNewsSuccess(data))
}


export function* news () {
    yield takeLatest(GET_NEWS_START, getNews)
    yield takeLatest(CATEGORY_NEWS_START, getCategoryNews)

}
