import { fromJS } from 'immutable';
// import * as constants from './constants';

const defaultState = fromJS({
    topicList:[
        {
            id:1,
            title:'旅行',
            imgUrl:'//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        },
        {
            id:2,
            title:'旅行2',
            imgUrl:'//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        }
    ]
})

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}