import React, { Component } from 'react';
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
// import Banner from '../../commonTools/Banner';
// import BackgroundImage from '../../../assets/img/event.jpg';
// import {
//     Link
// } from "react-router-dom";
import $ from 'jquery';
class Press extends Component {
    componentDidMount() {
        $(".swap-items:odd").addClass('reverse-items');
    }
    render() {
        let alt = "demo";
        return (

            <div className="page process">
                <Nav className="navbar navbar-expand-lg" />
                <section id="PressBanner" className="banner middle-content" style={{ backgroundImage: `url(${require('../../../assets/img/process-banner.png')})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="introText">
                                <h1><span className="text-color">How We Work:</span><br/>From Idea to Reality</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <section className="home-work" data-ui="light">
                    <div className="container">
                        <div className="row">
                            {/* odd */}

                            <div className="swap-items">
                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <img src={require('../../../assets/img/work/product-strategy.png')} alt={alt} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="content-block">
                                        <span className="counter-post">— 01 / 05</span>
                                        <h2>Product Strategy</h2>
                                        <p>Doing what’s never been done before is common practice at Rise Up Labs. We develop custom web applications by analyzing a wealth of research, defining business and audience goals, establishing a clear vision, and identifying success metrics. This makes our product strategy an intricate story — one that begins and ends with discovery.</p>
                                    </div>
                                </div>

                            </div>
                            {/* End Odd */}

                            {/* Even */}

                            <div className="swap-items">

                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <img src={require('../../../assets/img/work/product-design.png')} alt={alt} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="content-block">
                                        <span className="counter-post">— 02 / 05</span>
                                        <h2>Product Design</h2>
                                        <p>Product design is a strategy made tangible. It’s the purpose-driven unification of complex components into simple, elegant user experiences — digital tools that draw technology and people together.</p>

                                    </div>
                                </div>

                            </div>
                            {/* odd */}
                            <div className="swap-items">

                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <img src={require('../../../assets/img/work/development.png')} alt={alt} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="content-block">
                                        <span className="counter-post">— 03 / 05</span>
                                        <h2>Development</h2>
                                        <p>Product needs to work flawlessly every time, for every user, in myriad situations. Rise Up integrates engineering strategy at the outset of your project in order to assess the scope, technical requirements, approach, and feasibility. Doing this not only builds trust, but it also positions your custom software to prove value year after year.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Odd */}
                            {/* Even */}
                            <div className="swap-items">

                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <img src={require('../../../assets/img/work/testing-and-qa.png')} alt={alt} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="content-block">
                                        <span className="counter-post">— 04 / 05</span>
                                        <h2>Testing and QA</h2>
                                        <p>Rise Up Labs bleeding-edge web applications work flawlessly because we test relentlessly — for function, quality, and accuracy, from top to bottom, across all usage scenarios. Rigorous quality assurance throughout software development takes the tension out of launch day.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Even */}
                            {/* odd */}

                            <div className="swap-items">

                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <img src={require('../../../assets/img/work/release-and-support.png')} alt={alt} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="content-block">
                                        <span className="counter-post">— 05 / 05</span>
                                        <h2>Release and Support</h2>
                                        <p>Launch isn’t the end goal, it’s the start of the next phase of success. To help apply best practices and make the most of investments, Rise Up Labs provides a menu of support options.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Odd */}
                        </div>
                    </div>
                </section>
                <Footer />
            </div >
        )
    }
}

export default Press;