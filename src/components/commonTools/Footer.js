import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer" id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <form className="form-inline center">
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2">
                            <h3>Goto</h3>
                            <ul className="list-unstyled">
                                <li><a href="/" rel="noopener noreferrer">Home</a></li>
                                <li><a href="/" rel="noopener noreferrer">Our Work</a></li>
                                <li><a href="/" rel="noopener noreferrer">Our Process</a></li>
                                <li><a href="/" rel="noopener noreferrer">About Us</a></li>
                                <li><a href="/" rel="noopener noreferrer">Blog</a></li>
                                <li><a href="/" rel="noopener noreferrer">Career</a></li>
                                <li><a href="/" rel="noopener noreferrer">Press Kit</a></li>
                                <li><a href="/" rel="noopener noreferrer">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h3>Our Services</h3>
                            <ul className="list-unstyled">
                                <li><a href="/" rel="noopener noreferrer">Apps Development</a></li>
                                <li><a href="/" rel="noopener noreferrer">Game Development</a></li>
                                <li><a href="/" rel="noopener noreferrer">Web System</a></li>
                                <li><a href="/" rel="noopener noreferrer">XR Solution</a></li>
                                <li><a href="/" rel="noopener noreferrer">IETS</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h3>Our Enterprise</h3>
                            <ul className="list-unstyled">
                                <li><a href="/" rel="noopener noreferrer">Appilian</a></li>
                                <li><a href="/" rel="noopener noreferrer">Riseup Game</a></li>
                                <li><a href="/" rel="noopener noreferrer">Xtreme Tech</a></li>
                                <li><a href="/" rel="noopener noreferrer">Riseup Web System</a></li>
                            </ul>
                            <div className="footer-contact">
                                <h3>Contact Us</h3>
                                <ul className="list-unstyled">
                                    <li><a href="mailto:contact@riseuplabs.com">contact@riseuplabs.com</a></li>
                                    <li><a href="tel:01759747387">+88-0175-974-7387</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h3>Be Future-Ready</h3>
                            <p>Subscribe now for free to get instant updates on what's happening at the company & in everything details!</p>
                            <div className="newsletter">
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Type your email address" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-paper-plane" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div className="social-media">
                                <ul className="list-unstyled list-inline">
                                    <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="/"><i className="fas fa-meh-blank"></i></a></li>
                                    <li><a href="/"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                            <div className="term-condition">
                                <span>&copy; 2019 – Rise up | All Rights Reserved</span>
                                <ul className="list-unstyled inline">
                                    <li><a href="/">Terms of Service</a></li>|<li><a href="/">Privacy Policy</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;