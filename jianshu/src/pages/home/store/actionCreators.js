import axios from 'axios';
import * as constants from './constants';
import {fromJS} from 'immutable';

const changeHomeData = (data) => ({
    type: constants.CHANG_HOME_DATA,
    topicList: data.topicList,
    articleList: data.articleList,
    recommendList: data.recommendList
})

const addHomeList=(list,page)=>({
    type: constants.ADD_HOME_LIST,
    list:fromJS(list),
    page
})

export const getHomeData = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
            .then((res) => {
                const data = res.data;
                dispatch(changeHomeData(data));
            }).catch((err) => {
                console.log(err)
            })
    }
}

export const getMoreList=(page)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json?page='+page)
        .then((res) => {
            const list = res.data;
            dispatch(addHomeList(list,page+1));
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const toggleTopShow=(show)=>({
    type:constants.TOGGLE_SCROLL_TOP,
    show
})