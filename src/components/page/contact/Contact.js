import React, { Component } from 'react';
import Nav from '../../commonTools/Nav';
import ContactForm from '../../commonTools/ContactForm';
import Footer from '../../commonTools/Footer';
class Contact extends Component {
    render() {
        return (
            <div className="page contact">
                <Nav className="navbar navbar-expand-lg dark-color" />
                <section className="contact-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="company-info text-center">
                                    <div className="company-address">
                                        <img src={require('../../../assets/img/icon/webdev.png')} alt="" />
                                        <p className="text-center">Head Office:B6,<br />Plot-35,Sonargaon<br />Janapath Road,Sector-07,<br />Uttara, Dhaka-1230,<br />Bangladesh</p>
                                    </div>
                                    <div className="phone">
                                    <img src={require('../../../assets/img/icon/webdev.png')} alt="" />
                                        <li><a href="tel:01759747387">+88-0175-974-7387</a></li>
                                    </div>
                                    <div className="email">
                                    <img src={require('../../../assets/img/icon/webdev.png')} alt="" />
                                        <li><a href="mailto:contact@riseuplabs.com">contact@riseuplabs.com</a></li>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="section-title">
                                    <div className="title text-center">
                                        <h2 className="text-center">
                                            <span className="text-color">Let's</span> Talk!</h2>
                                        <p className="text-center">We’d love to hear what you are working on.<br />
                                            Drop us a note here and we’ll get back to you within 24 hours.</p>
                                    </div>
                                </div>
                                <div className="contact-from" data-ui="light">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="google-map">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="rawline-semibold">Test</h2>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1289.9168693717875!2d90.39585154647231!3d23.87415825798397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4241b52d99d%3A0xdf7009a05d863ce5!2sRise%20Up%20Labs!5e0!3m2!1sen!2sbd!4v1574333333213!5m2!1sen!2sbd" width="100%" height="450"></iframe>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Banner */}
                <Footer />
            </div>
        )
    }
}
export default Contact;
