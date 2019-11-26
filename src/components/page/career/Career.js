import React, { Component } from 'react'
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
// import Banner from '../../commonTools/Banner';
// import BackgroundImage from '../../../assets/img/event.jpg';
class Career extends Component {
    render() {
        return (
            <div className="page career">
                <Nav className="navbar navbar-expand-lg" />
                {/* Banner */}
                <section id="careerBanner" className="banner middle-content" style={{ backgroundImage: `url(${require('../../../assets/img/banner/career-banner.png')})` }}>
                <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="introText">
                                    <h1><span className="text-color">We’re </span>hiring.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Banner */}
                <section className="career-position">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="title proxima-semibold">Currently Open Positions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="accordion" id="careerAccordion">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                    Senior Rails & Database Engineer (Remote) <i className="fas fa-chevron-down"></i></button>
                                            </h2>
                                        </div>

                                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#careerAccordion">
                                            <div className="card-body">
                                                <div className="content-block">
                                                    <h3 className="vacancy">— No. of Vacancies : 02</h3>
                                                    <h3>Job Description / Responsibility</h3>
                                                    <ul className="list-unstyled">
                                                        <li>Create artworks for applications & games from initial concept to final delivery </li>
                                                        <li>ontribute in the applications & games concepts with own creativity </li>
                                                    </ul>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Educational Requirements</h3>
                                                    <p>Graduate from any reputed university</p>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Job Nature</h3>
                                                    <p>Full-time</p>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Experience Requirements</h3>
                                                    <p>2 to 5 year(s)</p>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Additional Job Requirements</h3>
                                                    <ul className="list-unstyled">
                                                        <li>Strong Photoshop and Illustrator skills</li>
                                                        <li>Applications & games Art experience on published projects is counted a plus point</li>
                                                        <li>Excellent vision of what looks great and ability to communicate that vision</li>
                                                        <li>Passion for applications & games is an advantage</li>
                                                        <li>Must be talented, hungry and eager to learn</li>
                                                    </ul>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Salary Range</h3>
                                                    <p>Negotiable</p>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Job Level</h3>
                                                    <p>Mid Level</p>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Job Location</h3>
                                                    <p>Dhaka</p>
                                                </div>
                                                <a className="cus-btn" href="/application-form"><span className="text-color">Apply</span> for this position</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Article Writer        <i className="fas fa-chevron-down"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#careerAccordion">
                                            <div className="card-body">
                                                <div className="content-block">
                                                    <h3 className="vacancy">— No. of Vacancies : 02</h3>
                                                    <h3>Job Description / Responsibility</h3>
                                                    <ul className="list-unstyled">
                                                        <li>Create artworks for applications & games from initial concept to final delivery </li>
                                                        <li>ontribute in the applications & games concepts with own creativity </li>
                                                    </ul>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Educational Requirements</h3>
                                                    <p>Graduate from any reputed university</p>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Job Nature</h3>
                                                    <p>Full-time</p>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Experience Requirements</h3>
                                                    <p>2 to 5 year(s)</p>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Additional Job Requirements</h3>
                                                    <ul className="list-unstyled">
                                                        <li>Strong Photoshop and Illustrator skills</li>
                                                        <li>Applications & games Art experience on published projects is counted a plus point</li>
                                                        <li>Excellent vision of what looks great and ability to communicate that vision</li>
                                                        <li>Passion for applications & games is an advantage</li>
                                                        <li>Must be talented, hungry and eager to learn</li>
                                                    </ul>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Salary Range</h3>
                                                    <p>Negotiable</p>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Job Level</h3>
                                                    <p>Mid Level</p>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Job Location</h3>
                                                    <p>Dhaka</p>
                                                </div>
                                                <a className="cus-btn" href="/application-form"><span className="text-color">Apply</span> for this position</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">Game Artist       <i className="fas fa-chevron-down"></i></button>
                                            </h2>
                                        </div>
                                        <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#careerAccordion">
                                            <div className="card-body">
                                                <div className="content-block">
                                                    <h3 className="vacancy">— No. of Vacancies : 02</h3>
                                                    <h3>Job Description / Responsibility</h3>
                                                    <ul className="list-unstyled">
                                                        <li>Create artworks for applications & games from initial concept to final delivery </li>
                                                        <li>ontribute in the applications & games concepts with own creativity </li>
                                                    </ul>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Educational Requirements</h3>
                                                    <p>Graduate from any reputed university</p>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Job Nature</h3>
                                                    <p>Full-time</p>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Experience Requirements</h3>
                                                    <p>2 to 5 year(s)</p>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Additional Job Requirements</h3>
                                                    <ul className="list-unstyled">
                                                        <li>Strong Photoshop and Illustrator skills</li>
                                                        <li>Applications & games Art experience on published projects is counted a plus point</li>
                                                        <li>Excellent vision of what looks great and ability to communicate that vision</li>
                                                        <li>Passion for applications & games is an advantage</li>
                                                        <li>Must be talented, hungry and eager to learn</li>
                                                    </ul>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Salary Range</h3>
                                                    <p>Negotiable</p>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Job Level</h3>
                                                    <p>Mid Level</p>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Job Location</h3>
                                                    <p>Dhaka</p>
                                                </div>
                                                <a className="cus-btn" href="/application-form"><span className="text-color">Apply</span> for this position</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingFour">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Game Developer <i className="fas fa-chevron-down"></i></button>
                                            </h2>
                                        </div>
                                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#careerAccordion">
                                            <div className="card-body">
                                                <div className="content-block">
                                                    <h3 className="vacancy">— No. of Vacancies : 02</h3>
                                                    <h3>Job Description / Responsibility</h3>
                                                    <ul className="list-unstyled">
                                                        <li>Create artworks for applications & games from initial concept to final delivery </li>
                                                        <li>ontribute in the applications & games concepts with own creativity </li>
                                                    </ul>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Educational Requirements</h3>
                                                    <p>Graduate from any reputed university</p>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Job Nature</h3>
                                                    <p>Full-time</p>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Experience Requirements</h3>
                                                    <p>2 to 5 year(s)</p>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Additional Job Requirements</h3>
                                                    <ul className="list-unstyled">
                                                        <li>Strong Photoshop and Illustrator skills</li>
                                                        <li>Applications & games Art experience on published projects is counted a plus point</li>
                                                        <li>Excellent vision of what looks great and ability to communicate that vision</li>
                                                        <li>Passion for applications & games is an advantage</li>
                                                        <li>Must be talented, hungry and eager to learn</li>
                                                    </ul>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Salary Range</h3>
                                                    <p>Negotiable</p>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Job Level</h3>
                                                    <p>Mid Level</p>
                                                </div>
                                                <div className="content-block">
                                                    <h3>Job Location</h3>
                                                    <p>Dhaka</p>
                                                </div>
                                                <a className="cus-btn" href="/application-form"><span className="text-color">Apply</span> for this position</a>
                                            </div>
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
export default Career;     