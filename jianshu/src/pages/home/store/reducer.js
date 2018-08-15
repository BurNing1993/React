import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articPage:1,
    showScroll:false
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANG_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            })
        case constants.ADD_HOME_LIST:
            // return state.set('articleList', state.get('articleList').concat(action.list))
            return state.merge({
                articleList:state.get('articleList').concat(action.list),
                articPage:action.page
            })
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show);

        default:
            return state;
    }
}