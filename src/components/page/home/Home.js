import React, { Component } from 'react';
import src1 from '../../../assets/media/intechnic.mp4';
import poster from '../../../assets/img/intechnic.jpg';
import Nav from '../../commonTools/Nav';
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
import {
    Link
} from "react-router-dom";
import $ from 'jquery';
class Home extends Component {
    componentDidMount() {
        $(document).ready(function () {
            var Menuheight = $("#mainMenu").height();
            $('.service-menu a').bind('click', function (e) {
                // alert("Test");
                e.preventDefault(); // prevent hard jump, the default behavior

                // var target = $(this).attr("href"); // Set the target as variable

                // perform animated scrolling by getting top-position of target-element and set it as scroll target
                $('html, body').stop().animate({
                    scrollTop: $($(this).attr('href')).offset().top - Menuheight
                }, 500);
                return false;
            });
        });

        $(window).scroll(function () {
            var Menuheight = $("#mainMenu").height();
            var scrollDistance = $(window).scrollTop() + Menuheight;

            // Show/hide menu on scroll
            //if (scrollDistance >= 850) {
            //		$('nav').fadeIn("fast");
            //} else {
            //		$('nav').fadeOut("fast");
            //}

            // Assign active class to nav links while scolling
            $('.service-block').each(function (i) {
                if ($(this).position().top <= scrollDistance) {
                    $('.service-menu a.active').removeClass('active');
                    $('.service-menu a').eq(i).addClass('active');
                }
            });
            var homeHerviceTop = $(".home-service").offset().top;
            var projectBottom = $(".home-service").offset().top;
            // if ($(this).scrollTop() >= projectBottom) {
            //     $('#SideBarMenu').hide();
            // }
            if ($(this).scrollTop() >= homeHerviceTop) {
                $('#SideBarMenu').show();
                // $('#SideBarMenu').addClass('sidebarfixed');
            }
            if ($(this).scrollTop() >= projectBottom) {
                $('#SideBarMenu').hide();
                // $('#SideBarMenu').addClass('sidebarfixed');
            }

            else {
                $('#SideBarMenu').removeClass('sidebarfixed');
                $('#SideBarMenu').hide();
            }

        }).scroll();
        $(".service-block:even").addClass('reverse-items');
        // fixed Sidebar Menu
        // window.onscroll = function () { sideBarFixed() };
        // let header = document.getElementById("SideBarMenu");

        // let introHeight = $(".intro").height();
        // function sideBarFixed() {
        //     if (window.pageYOffset > introHeight) {
        //         header.classList.add("sidebarfixed");
        //     } else {
        //         header.classList.remove("sidebarfixed");
        //     }
        // }
        //End fixed Sidebar Menu

        $(".swap-items:odd").addClass('reverse-items');
    }

    render() {
        let alt = "";
        return (
            <div className="home">
                <Nav />
                <section className="intro" data-ui="light">
                    <div className="background-cover">
                        <video autoPlay muted loop playsInline preload="none" poster={poster}>
                            <source src={src1} type="video/mp4" />
                        </video>
                    </div>
                    <div className="container middle-content">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inroText">
                                    <h1><span className="text-uppercase text-color">Riseup</span><br />Beyond Reality Driving <br />into Technology</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home-service" data-ui="light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <div className="title">
                                        <h2 className="text-left"><span className="text-color">Riseup</span> Services</h2>
                                        <p>We provide complete solution of your digital products from research to vision</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="riseupApps" className="service-block" data-ui="light">
                        <div className="container">
                            <nav className="service-menu ui-light" id="SideBarMenu">
                                <ul className="list-unstyled">
                                    <li className="nav-item"><a className="nav-link active" href="#riseupApps">Apps</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#riseupGames">Games</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#riseupWeb">Web</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#riseupXr">X-R</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#riseupIets">IETS</a></li>
                                </ul>
                            </nav>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="apps-wrapper">
                                        <h2 className="parallax-title">Apps Development</h2>
                                        <figure>
                                            <img className="parallax-content" src={appdev1} alt="" />
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="apps-description">
                                                            <p>We offer design, development, and solution for apps across a range of devices. We have developed many commercially successful apps for Apple App Store, Google Play Store and for some other platform.<br /><br />
                                                                We have millions of active users on those mobile apps. Some of our apps were also being featured by Apple for our unique creativity, design innovation & user feedback.
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
                    <div id="riseupGames" className="service-block" data-ui="light">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="apps-wrapper">
                                        <h2>Games Development</h2>
                                        <figure>
                                            <img src={appdev2} alt="" />
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
                                            <img src={appdev3} alt="" />
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
                                            <img src={appdev4} alt="" />
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
                                            <img src={appdev5} alt="" />
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
                </section>
                <section className="home-project project" data-ui="dark">
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

                                            <p>A tool to simplify the lives of landlords, property managers and tenants. It allows tenants to make mobile rent payments; send messages; store important documents; and make maintenance requests.</p>
                                            <a href="/" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${project2})` }}>

                                        </div>
                                        <div className="item-body">
                                            <p>A tool to simplify the lives of landlords, property managers and tenants. It allows tenants to make mobile rent payments; send messages; store important documents; and make maintenance requests.</p>
                                            <a href="/" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
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
                                            <p>A tool to simplify the lives of landlords, property managers and tenants. It allows tenants to make mobile rent payments; send messages; store important documents; and make maintenance requests.</p>
                                            <a href="/" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${project3})` }}>
                                        </div>
                                        <div className="item-body">
                                            <p>A tool to simplify the lives of landlords, property managers and tenants. It allows tenants to make mobile rent payments; send messages; store important documents; and make maintenance requests.</p>
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
                <ContactForm />
                <Footer />
            </div >
        )
    }
}
export default Home;