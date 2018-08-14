import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    TopicWrapper,
    TopicItem
}from '../style'

class Recommend extends Component {
   render() {
   return (
            <TopicWrapper>
                <TopicItem>
                    <img src="//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt=""/>
                    
                    旅行
                </TopicItem>
            </TopicWrapper>
        );
    }
 }
const mapStateToProps = (state) => {
return {

    }
}
const mapDispathToProps = (dispatch) => {
    return {

    }
}
 export default connect(mapStateToProps, mapDispathToProps)(Recommend);
