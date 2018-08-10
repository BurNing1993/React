import React, { Component } from 'react';
import './page.css';

class Page6 extends Component {
    render() {
        return (<div className="container-fluid">
            <div className="col-sm-8  offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <div className="card page">
                    <div className="card-body">
                        <h5 className="card-title">专业技能</h5>
                        <div className="card page">
                            <div className="card-body">
                                <h5 className="card-title">后端</h5>
                                <span>SpringBoot</span><div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                                <span>Spring</span><div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                                </div>
                                <span>mybatis</span><div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                                </div>
                                <span>MySql</span><div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">前端</h5>
                                <span>VUE</span><div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                                <span>JQuery</span><div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                                <span>React</span><div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                                </div>
                            </div>
                            <div className="card-body">
                                <span>微信小程序</span><div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
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
export default Page6;
