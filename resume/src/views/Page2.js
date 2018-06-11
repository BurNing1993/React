import React, { Component } from 'react';
import './page.css';

class Page2 extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-sm-8  offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                    <div className="card page">
                        <img className="card-img-top" src="http://placehold.it/500x230" alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">
                                伍大洪
                    </h5>
                            <table className="table table-hover">
                                <tbody>
                                    <tr>
                                        <td >
                                            <i className="fa fa-male" aria-hidden="true"></i>
                                            性别：
                                    </td>
                                        <td >
                                            男
                                </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i className="fa fa-birthday-cake" aria-hidden="true"></i>
                                            出生
                                </td>
                                        <td>
                                            1993/9
                                </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i className="fa fa-school" aria-hidden="true"></i>
                                            毕业院校
                                </td>
                                        <td>
                                            西南大学
                                </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                                            学历
                                </td>
                                        <td>
                                            本科
                                </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i className="fa fa-mobile-alt" aria-hidden="true"></i>
                                            手机
                                </td>
                                        <td>
                                            110
                                </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                            邮箱
                                </td>
                                        <td>
                                            110@qq.com
                                </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i className="fa fa-github" aria-hidden="true"></i>
                                            Github
                                </td>
                                        <td>
                                            <a href="">@QQQ</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Page2;
