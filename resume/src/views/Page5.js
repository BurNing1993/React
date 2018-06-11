import React, { Component } from 'react';
import './page.css';

class Page5 extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-sm-8  offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                    <div className="card page">
                        <div className="card-body">
                            <h5 className="card-title">教育经历</h5>
                            <p className="card-text">
                                2012/9-2016/7 西南大学 Xx专业 本科
                    </p>
                            <p className="card-text">
                                2012/9 大学英语六级
                    </p>
                            <p className="card-text">
                                2012/9 全国计算机二级
                    </p>
                            <p className="card-text">
                                英语 读写能力 良好|听说能力 一般
                    </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Page5;
