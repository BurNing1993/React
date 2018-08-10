import React, { Component } from 'react';
import './page.css';

class Page3 extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="col-sm-8  offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                    <div className="card page">
                        <div className="card-body">
                            <h5 className="card-title">工作经验</h5>
                            <div className="card-text">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">成都鹭升科技有限公司</h5>
                                        <div className="card-text">
                                        <p>2018/03 - 2018/09 (6个月)</p>
                                        <p>JAVA开发工程师</p>
                                        <p>主要是从事JAVA WEB开发，后台数据库的设计以及系统维护。</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">成都谢尔科技有限公司</h5>
                                        <div className="card-text">
                                        <p>2016/03 - 2018/01 (1年10个月)</p>
                                        <p>JAVA后台开发工程师</p>
                                        <p>主要是从事JAVA WEB开发，后台数据库的设计以及系统维护。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Page3;
