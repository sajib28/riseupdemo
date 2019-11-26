import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import './assets/fontAwesome/css/fontawesome.min.css';
import './assets/css/animate.min.css';
import './assets/fontAwesome/css/all.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/scss/main.scss';
// import $ from 'jquery';
import Home from './components/page/home/Home';
// import Service from './page/service/Service';
import Process from './components/page/process/Process';
import Work from './components/page/work/Work';
import Work1 from './components/page/work/Work1';
// import Blog from './page/blog/Blog';
import Career from './components/page/career/Career';
import ApplicationForm from './components/page/career/ApplicationForm';
import About from './components/page/about/About';
import Contact from './components/page/contact/Contact';
import Iets from './components/page/iets/Iets';
import AppsDevelopment from './components/page/apps-development/AppsDevelopment';
import SingleApp from './components/page/single-app/SingleApp';
import NotFound from './components/page/NotFound';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Home />
    )
  }
}
ReactDOM.render((
  <BrowserRouter>
    <Switch >
      <Route path={`${process.env.PUBLIC_URL}/`} exact component={App} />
      <Route path={`${process.env.PUBLIC_URL}/work`} component={Work} />
      <Route path={`${process.env.PUBLIC_URL}/work1`} component={Work1} />
      <Route path={`${process.env.PUBLIC_URL}/process`} component={Process} />
      <Route path={`${process.env.PUBLIC_URL}/career`} render={() => <Career />} />
      <Route path={`${process.env.PUBLIC_URL}/about`} component={props => <About {...props} />} />
      <Route path={`${process.env.PUBLIC_URL}/contact`} component={props => <Contact {...props} />} />
      <Route path={`${process.env.PUBLIC_URL}/application-form`} render={() => <ApplicationForm />} />
      <Route path={`${process.env.PUBLIC_URL}/iets`} render={() => < Iets />} />
      <Route path={`${process.env.PUBLIC_URL}/apps-development`} render={() => < AppsDevelopment />} />
      <Route path={`${process.env.PUBLIC_URL}/single-app`} render={() => < SingleApp />} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
