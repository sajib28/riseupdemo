import React, { Component } from 'react'
import Nav from '../commonTools/Nav';
import Footer from '../commonTools/Footer';
import Banner from '../commonTools/Banner';
import BackgroundImage from '../../assets/img/event.jpg';

import apps1 from '../../assets/img/Valrhona-Chocolate.jpg';
import apps2 from '../../assets/img/rent-lion-image-2.jpg';
export default class Apps extends Component {
    render() {
        return (
            <div className="app-details">
                <Nav />
                <Banner id="careerBanner" backgroundImage={BackgroundImage} />
                <section className="top-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 order-lg-2">
                                <div className="list-box">
                                    <div className="list-box-inner">
                                        <ul className="list-unstyled">
                                            <li><a href="/">ios</a></li>
                                            <li><a href="/">Android</a></li>
                                            <li><a href="/">Windows Mobile</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 order-lg-1">
                                <div className="content-padding">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nulla tempore molestias laboriosam enim cum qui quos praesentium aliquid earum dolor vitae laudantium corporis veniam iste voluptatum quis magnam et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum</p>
                                    <p>nulla tempore molestias laboriosam enim cum qui quos praesentium aliquid earum dolor vitae laudantium corporis veniam iste voluptatum quis magnam et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nulla tempore molestias laboriosam enim cum qui quos praesentium aliquid earum dolor vitae laudantium corporis veniam iste voluptatum quis magnam et!</p>
                                    <p>nulla tempore molestias laboriosam enim cum qui quos praesentium aliquid earum dolor vitae laudantium corporis veniam iste voluptatum quis magnam et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nulla tempore molestias laboriosam enim cum qui quos praesentium aliquid earum dolor vitae laudantium corporis veniam iste voluptatum quis magnam et!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="app-development">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2>Lorem ipsum dolor sit amet</h2>
                                <ul className="list-unstyled">
                                    <li><a href="/">ios</a></li>
                                    <li><a href="/">Android</a></li>
                                    <li><a href="/">Windows Mobile</a></li>
                                    <li><a href="/">ios</a></li>
                                    <li><a href="/">Android</a></li>
                                    <li><a href="/">Windows Mobile</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="double-img">
                                    <img className="top-img" src={apps1} alt="" />
                                    <img className="bottom-img" src={apps2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <div className="title text-center">
                                        <h2 className="text-center">Some of our<span className="red-text">Apps</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container app-list">
                        <div className="row">
                            <div className="items">
                                <div className="col-lg-8">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${apps1})` }}>

                                        </div>
                                        <div className="item-body">

                                            <p>A tool to simplify the lives of landlords, property managers and tenants. It allows tenants to make mobile rent payments; send messages; store important documents; and make maintenance requests.</p>
                                            <a href="/" className="cus-btn">View Apss</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${apps2})` }}>

                                        </div>
                                        <div className="item-body">
                                            <p>A tool to simplify the lives of landlords, property managers and tenants. It allows tenants to make mobile rent payments; send messages; store important documents; and make maintenance requests.</p>
                                            <a href="/" className="cus-btn">View Apss</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="col-lg-8">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${apps1})` }}>

                                        </div>
                                        <div className="item-body">

                                            <p>A tool to simplify the lives of landlords, property managers and tenants. It allows tenants to make mobile rent payments; send messages; store important documents; and make maintenance requests.</p>
                                            <a href="/" className="cus-btn">View Apss</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${apps2})` }}>

                                        </div>
                                        <div className="item-body">
                                            <p>A tool to simplify the lives of landlords, property managers and tenants. It allows tenants to make mobile rent payments; send messages; store important documents; and make maintenance requests.</p>
                                            <a href="/" className="cus-btn">View Apss</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="col-lg-8">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${apps1})` }}>

                                        </div>
                                        <div className="item-body">

                                            <p>A tool to simplify the lives of landlords, property managers and tenants. It allows tenants to make mobile rent payments; send messages; store important documents; and make maintenance requests.</p>
                                            <a href="/" className="cus-btn">View Apss</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${apps2})` }}>

                                        </div>
                                        <div className="item-body">
                                            <p>A tool to simplify the lives of landlords, property managers and tenants. It allows tenants to make mobile rent payments; send messages; store important documents; and make maintenance requests.</p>
                                            <a href="/" className="cus-btn">View Apss</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="col-lg-8">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${apps1})` }}>

                                        </div>
                                        <div className="item-body">

                                            <p>A tool to simplify the lives of landlords, property managers and tenants. It allows tenants to make mobile rent payments; send messages; store important documents; and make maintenance requests.</p>
                                            <a href="/" className="cus-btn">View Apss</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${apps2})` }}>

                                        </div>
                                        <div className="item-body">
                                            <p>A tool to simplify the lives of landlords, property managers and tenants. It allows tenants to make mobile rent payments; send messages; store important documents; and make maintenance requests.</p>
                                            <a href="/" className="cus-btn">View Apss</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div >
        )
    }
}
