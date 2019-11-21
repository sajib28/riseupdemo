import React, { Component } from 'react';
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import Banner from '../../commonTools/Banner';
import BackgroundImage from '../../../assets/img/event.jpg';
import eventImg1 from '../../../assets/img/app.jpg';
import nationalFather from '../../../assets/img/national-father.png';
import {
    Link
} from "react-router-dom";
import $ from 'jquery';
class Process extends Component {
    componentDidMount() {
        $('.inroText h1').each(function () {

            var text = $(this).text().split(' ');
            if (text.length < 2)
                return;
            text[0] = '<span class="firstWord">' + text[0] + '</span>';
            $(this).html(text.join(' '));

        });
    }
    render() {
        let alt = "demo";
        return (

            <div className="page press">
                <Nav className="navbar navbar-expand-lg"/>
                <Banner id="PressBanner" title="How We Work: From Idea to Reality" backgroundImage={BackgroundImage} />
                {/* Tab menu */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="top-content">
                                <ul className="nav nav-tabs" id="pressTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="news" data-toggle="tab" href="#riseupnews" role="tab" aria-selected="true">News</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="event" data-toggle="tab" href="#riseupevent" role="tab" aria-selected="false">Event</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tab menu */}
                 {/* Tab Content */}
                <div className="tab-content" id="pressTabContent">
                    <div className="tab-pane fade show active" id="riseupnews" role="tabpanel" aria-labelledby="news">
                        <section className="news">
                            <div className="container">
                                <div className="row">
                                    {/* odd */}

                                    <div className="swap-items">

                                        <div className="col-lg-6">
                                            <div className="image-block">
                                                <img src={eventImg1} alt={alt} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="content-block">
                                                <span className="date">dec 06 2019</span>
                                                <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda officiis deleniti repellat optio</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia quo nulla sunt nam maiores odit ratione earum, vel optio, quasi exercitationem beatae asperiores eum corrupti distinctio praesentium assumenda odio.Facilis omnis officia delectus? Incidunt sint quaerat deserunt odio impedit quidem quasi corporis necessitatibus explicabo reprehenderit quisquam, cupiditate aut vitae unde eos labore soluta. Voluptates, illum repellendus? Debitis, veritatis cum.</p>
                                                <Link to="/news-details">Details</Link>
                                            </div>
                                        </div>

                                    </div>
                                    {/* End Odd */}

                                    {/* Even */}

                                    <div className="swap-items">

                                        <div className="col-lg-6">
                                            <div className="image-block">
                                                <img src={eventImg1} alt={alt} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="content-block">
                                                <span className="date">dec 06 2019</span>
                                                <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda officiis deleniti repellat optio</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia quo nulla sunt nam maiores odit ratione earum, vel optio, quasi exercitationem beatae asperiores eum corrupti distinctio praesentium assumenda odio.Facilis omnis officia delectus? Incidunt sint quaerat deserunt odio impedit quidem quasi corporis necessitatibus explicabo reprehenderit quisquam, cupiditate aut vitae unde eos labore soluta. Voluptates, illum repellendus? Debitis, veritatis cum.</p>
                                                <Link to="/news-details">Details</Link>
                                            </div>
                                        </div>

                                    </div>
                                    {/* odd */}

                                    <div className="swap-items">

                                        <div className="col-lg-6">
                                            <div className="image-block">
                                                <img src={eventImg1} alt={alt} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="content-block">
                                                <span className="date">dec 06 2019</span>
                                                <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda officiis deleniti repellat optio</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia quo nulla sunt nam maiores odit ratione earum, vel optio, quasi exercitationem beatae asperiores eum corrupti distinctio praesentium assumenda odio.Facilis omnis officia delectus? Incidunt sint quaerat deserunt odio impedit quidem quasi corporis necessitatibus explicabo reprehenderit quisquam, cupiditate aut vitae unde eos labore soluta. Voluptates, illum repellendus? Debitis, veritatis cum.</p>
                                                <Link to="/news-details">Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Odd */}
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="tab-pane fade" id="riseupevent" role="tabpanel" aria-labelledby="portal">
                        <section className="event">
                            <div className="container">
                                <div className="row">
                                    {/* event item */}
                                    <div className="event-item">
                                        <div className="col-lg-6">
                                            <div className="image-block">
                                                <img src={nationalFather} alt={alt} />
                                            </div>

                                        </div>
                                        <div className="col-lg-6">
                                            <div className="content-block">
                                                <h2>Lorem ipsum dolor sit amet</h2>
                                                <div className="date-time">
                                                    <span className="date">Dec 6 -dec 9</span>
                                                    <span className="time">10pm</span>
                                                    <h5 className="place">Lorem ipsum dolor sit amet</h5>
                                                </div>
                                                <Link to="/event-details">Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End event item */}
                                    {/* event item */}
                                    <div className="event-item">
                                        <div className="col-lg-6">
                                            <div className="image-block">
                                                <img src={nationalFather} alt={alt} />
                                            </div>

                                        </div>
                                        <div className="col-lg-6">
                                            <div className="content-block">
                                                <h2>Lorem ipsum dolor sit amet</h2>
                                                <div className="date-time">
                                                    <span className="date">Dec 6 -dec 9</span>
                                                    <span className="time">10pm</span>
                                                    <h5 className="place">Lorem ipsum dolor sit amet</h5>
                                                </div>
                                                <Link to="/event-details">Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End event item */}
                                    {/* event item */}
                                    <div className="event-item">
                                        <div className="col-lg-6">
                                            <div className="image-block">
                                                <img src={nationalFather} alt={alt} />
                                            </div>

                                        </div>
                                        <div className="col-lg-6">
                                            <div className="content-block">
                                                <h2>Lorem ipsum dolor sit amet</h2>
                                                <div className="date-time">
                                                    <span className="date">Dec 6 -dec 9</span>
                                                    <span className="time">10pm</span>
                                                    <h5 className="place">Lorem ipsum dolor sit amet</h5>
                                                </div>
                                                <Link to="/event-details">Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End event item */}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                 {/* End Tab Content */}
                <Footer />
            </div >
        )
    }
}

export default Process;