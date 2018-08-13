import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style'
import { CSSTransition } from 'react-transition-group';

class Header extends Component {
    render() {
        return (
            <div>
                <HeaderWrapper>
                    <Logo />
                    <Nav>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载APP</NavItem>
                        <NavItem className='right'>登录</NavItem>
                        {/* <NavItem className='right'>Aa</NavItem> */}
                        <NavItem className='right'>
                            <i className='iconfont'>&#xe904;</i>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                timeout={200}
                                in={this.props.focused}
                                classNames="slide"
                            >   
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            ></NavSearch>
                            </CSSTransition>
                            <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe601;</i>
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Button className='writting'>
                            <i className='iconfont'>&#xe608;</i>
                            写文章</Button>
                        <Button className='reg'>注册</Button>
                    </Addition>
                </HeaderWrapper>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        focused:state.focused
    }
}

const mapDispathToProps=(dispatch)=>{
    return{
        handleInputFocus(){
            const action={
                type:'search_focus'
            };
            dispatch(action);
        },
        handleInputBlur(){
            const action={
                type:'search_blur'
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);
