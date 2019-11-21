import React, { Component } from 'react'
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import Banner from '../../commonTools/Banner';
import BackgroundImage from '../../../assets/img/event.jpg';
// import { Link } from "react-router-dom";
import $ from 'jquery';
// import Accordion from '../../commonTools/Accordion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
class ApplicationForm extends Component {
    componentDidMount(){
        $('.rul-btn').each(function(){

            var text = $(this).text().split(' ');
            if(text.length < 2)
                return;
            text[0] = '<span class="firstWord">'+text[0]+'</span>';
            $(this).html( text.join(' ') );
        
        });
    }
    render() {
        return (
            <div className="page application-form">
                <Nav className="navbar navbar-expand-lg"/>
                {/* Banner */}
                <section id="careerForm" className="banner middle-content" style={{ backgroundImage: `url(${require('../../../assets/img/banner/career-banner.png')})` }}>
                <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inroText">
                                    <h1><span className="text-color">Game </span>Artist</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Banner */}
                <section className="career-form">
                    <div className="container">
                        <form method="post">
                            <div className="row">
                                <div className="col-lg-3">
                                    <h3>Personal information</h3>
                                    <p>Tell us something about yourself</p>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Full Name*</label>
                                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="|" />
                                            </div>
                                            <div className="form-group">
                                                <label>Email address *</label>
                                                <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="Your email address" />
                                            </div>
                                            <div className="form-group">
                                                <label>Phone number *</label>
                                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Your phone number" />
                                            </div>
                                            <div className="form-group">
                                                <label>Photo</label>
                                                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                                <span>We accept PNG, JPG, and JPEG files</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-3">
                                    <h3>CV / Resume *</h3>
                                    <p>Upload your CV or resume file</p>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Add File</label>
                                                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                                <span>We accept PDF, DOC, DOCX, JPG and PNG files</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-3">
                                    <h3>Cover letter</h3>
                                    <p>Insert your cover letter here</p>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea className="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 d-block text-center">
                                    <button type="submit" className="cus-btn">Submit Application</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <Footer />
            </div >
        )
    }
}
export default ApplicationForm;