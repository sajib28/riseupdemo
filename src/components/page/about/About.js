import React, { Component } from 'react'
import Nav from '../../commonTools/Nav';
import CompanyLogo from '../../commonTools/CompanyLogo';
import AboutSlider from './AboutSlider';
import Footer from '../../commonTools/Footer';
import aboutintro from '../../../assets/img/about-partner.png';
import award from '../../../assets/img/award.png';
import ictAward from '../../../assets/img/ict-award.png';
import processImg from '../../../assets/img/our-process.png';
import Scrollspy from 'react-scrollspy';
import { Link } from "react-router-dom";
import $ from 'jquery';
class About extends Component {
    componentDidMount() {

        $(document).ready(function () {
            $('a[href*="#"]').bind('click', function (e) {
                e.preventDefault(); // prevent hard jump, the default behavior

                var target = $(this).attr("href"); // Set the target as variable

                // perform animated scrolling by getting top-position of target-element and set it as scroll target
                $('html, body').stop().animate({
                    scrollTop: $(target).offset().top-200
                }, 600, function () {
                    window.location.hash = target; //attach the hash (#jumptarget) to the pageurl
                });

                return false;
            });
        });

        // $(window).scroll(function () {
        //     var aboutWindow = $(window).scrollTop();

        //     $('.page-section').each(function (i) {
        //         if ($('.page-section').position().top <= aboutWindow) {
        //             $('.navigation a.active').removeClass('active');
        //             $('.navigation a').eq(i).addClass('active');
        //         }
        //     });
        // }).scroll();

        $(window).scroll(function () {
            var aboutWindow = $(window).scrollTop();
            var AboutmenuPos = $('#mainMenu').height();
            var AboutWrap = $('.wrap').offset().top - AboutmenuPos;

            var aboutm = $('.navigation').outerHeight() + $('#mainMenu').outerHeight();

            var aboutFixtop = $('#mainMenu').outerHeight();
            var aboutProcess = $('.about-process').offset().top - aboutm;
            if (aboutWindow > AboutWrap) {
                $('.navigation').addClass('fixedSide').css({ 'top': aboutFixtop + 'px' });
                $('.wrap').height($('.navigation').outerHeight());
            }
            else {
                $('.navigation').removeClass('fixedSide')
                $('.wrap').height(0);
            }
            if (aboutWindow > aboutProcess) {
                // alert('removed');
                $('.navigation').addClass('aboutstick');
                $('.wrap').height($('.navigation').outerHeight());

            }
            else {
                $('.navigation').removeClass('aboutstick');
            }
        });
    }

