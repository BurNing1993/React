import React, { Component } from 'react';
import './page.css';

class Page4 extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-sm-8  offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                    <div className="card page">
                        <div className="card-body">
                            <h5 className="card-title">项目经验</h5>
                            <div className="card-text">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">项目经验1</h5>
                                        <div className="card-text">
                                            项目经验1
                                            项目经验1
                                            项目经验1
                                </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">项目经验2</h5>
                                        <div className="card-text">
                                            项目经验2
                                            项目经验2
                                            项目经验2
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
export default Page4;
