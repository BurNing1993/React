import React, { Component } from 'react';
import './page.css';

class Page4 extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="col-sm-8  offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                    <div className="card page">
                        <div className="card-body">
                            <h5 className="card-title">项目经验</h5>
                            <div className="card-text">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">项目质量系统</h5>
                                        <div className="card-text">
                                           <p>2018/03 - 2018/08</p>
                                           <p>
                                        项目简介：本系统是公司的项目质量系统，主要分为开发度量，运维度量，生产率度量和KPI等模块，从各个角度展示项目的质量指标和项目组生产效率和质量。项目前端采用VUE+Element，后端采用SSM框架。
                                           </p>
                                </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">eSimple项目管理系统</h5>
                                        <div className="card-text">
                                           <p>2017/07 - 2017/12</p>
                                           <p>
                                           项目简介：本系统是对公司项目总览和管理系统，主要分为项目总览展示和项目管理模块，目的是方便统一查看项目进度，方便项目展示，使项目管理更加便捷，系统。项目前端采用JQueryEasyUI，后端采用SSM框架。
                                           </p>
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
