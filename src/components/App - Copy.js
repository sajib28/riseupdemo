import React, { Component } from 'react';
import 'bootstrap';
import '../assets/fontAwesome/css/fontawesome.min.css';
import '../assets/css/animate.min.css';
import '../assets/fontAwesome/css/all.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Main from './Main';
// import WOW from 'wowjs';
// import Intro from '../components/intro/Intro';
import Home from './page/home/Home';
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
                <Home/>
            </div>
        )
    }
}
export default App;