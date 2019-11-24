import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap';
import '../assets/fontAwesome/css/fontawesome.min.css';
import '../assets/css/animate.min.css';
import '../assets/fontAwesome/css/all.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Main from './Main';
import Home from './page/home/Home';
// import Service from './page/service/Service';
import Process from './page/process/Process';
import Work from './page/work/Work';
import Work1 from './page/work/Work1';
// import Blog from './page/blog/Blog';
import Career from './page/career/Career';
import ApplicationForm from './page/career/ApplicationForm';
import About from './page/about/About';
import Contact from './page/contact/Contact';
import Apps from './page/Apps';
import Iets from './page/iets/Iets';
import AppsDetails from './page/app-details/AppDetails';
import SingleApp from './page/single-app/SingleApp';
// import WOW from 'wowjs';
// import Intro from '../components/intro/Intro';

// import { ParallaxProvider } from 'react-scroll-parallax';
// import Scrollbar from 'smooth-scrollbar';
import '../assets/scss/main.scss';
import $ from 'jquery';
class App extends Component {
    // Sidebar Menu Scroll
    componentDidMount() {
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
    }
    // componentDidMount() {
    //     $(window).scroll(function () {

    //     });
    //     var image = document.getElementsByClassName('parallax-content');
    //     new simpleParallax(image, {
    //         delay: .9,
    // transition: 'cubic-bezier(0,0,0,1)'
    //     });
    // Scrollbar.init(document.querySelector('#my-scrollbar'));

    // }
    render() {
        return (

            <div className="App">
                <Switch >
                    <Route path="/" render={() => <Home />} exact />
                    <Route path="/work" render={() => <Work />} />
                    <Route path="/work1" render={() => <Work1 />} />
                    <Route path="/process" component={Process} />
                    {/*  <Route path="/blog" render={() => <Blog />} /> */}
                    <Route path="/career" render={() => <Career />} />
                    <Route path="/about" component={props => <About {...props} />} />
                    <Route path="/contact" component={props => <Contact {...props} />} />

                    <Route path="/application-form" render={() => <ApplicationForm />} />
                    <Route path="/apps" render={() => < Apps />} />
                    <Route path="/iets" render={() => < Iets />} />
                    <Route path="/app-details" render={() => < AppsDetails />} />
                    <Route path="/single-app" render={() => < SingleApp />} />
                </Switch>
            </div>
        )
    }
}
export default App;