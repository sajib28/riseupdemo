import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import Nav from '../../commonTools/Nav';
import Banner from '../../commonTools/Banner';
import BackgroundImage from '../../../assets/img/event.jpg';
import riseUpAdv from '../../../assets/img/Valrhona-Chocolate.jpg';
import apps1 from '../../../assets/img/Valrhona-Chocolate.jpg';
import apps2 from '../../../assets/img/rent-lion-image-2.jpg';
import work from '../../../assets/img/work-logo.jpg';
import workGoogle from '../../../assets/img/google-logo.png';
import Footer from '../../commonTools/Footer';
import CountUp from 'react-countup';
class Iets extends Component {

    render() {
        return (

            <div className="page iets">
                <Nav />
                <Banner id="aboutBanner" backgroundImage={BackgroundImage} />
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
                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="content-padding">
                                    <h2>Lorem ipsum dolor sit</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nulla tempore molestias laboriosam enim cum qui quos praesentium aliquid earum dolor vitae laudantium corporis veniam iste voluptatum quis magnam et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum</p>
                                    <p>nulla tempore molestias laboriosam enim cum qui quos praesentium aliquid earum dolor vitae laudantium corporis veniam iste voluptatum quis magnam et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nulla tempore molestias laboriosam enim cum qui quos praesentium aliquid earum dolor vitae laudantium corporis veniam iste voluptatum quis magnam et!</p>
                                    <p>nulla tempore molestias laboriosam enim cum qui quos praesentium aliquid earum dolor vitae laudantium corporis veniam iste voluptatum quis magnam et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nulla tempore molestias laboriosam enim cum qui quos praesentium aliquid earum dolor vitae laudantium corporis veniam iste voluptatum quis magnam et!</p>
                                    <ul className="list-unstyled">
                                        <li><a href="/">ios</a></li>
                                        <li><a href="/">Android</a></li>
                                        <li><a href="/">Windows Mobile</a></li>
                                        <li><a href="/">ios</a></li>
                                        <li><a href="/">Android</a></li>
                                        <li><a href="/">Windows Mobile</a></li>
                                        <li><a href="/">ios</a></li>
                                        <li><a href="/">Android</a></li>
                                        <li><a href="/">Windows Mobile</a></li>
                                        <li><a href="/">ios</a></li>
                                        <li><a href="/">Android</a></li>
                                        <li><a href="/">Windows Mobile</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <img src={riseUpAdv} alt="" />
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
                {/* Start Tools And Technology */}
                <section className="tools-and-tech">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Tools & Technology</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Mobile Frameworks <i className="fas fa-chevron-down"></i></button>
                                            </h2>
                                        </div>

                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <ul className="list-unstyled list-inline">
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Cloud Technologies  <i className="fas fa-chevron-down"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <ul className="list-unstyled list-inline">
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Database Technogoies  <i className="fas fa-chevron-down"></i></button>
                                            </h2>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <ul className="list-unstyled list-inline">
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                    <li><a href="/"><img src={work} alt="" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Start Worked With*/}
                <section className="working-with">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>We have worked with</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 text-center">
                                <a href="/" className="border-shadow"><img src={workGoogle} alt="" /></a>
                            </div>
                            <div className="col-lg-4 text-center">
                                <a href="/" className="border-shadow"><img src={workGoogle} alt="" /></a>
                            </div>
                            <div className="col-lg-4 text-center">
                                <a href="/" className="border-shadow"><img src={workGoogle} alt="" /></a>
                            </div>
                            <div className="col-lg-4 text-center">
                                <a href="/" className="border-shadow"><img src={workGoogle} alt="" /></a>
                            </div>
                            <div className="col-lg-4 text-center">
                                <a href="/" className="border-shadow"><img src={workGoogle} alt="" /></a>
                            </div>
                            <div className="col-lg-4 text-center">
                                <a href="/" className="border-shadow"><img src={workGoogle} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Worked With */}

                {/* Client Info Section */}
                <section className="client-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Why Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="counter text-center">
                                    <CountUp className="CountUp" start={0} duration={5} end={10} />
                                    <p>Years</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="counter text-center">
                                <CountUp className="CountUp" start={0} duration={5} end={7} />
                                    <p>Countrys</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="counter text-center">
                                <CountUp className="CountUp" start={0} end={700} duration={5} suffix="+" />
                                    <p>Projects</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="counter text-center">
                                <CountUp className="CountUp" start={0} end={100} duration={5} suffix="+" />
                                    <p>Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Client Info Section */}
                <Footer />
            </div>
        )
    }
}
export default Iets;