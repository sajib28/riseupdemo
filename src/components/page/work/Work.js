import React, { Component } from 'react';
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import Banner from '../../commonTools/Banner';
import BackgroundImage from '../../../assets/img/event.jpg';
import eventImg1 from '../../../assets/img/write.jpg';
import apps1 from '../../../assets/img/Valrhona-Chocolate.jpg';
import apps2 from '../../../assets/img/rent-lion-image-2.jpg';
import mixitup from 'mixitup';
import $ from 'jquery';
import {
    Link
} from "react-router-dom";

class Work extends Component {
    componentDidMount() {
        mixitup('.projectfilter');
        $(window).scroll(function () {
            var scrollDistance = $(window).scrollTop();

            // Show/hide menu on scroll
            //if (scrollDistance >= 850) {
            //		$('nav').fadeIn("fast");
            //} else {
            //		$('nav').fadeOut("fast");
            //}

            // Assign active class to nav links while scolling
            $('.page-section').each(function (i) {
                if ($(this).position().top <= scrollDistance) {
                    $('.navigation a.active').removeClass('active');
                    $('.navigation a').eq(i).addClass('active');
                }
            });
        }).scroll();

        $(window).scroll(function () {
            var a = $(window).scrollTop();
            var pos = $('#mainMenu').height();
            var b = $('.wrap').offset().top - pos;

            var m = $('.navigation').outerHeight() + $('#mainMenu').outerHeight();

            var fixtop = $('#mainMenu').outerHeight();
            var y = $('.project').offset().top - m;
            if (a > b) {
                $('.navigation').addClass('fixed').css({ 'top': fixtop + 'px' });
                $('.wrap').height($('.navigation').outerHeight());
            }
            else {
                $('.navigation').removeClass('fixed')
                $('.wrap').height(0);
            }
            if (a > y) {
                // alert('removed');
                $('.navigation').addClass('footstick');
                $('.wrap').height($('.navigation').outerHeight());

            }
            else {
                $('.navigation').removeClass('footstick');
            }
        });
    }

    render() {
        let alt = "Demo";
        return (
            <div className="page work">
                <Nav className="navbar navbar-expand-lg dark-color" />
                <Banner id="workBanner" backgroundImage={BackgroundImage} />

                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="wrap"></div>
                            <nav class="navigation sidemenu">
                                <a class="navigation__link" href="#1">Section 1</a>
                                <a class="navigation__link" href="#2">Section 2</a>
                                <a class="navigation__link" href="#3">Section 3</a>
                                <a class="navigation__link" href="#4">Section 4</a>
                                <a class="navigation__link" href="#5">Section 5</a>
                                <a class="navigation__link" href="#6">Section 6</a>
                                <a class="navigation__link" href="#7">Section 7</a>
                            </nav>
                        </div>
                        <div className="col-lg-9">
                            <div class="page-section hero" id="1">
                                <h1>Smooth scroll, fixed jump menu with active class</h1>
                            </div>
                            <div class="page-section" id="2">
                                <h1>Section Two</h1>
                            </div>
                            <div class="page-section" id="3">
                                <h1>Section Three</h1>
                            </div>
                            <div class="page-section" id="4">
                                <h1>Section Four</h1>
                            </div>
                            <div class="page-section" id="5">
                                <h1>Section Five</h1>
                            </div>
                            <div class="page-section" id="6">
                                <h1>Section Six</h1>
                            </div>
                            <div class="page-section" id="7">
                                <h1>Section Seven</h1>
                            </div>
                        </div>
                    </div>
                </div>
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