import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import Nav from '../../commonTools/Nav';
import Slider from "react-slick";
import CompanySummary from '../../commonTools/CompanySummary';
import Footer from '../../commonTools/Footer';
class Iets extends Component {
  componentDidMount() {
    var bottomImg = document.getElementsByClassName("bottom-img")[0];
    var TopImg = document.getElementsByClassName("top-img")[0];
    bottomImg.addEventListener("click", function (event) {
        bottomImg.classList.add("show-top");
        TopImg.classList.remove("show-top");
    });
    var TopImg = document.getElementsByClassName("top-img")[0];
    TopImg.addEventListener("click", function (event) {
        TopImg.classList.add("show-top");
        bottomImg.classList.remove("show-top");
    });
  }
  
    render() {
        return (

            <div className="page iets">
                <Nav className="navbar navbar-expand-lg" />
                <section id="appDetailsBanner" className="banner middle-content" style={{ backgroundImage: `url(${require('../../../assets/img/banner/iets-banner.png')})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="introText display-bottom">
                                    <h1>ITES</h1>
                                    <p>Information Technology Enabled Service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="top-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 order-lg-2">
                                <div className="list-box">
                                    <div className="list-box-inner">
                                        <ul className="list-unstyled">
                                            <li><i className="fab fa-apple"></i>HR Service</li>
                                            <li><i className="fab fa-android"></i>Development</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8  order-lg-1">
                                <div className="content-padding">
                                    <p>Riseup is one of the emerging leaders as the premier IT/ITES service provider, serving its customers and delivering IT & ITES Solutions to a diverse set of clients in several countries across the globe. The company is backed up with a management team which brings in over 10 years of software development and consultancy experience spread all across the world, specializing in small to enterprise level of system development, implementation and integration services. </p><br />

                                    <p>Our mission is to provide Quality and Value based Solutions for the needs of our Customers to improve their business processes, while helping our Employees achieve their Personal Goals, all in congruence with our organization’s focus on quality, professionalism, satisfaction and fun.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="advantage content">
                    <div className="container">
                        <div className="row">
                            <div className="vertical-middle">
                                <div className="col-lg-7">
                                    <div className="content-block">
                                        <h2><span className="text-color">RiseUp</span> Advantage</h2>
                                        <p>We strive to accomplish our vision with brilliance, transparency and ethics. We aim at satisfying our clients, employees, investors and stakeholders with unmatched resources, services and solutions.</p>
                                        <p>At Riseup, we have always considered quality service and customer experience as our core business strategy. Our entire service portfolio is organized and built to assist our clients. Here’s what sets us apart:</p>
                                        <ul className="list-unstyled list-with-hyphen">
                                            <li><span></span>Over 10 years of Software Industry Experience</li>
                                            <li><span></span>Diverse Technical Skills, all under One Roof</li>
                                            <li><span></span>Exponential growth since the inception</li>
                                            <li><span></span>Customer-Centric Engagement Models</li>
                                            <li><span></span>Proven Development Methodologies</li>
                                            <li><span></span>Access to Well-trained & Qualified Professionals</li>
                                            <li><span></span>100% Compliant with Regulation</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="img-block">
                                        <img className="float-right" src={require('../../../assets/img/riseup-advantage.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="top-bottom-image team-strength dark-bg">
                    <div className="container">
                        <div className="row">
                            <div className="align-middle">
                                <div className="col-lg-6 order-lg-2">
                                    <div className="content-block">
                                        <h2><span className="text-color">Team</span> Strength</h2>
                                        <p>Riseup have enough and highly qualified manpower. So that For
each project Riseup assign a single team to maintain a quality work. And each team include -</p>
                                        <ul className="list-unstyled list-with-hyphen">
                                            <li><span></span>Project Manager</li>
                                            <li><span></span>Architect</li>
                                            <li><span></span>Product Designer</li>
                                            <li><span></span>UI/UX Designer</li>
                                            <li><span></span>2D Artist</li>
                                            <li><span></span>3D Artist</li>
                                            <li><span></span>Font-End Developer</li>
                                            <li><span></span>Back-End Developer</li>
                                            <li><span></span>Q/A Engineer</li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-1">
                                    <div className="double-img float-right">
                                        <img className="top-img" src={require('../../../assets/img/apps-solution-top.png')} alt="" />
                                        <img className="bottom-img" src={require('../../../assets/img/apps-solution-bottom.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Client Info Section */}
                <section className="client-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <div className="title">
                                        <h2 className="text-left"><span className="text-color">Why</span> Us</h2>
                                        <p>We believe that we succeed when our clients succeed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CompanySummary />
                </section>
                {/* End Client Info Section */}
                {/* Start Tools And Technology */}
                <section className="tools-and-tech dark-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <div className="title">
                                        <h2 className="text-left"><span className="text-color">Tools &</span> Technologies</h2>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="accordion" id="accordionExample">
                                    <div className="card dark-bg">
                                        <div className="card-header" id="headingOne">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Mobile Frameworks <i className="fas fa-chevron-down"></i></button>
                                            </h2>
                                        </div>

                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="card-body-inner">
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/ios.png')} alt="" />
                                                        </div>
                                                        <span>Android</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/android.png')} alt="" />
                                                        </div>
                                                        <span>Android</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/react.png')} alt="" />
                                                        </div>
                                                        <span>React Native</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/firebase.png')} alt="" />
                                                        </div>
                                                        <span>Firebase</span>
                                                    </a>

                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/windows.png')} alt="" />
                                                        </div>
                                                        <span>Universal Windows Platform</span>
                                                    </a>

                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/unity.png')} alt="" />
                                                        </div>
                                                        <span>Unity 2D/3D</span>
                                                    </a>

                                                    {/* test  
                                                                
                                                                <div className="col-sm-3 col-md-3 col-lg-2 pl-0 pr-0">
                                                            <a href="/" className="border-shadow">
                                                                <img src={require('../../../assets/img/tools-technology/ios.png')} alt="" />
                                                                <span>Android</span>
                                                            </a>
                                                        </div>
                                                        <div className="col-sm-3 col-md-3 col-lg-2 pl-0 pr-0">
                                                            <a href="/" className="border-shadow">
                                                                <img src={require('../../../assets/img/tools-technology/android.png')} alt="" />
                                                                <span>Android</span>
                                                            </a>
                                                        </div>
                                                        <div className="col-sm-3 col-md-3 col-sm-3 col-md-3 col-lg-2 pl-0 pr-0">
                                                            <a href="/" className="border-shadow">
                                                                <img src={require('../../../assets/img/tools-technology/react.png')} alt="" />
                                                                <span>React Native</span>
                                                            </a>
                                                        </div>
                                                        <div className="col-sm-3 col-md-3 col-lg-2 pl-0 pr-0">
                                                            <a href="/" className="border-shadow">
                                                                <img src={require('../../../assets/img/tools-technology/firebase.png')} alt="" />
                                                                <span>Firebase</span>
                                                            </a>
                                                        </div>
                                                        <div className="col-sm-3 col-md-3 col-lg-2 pl-0 pr-0">
                                                            <a href="/" className="border-shadow">
                                                                <img src={require('../../../assets/img/tools-technology/windows.png')} alt="" />
                                                                <span>Universal Windows Platform</span>
                                                            </a>
                                                        </div>
                                                        <div className="col-sm-3 col-md-3 col-lg-2 pl-0 pr-0">
                                                            <a href="/" className="border-shadow">
                                                                <img src={require('../../../assets/img/tools-technology/unity.png')} alt="" />
                                                                <span>Unity 2D/3D</span>
                                                            </a>
                                                        </div>
                                                                
                                                                */}


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card dark-bg">
                                        <div className="card-header" id="headingTwo">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">Cloud Technologies  <i className="fas fa-chevron-down"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="card-body-inner">
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/microsoft_net.png')} alt="" />
                                                        </div>
                                                        <span>iOS</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/asp-net.png')} alt="" />
                                                        </div>
                                                        <span>ASP.NET MVC</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/aws.png')} alt="" />
                                                        </div>
                                                        <span>Amazon web Service</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/azure.png')} alt="" />
                                                        </div>
                                                        <span>Azure</span>
                                                    </a>

                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/wordpress.png')} alt="" />
                                                        </div>
                                                        <span>Wordpress</span>
                                                    </a>

                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/react.png')} alt="" />
                                                        </div>
                                                        <span>ReactJs</span>
                                                    </a>

                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/go.png')} alt="" />
                                                        </div>
                                                        <span>Go</span>
                                                    </a>

                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/angular.png')} alt="" />
                                                        </div>
                                                        <span>Angular Js</span>
                                                    </a>

                                                    <a href="/" className="border-shadow">

                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/yii.png')} alt="" />
                                                        </div>
                                                        <span>Yii</span>
                                                    </a>

                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/node.jpg')} alt="" />
                                                        </div>
                                                        <span>NodeJs</span>
                                                    </a>

                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/activedirectory.png')} alt="" />
                                                        </div>
                                                        <span>Active Directory</span>
                                                    </a>

                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/laravel.png')} alt="" />
                                                        </div>
                                                        <span>Laravel</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card dark-bg">
                                        <div className="card-header" id="headingThree">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">Database Technologies <i className="fas fa-chevron-down"></i></button>
                                            </h2>
                                        </div>
                                        <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="card-body-inner">
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/sql-server.png')} alt="" />
                                                        </div>
                                                        <span>SQL Server</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/mysql.png')} alt="" />
                                                        </div>
                                                        <span>MySQL</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/postgresql.png')} alt="" />
                                                        </div>
                                                        <span>PostgreSQL</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card dark-bg">
                                        <div className="card-header" id="headingFour">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">3rd Party Integrations <i className="fas fa-chevron-down"></i></button>
                                            </h2>
                                        </div>
                                        <div id="collapseFour" className="collapse show" aria-labelledby="headingFour" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="card-body-inner">
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/stripe.png')} alt="" />
                                                        </div>
                                                        <span>Stripe</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/braintree.png')} alt="" />
                                                        </div>
                                                        <span>Braintree</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/twilio.png')} alt="" />
                                                        </div>
                                                        <span>Twilio</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/mandrill-mailchimp.png')} alt="" />
                                                        </div>
                                                        <span>Mandrill (MailChimp)</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/sendgrid.jpg')} alt="" />
                                                        </div>
                                                        <span>SendGrid</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/booker.png')} alt="" />
                                                            </div>
                                                            <span>Booker</span>
                                                        
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/maps-people.png')} alt="" />
                                                        </div>
                                                        <span>MapsPeople</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/mixpanel.jpeg')} alt="" />
                                                        </div>
                                                        <span>Mixpanel</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/flurry.png')} alt="" />
                                                        </div>
                                                        <span>Flurry</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/amadeus.png')} alt="" />
                                                        </div>
                                                        <span>Amadeus</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/clover.png')} alt="" />
                                                        </div>
                                                        <span>Clover POS</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/google-maps.png')} alt="" />
                                                        </div>
                                                        <span>Google Maps</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/mapbox.png')} alt="" />
                                                        </div>
                                                        <span>Mapbox</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/facebook.png')} alt="" />
                                                        </div>
                                                        <span>Facebook</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/twitter.png')} alt="" />
                                                        </div>
                                                        <span>Twitter</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/openears_icon_reflection.png')} alt="" />
                                                        </div>
                                                        <span>OpenEars Voice Recognition</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/linkedin.png')} alt="" />
                                                        </div>
                                                        <span>LinkedIn</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/foursquare.png')} alt="" />
                                                        </div>
                                                        <span>Foursquare</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/big-oven.jpg')} alt="" />
                                                        </div>
                                                        <span>Big Oven</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/single-platform.png')} alt="" />
                                                        </div>
                                                        <span>SinglePlatform</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/yelp.png')} alt="" />
                                                        </div>
                                                        <span>Yelp</span>

                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/athena-health.jpg')} alt="" />
                                                        </div>
                                                        <span>Athena Health</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="card dark-bg">
                                        <div className="card-header" id="headingFive">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">Programming Languages <i className="fas fa-chevron-down"></i></button>
                                            </h2>
                                        </div>
                                        <div id="collapseFive" className="collapse show" aria-labelledby="headingFive" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="card-body-inner">
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/swift.png')} alt="" />
                                                        </div>
                                                        <span>Swift</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/java.jpg')} alt="" />
                                                        </div>
                                                        <span>Java</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/csharp.png')} alt="" />
                                                        </div>
                                                        <span>C#</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/javascript.png')} alt="" />
                                                        </div>
                                                        <span>JavaScript</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/c-plus-plus.png')} alt="" />
                                                        </div>
                                                        <span>C/C++</span>
                                                    </a>
                                                    <a href="/" className="border-shadow">
                                                        <div className="img-inner">
                                                            <img src={require('../../../assets/img/tools-technology/go.png')} alt="" />
                                                        </div>
                                                        <span>Go</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Start Worked With*/}
                <section className="working-brand">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <div className="title">
                                        <h2 className="text-left"><span className="text-color">We have</span><br />worked with</h2>
                                        <p>Trusted by the world's leading brands and entrepreneurs alike.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-6 text-center">
                                <a href="/" className="border-shadow"><img src={require('../../../assets/img/company-logo/google.png')} alt="" /></a>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-6 text-center">
                                <a href="/" className="border-shadow"><img src={require('../../../assets/img/company-logo/facebook.png')} alt="" /></a>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-6 text-center">
                                <a href="/" className="border-shadow"><img src={require('../../../assets/img/company-logo/apple.png')} alt="" /></a>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-6 text-center">
                                <a href="/" className="border-shadow"><img src={require('../../../assets/img/company-logo/unity.png')} alt="" /></a>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-6 text-center">
                                <a href="/" className="border-shadow"><img src={require('../../../assets/img/company-logo/unreal-engine.png')} alt="" /></a>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-6 text-center">
                                <a href="/" className="border-shadow"><img src={require('../../../assets/img/company-logo/magic-leap.png')} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Worked With */}

                <Footer />
            </div>
        )
    }
}
export default Iets;