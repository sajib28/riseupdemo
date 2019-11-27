import React, { Component } from 'react';
import src1 from '../../../assets/media/intechnic.mp4';
import poster from '../../../assets/img/intechnic.jpg';
import CompanySummary from '../../commonTools/CompanySummary';
import CompanyLogo from '../../commonTools/CompanyLogo';
import ContactForm from '../../commonTools/ContactForm';
import Footer from '../../commonTools/Footer';
import project1 from '../../../assets/img/project/meet-meena.png';
import project2 from '../../../assets/img/project/adolescent-app.png';
import project3 from '../../../assets/img/project/language-movement.png';
import project4 from '../../../assets/img/project/meena-game.png';
import appdev1 from '../../../assets/img/app-development.png';
import appdev2 from '../../../assets/img/game-development.png';
import appdev3 from '../../../assets/img/web-development.png';
import appdev4 from '../../../assets/img/xr-solution.png';
import appdev5 from '../../../assets/img/iets.png';
import Nav from '../../commonTools/Nav';
import HomeSlider from '../../commonTools/HomeSlider';
import simpleParallax from 'simple-parallax-js';
import {
    Link
} from "react-router-dom";
import $ from 'jquery';
class Home extends Component {
    componentDidMount() {
        var image = document.getElementsByClassName('parallax-content');
        new simpleParallax(image, {
            delay: .6,
            transition: 'cubic-bezier(0,0,0,1)'
        });
        //Activated WoW Js
        // new WOW.WOW({
        //     live: false,
        //     mobile: false,
        //   }).init();
        // End Activated WoW Js
        $(document).ready(function () {
            var Menuheight = $("#mainMenu").height();
            $('a[href^="#"]').bind('click', function (e) {
                e.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: $($(this).attr('href')).offset().top - Menuheight
                }, 500);
                return false;
            });
        });
        $(window).scroll(function () {
            var Menuheight = $("#mainMenu").height();
            var scrollDistance = $(window).scrollTop() + Menuheight;
            // Assign active class to nav links while scolling
            $('.service-block').each(function (i) {
                if ($(this).position().top <= scrollDistance - Menuheight) {

                    $('.service-menu a.active').removeClass('active');
                    $('.service-menu a').eq(i).addClass('active');
                }
            });
        }).scroll();
        // End Sidebar Menu Scroll
        // Add Class for Odd/Even items
        $(".service-block:even").addClass('reverse-items');
        $(".swap-items:odd").addClass('reverse-items');
        //End  Add Class for Odd/Even items
        $(window).scroll(function () {
            var a = $(window).scrollTop();
            var serviceMenu = $('.service-menu').height();
            var screenmiddle = ($(window).height() / 2) - (serviceMenu / 2);
            var pos = $('#mainMenu').height();

            if ($('.wrap').length) {
                var b = $('.wrap').offset().top - pos - screenmiddle - 50;
            }
            var m = $('.sticky-menu').outerHeight() + $('#mainMenu').outerHeight();

            var fixtop = $('#mainMenu').outerHeight();
            if ($('.home-project').length) {
                var y = $('.home-project').offset().top - screenmiddle * 2 - 50;
            }

            if (a > b) {
                $('.sticky-menu').addClass('fixed').css({ 'top': screenmiddle + 50 + 'px' });
                $('.wrap').height($('.sticky-menu').outerHeight());
            }
            else {
                $('.sticky-menu').removeClass('fixed')
                $('.wrap').height(0);
            }
            if (a > y) {
                $('.sticky-menu').addClass('footstick');
                $('.wrap').height($('.sticky-menu').outerHeight());

            }
            else {
                $('.sticky-menu').removeClass('footstick');
            }
        });
    }

    render() {
        let alt = "";
        return (
            <div className="home">
                <Nav className="navbar navbar-expand-lg" />
                <HomeSlider />
                <section className="intro" data-ui="light">
                    <div className="background-cover">
                        <video autoPlay muted loop playsInline preload="none" poster={poster}>
                            <source src={src1} type="video/mp4" />
                        </video>
                    </div>
                    <div className="container middle-content">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="introText">
                                    <h1><span className="text-uppercase text-color">Riseup</span><br />Beyond Reality Driving <br />into Technology</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="homeService" className="home-service" data-ui="light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <div className="title">
                                        <h2 className="text-left"><span
                                            className="text-color">Riseup</span> Services</h2>
                                        <p>We provide complete solution of your digital products from research to vision</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="riseupApps" className="service-block" data-ui="light">
                        <div className="home-sidebar">
                            <div className="wrap"></div>
                            <nav className="service-menu ui-light sticky-menu" id="SideBarMenu">
                                <ul className="list-unstyled">
                                    <li className="nav-item"><a className="nav-link" href="#riseupApps">Apps <span>Development</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="#riseupGames">Games <span>Development</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="#riseupWeb">Web <span>System</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="#riseupXr">X-R <span>Solution</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="#riseupIets">IETS <span></span></a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="apps-wrapper">
                                        <div className="simpleParallax">
                                            <h2 className="content-text">Apps Development</h2>
                                        </div>
                                        <figure>
                                            <img className="parallax-content" src={appdev1} alt="" />
                                            <div className="img-overlay"></div>
                                        </figure>
                                        <div className="apps-content">
                                            <div className="row">
                                                <div className="swap-apps">
                                                    <div className="col-lg-4 col-md-12">
                                                        <div className="apps-details">
                                                            <ul className="apps-info list-unstyled">
                                                                <li><i className="fab fa-apple"></i>ios</li>
                                                                <li><i className="fab fa-android"></i>Android</li>
                                                                <li><i className="fab fa-windows"></i>Windows Mobile</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 col-md-12">
                                                        <div className="apps-description">
                                                            <p>We offer design, development, and solution for apps across a range of devices. We have developed many commercially successful apps for Apple App Store, Google Play Store and for some other platform.<br /><br />
                                                                We have millions of active users on those mobile apps. Some of our apps were also being featured by Apple for our unique creativity, design innovation & user feedback.
                                                        </p>
                                                            <a href="/apps-development" className="see-more">See More<i className="fas fa-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="riseupGames" className="service-block" data-ui="light">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="apps-wrapper">
                                        <h2>Games Development</h2>
                                        <figure>
                                            <img className="parallax-content" src={appdev2} alt="" />
                                            <div className="img-overlay"></div>
                                        </figure>
                                        <div className="apps-content">
                                            <div className="row">
                                                <div className="swap-apps">

                                                    <div className="col-lg-4">
                                                        <div className="apps-details">
                                                            <ul className="apps-info list-unstyled">
                                                                <li><i className="fab fa-apple"></i>ios</li>
                                                                <li><i className="fab fa-android"></i>Android</li>
                                                                <li><i className="fab fa-windows"></i>Windows Mobile</li>
                                                                <li><i className="fab fa-facebook"></i>Facebook Game</li>
                                                                <li><i className="fab fa-react"></i>React Native</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="apps-description">
                                                            <p>We have worked on many successful games, like- Tap Tap Ants, Tap Tap Ants: Battlefield, Highway Chase, Rooftop Frenzy, Brain Boss, iWarehouse, Bubble Attack, Shoot The Monkey, etc.<br /><br />
                                                                We are the first game developer team in Bangladesh, who developed games for multi-platforms.
                                                    </p>
                                                            <Link to="/" className="see-more">See More<i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="riseupWeb" className="service-block" data-ui="light">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="apps-wrapper">
                                        <h2 className="apps-title">Web System</h2>
                                        <figure>
                                            <img className="parallax-content" src={appdev3} alt="" />
                                            <div className="img-overlay"></div>
                                        </figure>
                                        <div className="apps-content">
                                            <div className="row">
                                                <div className="swap-apps">
                                                    <div className="col-lg-4">
                                                        <div className="apps-details">
                                                            <ul className="apps-info list-unstyled">
                                                                <li><i className="fas fa-laptop"></i>Digital Platform</li>
                                                                <li><i className="fas fa-globe"></i>Web Portal</li>
                                                                <li><i className="fa fa-shopping-cart"></i>E-Commerce Solutions</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="apps-description">
                                                            <p>We provide web-based solutions that can improve user impressions over the interactive experiences and increase the retention period of consumers with content management, cloud storage solutions, communication and marketing solutions, and interactive report presentation.</p>
                                                            <Link to="/" className="see-more">See More<i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="riseupXr" className="service-block" data-ui="light">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="apps-wrapper">
                                        <h2>XR Solution</h2>
                                        <figure>
                                            <img className="parallax-content" src={appdev4} alt="" />
                                            <div className="img-overlay"></div>
                                        </figure>
                                        <div className="apps-content">
                                            <div className="row">
                                                <div className="swap-apps">
                                                    <div className="col-lg-4">
                                                        <div className="apps-details">
                                                            <ul className="apps-info list-unstyled">
                                                                <li><span>AR</span>Augmented reality</li>
                                                                <li><span>VR</span>Virtual reality</li>
                                                                <li><span>MR</span>Mixed reality</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="apps-description">
                                                            <p>Extended reality is the most updated and trending technology around the world, where users interact with the virtual world in seemingly real situations or physical action. AR, VR, MR interactive experiences are the digital version of older technologies, e.g.</p>
                                                            <Link to="/" className="see-more">See More<i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="riseupIets" className="service-block" data-ui="light">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="apps-wrapper">
                                        <h2>IETS</h2>
                                        <figure>
                                            <img className="parallax-content" src={appdev5} alt="" />
                                            <div className="img-overlay"></div>
                                        </figure>
                                        <div className="apps-content">
                                            <div className="row">
                                                <div className="swap-apps">
                                                    <div className="col-lg-4">
                                                        <div className="apps-details">
                                                            <ul className="apps-info list-unstyled">
                                                                <li><i className="fab fa-apple"></i>HR Service</li>
                                                                <li><i className="fab fa-android"></i>Development</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="apps-description">
                                                            <p>Riseup is one of the emerging leaders as the premier IT/ITES service provider, serving its customers and delivering IT & ITES Solutions to a diverse set of clients in several countries across the globe. The company is backed up with a management team which brings in over 10 years of software development and consultancy experience spread all across the world, specializing in small to enterprise level of system development, implementation and integration services. </p>
                                                            <a href="/iets" className="see-more">See More<i className="fas fa-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home-project project dark-bg" data-ui="dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <div className="title">
                                        <h2 className="text-left"><span className="text-color">Some of our</span><br />Works</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row app-list">
                            <div className="items">
                                <div className="col-lg-8">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${project1})` }}>

                                        </div>
                                        <div className="item-body">
                                            <h3>Meena Game</h3>
                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" />
                                            <p>Another mobile oriented channel that UNICEF intends to use to execute its Meena Communication Initiative (MCI) aimed at changing perceptions and behavior that hamper the survival</p>
                                            <Link to="/single-app" className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${project2})` }}>

                                        </div>
                                        <div className="item-body">
                                            <h3>Adolescent App</h3>
                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" />
                                            <p>A digital application for adolescent club members to connect, share knowledge and have access information.</p>
                                            <a href="/single-app" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="col-lg-8">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${project4})` }}>
                                        </div>
                                        <div className="item-body">
                                            <h3>Meena Game</h3>
                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" />
                                            <p>Meena is a cartoon character from South Asia. She is a spirited, nine-year-old girl, who braves all the odds – whether in her efforts to go to school or in fighting the discrimination against children.</p>
                                            <a href="/" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${project3})` }}>
                                        </div>
                                        <div className="item-body">
                                            <h3>Demo title</h3>
                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" />
                                            <p>A digital application for adolescent club members to connect, share knowledge and have access information.</p>
                                            <a href="/" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <a href="/" className="cus-btn details">View more<i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="company-enterpreneurs" data-ui="light">
                    <CompanySummary />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <div className="title text-left">
                                        <h2><span className="text-color">We can build<br /></span>your story</h2>
                                        <p>Through the years we have worked with great companies and entrepreneurs all over the world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <CompanyLogo />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home-work" data-ui="dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <div className="title">
                                        <h2 className="text-left"><span className="text-color">Why Work with</span><br />RiseUp</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* odd */}

                            <div className="swap-items">
                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <img src={require('../../../assets/img/work/home-work-1.png')} alt={alt} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="content-block">
                                        <h2>Full-service, full-stack</h2>
                                        <p>From idea to implementation, our complete product development approach means convenience and less risk. Everything under one roof means less risk and a cohesive team to ensure forward momentum. From product strategy to product design to full-stack engineering, Rise up handles every aspect of digital product development so your insight and intelligence result in ample reward.</p>

                                    </div>
                                </div>

                            </div>
                            {/* End Odd */}

                            {/* Even */}

                            <div className="swap-items">

                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <img src={require('../../../assets/img/work/home-work-2.png')} alt={alt} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="content-block">
                                        <h2>More genius within our reach</h2>
                                        <p>Our’s nimble, distributed structure means we recruit the most brilliant talent from across the country and our team members each fully allocated to a single project to speed up the process of development of a product.</p>

                                    </div>
                                </div>

                            </div>
                            {/* odd */}
                            <div className="swap-items">

                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <img src={require('../../../assets/img/work/home-work-3.png')} alt={alt} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="content-block">
                                        <h2>Tech that advance the Industry</h2>
                                        <p>We always get updated with the latest tools and technology which is used widely across the world. So it's easy for us to catch the trend more easily and develop a quality product.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Odd */}
                            {/* Even */}
                            <div className="swap-items">

                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <img src={require('../../../assets/img/work/home-work-4.png')} alt={alt} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="content-block">
                                        <h2>Human-centered</h2>
                                        <p>We focus on deep customer insights to create tailored experiences for your target audience</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Even */}
                            {/* odd */}

                            <div className="swap-items">

                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <img src={require('../../../assets/img/work/home-work-5.png')} alt={alt} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="content-block">
                                        <h2>We believe in clients success</h2>
                                        <p>Making customers more successful is key to business growth so we work closely with you to ensure your needs come first.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Odd */}
                        </div>
                    </div>
                </section>
                <section className="contact-form" data-ui="light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <div className="title text-left">
                                        <h2 className="text-left">
                                            <span className="text-color">Let's</span> Talk!</h2>
                                        <p>We’d love to hear what you are working on.<br />
                                            Drop us a note here and we’ll get back to you within 24 hours.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div >
        )
    }
}
export default Home;