    render() {
        return (
            <div className="page about">
                <Nav className="navbar navbar-expand-lg dark-color" />
                <section className="about-intro" data-ui="light">
                    <span className="hero-bg-left"></span>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="about-intro-inner">
                                <div className="col-lg-6">
                                    <div className="content-block">
                                        <h2><span className="text-color">Your partners</span><br />in the digital age.</h2>
                                        <p>We help entrepreneurs and businesses build products that solve everyday problems through a creative and conscientioususe of technology.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="image-block float-right">
                                        <img src={aboutintro} alt="" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-description" data-ui="light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="content-left">
                                    <h3>About Us</h3>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="content-right">
                                    <h4>A Short Story of our 10 years of success</h4>
                                    <p>Rise Up Labs is a leading ICT organization of Bangladesh, pioneered in mobile apps, games and web systems with a specialization in creating interactive entertainment experiences on multiple platforms. We are on a mission to be one of the world’s leading creator, publisher, and distributor of interactive entertainment and information services by developing the most creative, innovative and profitable entertainment experiences and related products. Our high-level experts are also deeply engaged in capacity development and enhancement of the young generation by providing special IT training, workshops and seminars across the country.</p>
                                    <p>Rise Up Labs has started its operation from 2009 with the success of Tap Tap Ants, that has millions of downloads in the App Store and received a top-ranking position in all over the world. We were also awarded National Mobile Application Award-2014 for ensuring the best quality and outstanding design in Tap Tap Ants: Battlefield game. Our Augmented Reality (AR) app ‘1952’ was launched officially by our honorable ICT Minister Zunaid Ahmed Palak; he mentioned that this app has the tremendous potentiality to educate 42.7 million students in our country with its historic educational content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Start Slider Section*/}
                <section className="about-slider" data-ui="light">
                    <span className="hero-bg-right"></span>
                    <div className="container-fluid pl-0 pr-0">
                        <AboutSlider />
                    </div>
                </section>
                {/* End Slider Section*/}

                <section className="about-sidebar-menu" data-ui="light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="left-sidebar">
                                    <div className="wrap"></div>
                                    <Scrollspy className="navigation sidemenu" items={['promise', 'mission', 'vision', 'culture']} currentClassName="is-current">
                                        <li><a className="nav-link" href="#promise"><span></span>Our Promise</a></li>
                                        <li><a className="nav-link" href="#mission"><span></span>Our Mission</a></li>
                                        <li><a className="nav-link" href="#vision"><span></span>Our Vision</a></li>
                                        <li><a className="nav-link" href="#culture"><span></span>Our Culture</a></li>
                                    </Scrollspy>
                                    {/* <div className="wrap"></div>
                                    <nav className="navigation sidemenu">
                                        <li><a className="nav-link" href="#promise"><span></span>Our Promise</a></li>
                                        <li><a className="nav-link" href="#mission"><span></span>Our Mission</a></li>
                                        <li><a className="nav-link" href="#vision"><span></span>Our Vision</a></li>
                                        <li><a className="nav-link" href="#culture"><span></span>Our Culture</a></li>
                                    </nav> */}
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div id="promise" className="page-section">
                                    <h2>Promise</h2>
                                    <p>We understand that the decision to build a new product, and the team you choose to build it with, is a crucial, and even scary decision. That’s why we give you our promise: to do our very best and to always strive to do the right thing for your project, your users, and your team. We want you to think of us as your partners in this journey. So ask us anything!</p>
                                    <p>We understand that the decision to build a new product, and the team you choose to build it with, is a crucial, and even scary decision. That’s why we give you our promise: to do our very best and to always strive to do the right thing for your project, your users, and your team. We want you to think of us as your partners in this journey. So ask us anything!</p>
                                </div>
                                <div id="mission" className="page-section">
                                    <h2>Mission</h2>
                                    <p>We understand that the decision to build a new product, and the team you choose to build it with, is a crucial, and even scary decision. That’s why we give you our promise: to do our very best and to always strive to do the right thing for your project, your users, and your team. We want you to think of us as your partners in this journey. So ask us anything!</p>
                                    <p>We understand that the decision to build a new product, and the team you choose to build it with, is a crucial, and even scary decision. That’s why we give you our promise: to do our very best and to always strive to do the right thing for your project, your users, and your team. We want you to think of us as your partners in this journey. So ask us anything!</p>
                                </div>
                                <div id="vision" className="page-section">
                                    <h2>Vision</h2>
                                    <p>We understand that the decision to build a new product, and the team you choose to build it with, is a crucial, and even scary decision. That’s why we give you our promise: to do our very best and to always strive to do the right thing for your project, your users, and your team. We want you to think of us as your partners in this journey. So ask us anything!</p>
                                    <p>We understand that the decision to build a new product, and the team you choose to build it with, is a crucial, and even scary decision. That’s why we give you our promise: to do our very best and to always strive to do the right thing for your project, your users, and your team. We want you to think of us as your partners in this journey. So ask us anything!</p>
                                </div>
                                <div id="culture" className="page-section">
                                    <h2>Culture</h2>
                                    <p>We understand that the decision to build a new product, and the team you choose to build it with, is a crucial, and even scary decision. That’s why we give you our promise: to do our very best and to always strive to do the right thing for your project, your users, and your team. We want you to think of us as your partners in this journey. So ask us anything!</p>
                                    <p>We understand that the decision to build a new product, and the team you choose to build it with, is a crucial, and even scary decision. That’s why we give you our promise: to do our very best and to always strive to do the right thing for your project, your users, and your team. We want you to think of us as your partners in this journey. So ask us anything!</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-process" data-ui="light">
                    <div className="container-fluid ">
                        <div className="row">
                            <div className="col-lg-6 pl-0">
                                <div className="image-block">
                                    <img src={processImg} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 pr-0">
                                <div className="content-block">
                                    <h3>Our Process</h3>
                                    <p>For an agency like ours having a process that has been refined over the last 10 years is our biggest advantage. It means that your product will be created quickly, efficiently and accurately to meet the needs.</p>
                                    <Link to="/process">Discover Our Process <i className="fas fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Start Team Section*/}
                <section className="team" data-ui="light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <div className="title text-left">
                                        <h2><span className="text-color">Meet The Core Team</span><br />Experience you can trust.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                             {/* team member item */}
                             <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-member">
                                        <figure className="team-member-img">
                                            <a rel="noopener noreferrer" href="/">
                                                <img src={require('../../../assets/img/team/team-member-1.png')} alt="" />
                                            </a>
                                        </figure>
                                        <div className="team-member-meta">
                                            <ul className="list-unstyled team-social-links">
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <h3><a rel="noopener noreferrer" href="/">Ershadul Hoque</a></h3>
                                        <p>Founder & CEO</p>
                                    </div>
                                </div>
                            </div>
                            {/* End team member item */}
                            {/* team member item */}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-member">
                                        <figure className="team-member-img">
                                            <a rel="noopener noreferrer" href="/">
                                                <img src={require('../../../assets/img/team/team-member-2.png')} alt="" />
                                            </a>
                                        </figure>
                                        <div className="team-member-meta">
                                            <ul className="list-unstyled team-social-links">
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <h3><a rel="noopener noreferrer" href="/">Mohammad Zaman</a></h3>
                                        <p>Advisor</p>
                                    </div>
                                </div>
                            </div>
                            {/* End team member item */}
                            {/* team member item */}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-member">
                                        <figure className="team-member-img">
                                            <a rel="noopener noreferrer" href="/">
                                                <img src={require('../../../assets/img/team/team-member-3.png')} alt="" />
                                            </a>
                                        </figure>
                                        <div className="team-member-meta">
                                            <ul className="list-unstyled team-social-links">
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <h3><a rel="noopener noreferrer" href="/">Francesco Patarnello</a></h3>
                                        <p>Advisor</p>
                                    </div>
                                </div>
                            </div>
                            {/* End team member item */}
                            {/* team member item */}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-member">
                                        <figure className="team-member-img">
                                            <a rel="noopener noreferrer" href="/">
                                                <img src={require('../../../assets/img/team/team-member-4.png')} alt="" />
                                            </a>
                                        </figure>
                                        <div className="team-member-meta">
                                            <ul className="list-unstyled team-social-links">
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <h3><a rel="noopener noreferrer" href="/">Kazi Ahsan Habib</a></h3>
                                        <p>Advisor</p>
                                    </div>
                                </div>
                            </div>
                            {/* End team member item */}
                            {/* team member item */}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-member">
                                        <figure className="team-member-img">
                                            <a rel="noopener noreferrer" href="/">
                                                <img src={require('../../../assets/img/team/team-member-5.png')} alt="" />
                                            </a>
                                        </figure>
                                        <div className="team-member-meta">
                                            <ul className="list-unstyled team-social-links">
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <h3><a rel="noopener noreferrer" href="/">Md. Zamilur Rahman</a></h3>
                                        <p>Advisor</p>
                                    </div>
                                </div>
                            </div>
                            {/* End team member item */}
                            {/* team member item */}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-member">
                                        <figure className="team-member-img">
                                            <a rel="noopener noreferrer" href="/">
                                                <img src={require('../../../assets/img/team/team-member-5.png')} alt="" />
                                            </a>
                                        </figure>
                                        <div className="team-member-meta">
                                            <ul className="list-unstyled team-social-links">
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <h3><a rel="noopener noreferrer" href="/">Md. Zamilur Rahman</a></h3>
                                        <p>Advisor</p>
                                    </div>
                                </div>
                            </div>
                            {/* End team member item */}
                            {/* team member item */}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-member">
                                        <figure className="team-member-img">
                                            <a rel="noopener noreferrer" href="/">
                                                <img src={require('../../../assets/img/team/team-member-5.png')} alt="" />
                                            </a>
                                        </figure>
                                        <div className="team-member-meta">
                                            <ul className="list-unstyled team-social-links">
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <h3><a rel="noopener noreferrer" href="/">Md. Zamilur Rahman</a></h3>
                                        <p>Advisor</p>
                                    </div>
                                </div>
                            </div>
                            {/* End team member item */}
                            {/* team member item */}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-member">
                                        <figure className="team-member-img">
                                            <a rel="noopener noreferrer" href="/">
                                                <img src={require('../../../assets/img/team/team-member-5.png')} alt="" />
                                            </a>
                                        </figure>
                                        <div className="team-member-meta">
                                            <ul className="list-unstyled team-social-links">
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a rel="noopener noreferrer" href="/" target="_blank">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <h3><a rel="noopener noreferrer" href="/">Md. Zamilur Rahman</a></h3>
                                        <p>Advisor</p>
                                    </div>
                                </div>
                            </div>
                            {/* End team member item */}
                        </div>
                    </div>
                </section>
                {/* End Team Section*/}
                <section className="award" data-ui="light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <div className="title text-center">
                                        <h2>Our awards and recognition</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="award-content">
                                    <img src={award} alt="" />
                                    <h3>CHAMPION</h3>
                                    <p>National Mobile Application Award 2014</p>
                                    <ul>
                                        <li><span>Category: </span>Entertainment & Lifestyle</li>
                                        <li><span>Game: </span><a href="/">Tap Tap Ants: Battlefield</a></li> </ul>
                                    <img src={ictAward} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="company-enterpreneurs" data-ui="light">
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
                <Footer />
            </div >
        )
    }
}
export default About;