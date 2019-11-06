import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import 'bootstrap';
import '../assets/fontAwesome/css/fontawesome.min.css';
import '../assets/fontAwesome/css/all.min.css';
import Home from './page/home/Home';
import Service from './page/service/Service';
import Press from './page/press/Press';
import Work from './page/work/Work';
import Blog from './page/blog/Blog';
import Career from './page/career/Career';
import CareerForm from './page/career/CareerForm';
import About from './page/about/About';
import Apps from './page/Apps';
import Iets from './page/iets/Iets';
import NewsDetails from './page/press/NewsDetails';
import EventDetails from './page/press/EventDetails';
// import Intro from '../components/intro/Intro';
// import simpleParallax from 'simple-parallax-js';
// import Scrollbar from 'smooth-scrollbar';
import '../assets/scss/main.scss';
import $ from 'jquery';
class App extends Component {
    componentDidMount() {
        $(window).scroll(function() {
            // sectionTop = $('section[data-ui="dark"]').offset().top;
            // if(sectionTop){
            //     $('.service-menu').addClass("ui-dark");
            // }
           
          });
        // var image = document.getElementsByClassName('parallax-content');
        // new simpleParallax(image, {
        // });
        // Scrollbar.init(document.querySelector('#my-scrollbar'));

    }
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch >
                        <Route path="/" render={() => <Home />} exact />
                        <Route path="/service" render={() => <Service />} />
                        <Route path="/work" render={() => <Work />} />
                        <Route path="/press" render={() => <Press />} />
                        <Route path="/blog" render={() => <Blog />} />
                        <Route path="/career" render={() => <Career />} />
                        <Route path="/about" render={() => <About />} />
                        <Route path="/career-form" render={() => <CareerForm />} />
                        <Route path="/apps" render={() => < Apps />} />
                        <Route path="/iets" render={() => < Iets />} />
                        <Route path="/news-details" render={() => < NewsDetails />} />
                        <Route path="/event-details" render={() => < EventDetails />} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default App;