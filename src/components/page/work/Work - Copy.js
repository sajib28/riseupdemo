import React, { Component } from 'react';
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import Banner from '../../commonTools/Banner';
import BackgroundImage from '../../../assets/img/event.jpg';
import eventImg1 from '../../../assets/img/write.jpg';
import apps1 from '../../../assets/img/Valrhona-Chocolate.jpg';
import apps2 from '../../../assets/img/rent-lion-image-2.jpg';
import mixitup from 'mixitup';
import {
    Link
} from "react-router-dom";

class Work extends Component {
    componentDidMount() {
        mixitup('.projectfilter');
    }

    render() {
        let alt = "Demo";
        return (
            <div className="page work">
                <Nav className="navbar navbar-expand-lg dark-color"/>
                <Banner id="workBanner" backgroundImage={BackgroundImage} />
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
                <section className="project text-center">
                    <button type="button" data-filter="all">All</button>
                    <button type="button" data-filter=".category-a">Category A</button>
                    <button type="button" data-filter=".category-b">Category B</button>
                    <button type="button" data-filter=".category-c">Category C</button>
                    <section className="projectfilter app-list">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 mix category-a">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${apps1})` }}>

                                        </div>
                                        <div className="item-body">

                                            <p>A tool to simplify the lives of landlords, property managers and tenants. It allows tenants to make mobile rent payments; send messages; store important documents; and make maintenance requests.</p>
                                            <a href="/" className="cus-btn">View Apss</a>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-4 mix category-b">
                                        <div className="list-items">
                                            <div className="item-bg" style={{ backgroundImage: `url(${apps2})` }}>

                                            </div>
                                            <div className="item-body">
                                                <p>A tool to simplify the lives of landlords, property managers and tenants. It allows tenants to make mobile rent payments; send messages; store important documents; and make maintenance requests.</p>
                                                <a href="/" className="cus-btn">View Apss</a>
                                            </div>
                                        </div>
                                    </div>
                                
                                <div className="col-lg-4 mix category-a">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${apps1})` }}>

                                        </div>
                                        <div className="item-body">

                                            <p>A tool to simplify the lives of landlords, property managers and tenants. It allows tenants to make mobile rent payments; send messages; store important documents; and make maintenance requests.</p>
                                            <a href="/" className="cus-btn">View Apss</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mix category-c">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${apps2})` }}>

                                        </div>
                                        <div className="item-body">
                                            <p>A tool to simplify the lives of landlords, property managers and tenants. It allows tenants to make mobile rent payments; send messages; store important documents; and make maintenance requests.</p>
                                            <a href="/" className="cus-btn">View Apss</a>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-lg-4 mix category-b">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${apps1})` }}>

                                        </div>
                                        <div className="item-body">

                                            <p>A tool to simplify the lives of landlords, property managers and tenants. It allows tenants to make mobile rent payments; send messages; store important documents; and make maintenance requests.</p>
                                            <a href="/" className="cus-btn">View Apss</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mix category-c">
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
                    </section>
                    {/* <div className="mix category-a" data-order="1">1</div>
                        <div className="mix category-b" data-order="2">2</div>
                        <div className="mix category-b category-c" data-order="3">3</div>
                        <div className="mix category-a category-d" data-order="4">4</div> */}

                </section>
                <Footer />
            </div >
        )
    }
}
export default Work;