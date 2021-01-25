import {call,takeLatest,put} from 'redux-saga/effects';
import {countriesActionTypes as ActionTypes} from '../types/ActionTypes';
import {fetchCountriesResult} from '../actions/countries';
import {fetch_countries_api} from '../api/webApi';

function* fetchCountriesSaga(action){
    try{
        //api gelcek
        const {searchQuery}=action;
        const response=yield  call(fetch_countries_api,searchQuery);
        yield put(fetchCountriesResult(false,response.data));

    }catch (e){
        //error listesi gelecek
        yield put(true)
    }
}
export  default [
    takeLatest(ActionTypes.fetch_countries,fetchCountriesSaga),
]
