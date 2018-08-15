import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'

class Home extends PureComponent {
    handleScrollTop() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <div>
                <HomeWrapper>
                    <HomeLeft>
                        <img className='banner-pic' src="//upload.jianshu.io/admin_banners/web_images/4369/0cc77fa3ef12b099ba0237da2616c87cba0f58ae.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
                        <Topic />
                        <List />
                    </HomeLeft>
                    <HomeRight>
                        <Recommend />
                        <Writer />
                    </HomeRight>
                    {
                        this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null
                    }
                </HomeWrapper>
            </div>
        );
    }
    componentDidMount() {
        this.props.getHomeData();
        this.bindEvents();
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispathToProps = (dispatch) => ({
    getHomeData() {
        dispatch(actionCreators.getHomeData());
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop>400){
            dispatch(actionCreators.toggleTopShow(true));
        }else{
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
})
export default connect(mapStateToProps, mapDispathToProps)(Home);
