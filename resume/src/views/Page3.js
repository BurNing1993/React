import React, { Component } from 'react';
import './page.css';

class Page3 extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-sm-8  offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                    <div className="card page">
                        <div className="card-body">
                            <h5 className="card-title">工作经验</h5>
                            <p className="card-text">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">工作经验1</h5>
                                        <p className="card-text">
                                            工作经验1
                                            工作经验1
                                            工作经验1
                                </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">工作经验2</h5>
                                        <p className="card-text">
                                            工作经验2
                                            工作经验2
                                            工作经验2
                                </p>
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Page3;
