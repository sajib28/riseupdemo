import React, { Component } from 'react'
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
class AppDetails extends Component {
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
            <div className="page app-details">
                <Nav className="navbar navbar-expand-lg" />
                <section id="appDetailsBanner" className="banner middle-content" style={{ backgroundImage: `url(${require('../../../assets/img/banner/apps-details-banner.png')})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inroText display-bottom">
                                    <h1>Apps Development</h1>
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
                                            <li><i className="fab fa-apple"></i>ios</li>
                                            <li><i className="fab fa-android"></i>Android</li>
                                            <li><i className="fab fa-windows"></i>Windows Mobile</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8  order-lg-1">
                                <div className="content-padding">
                                    <p>We offer design, development, and solution for apps across a range of devices. We have developed many commercially successful apps for Apple App Store, Google Play Store and for some other platform. </p><br/>

                                    <p>We have millions of active users on those mobile apps. Some of our apps were also being featured by Apple for our unique creativity, design innovation & user feedback.</p><br/>
                                    <p>We also developed a few apps for our local clients in Bangladesh. Moreover, we are the partner of the Department of Agricultural Extension (DAE), under the Ministry of Agriculture in Bangladesh, to help them build their innovative apps for our local farmers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="app-development top-bottom-image">
                    <div className="container">
                        <div className="row">
                            <div className="align-middle">
                                <div className="col-lg-7 order-lg-1">
                                    <div className="content-block">
                                        <h2>Mobile App Development Solutions</h2>
                                        <ul className="list-unstyled list-with-hyphen">
                                            <li><span></span>iOS Apps development</li>
                                            <li><span></span>Android Apps development</li>
                                            <li><span></span>Cross-Platform</li>
                                            <li><span></span>iOS Apps development</li>
                                            <li><span></span>Windows Mobile</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-5 order-lg-2">
                                    <div className="double-img float-right">
                                        <img className="top-img" src={require('../../../assets/img/apps-solution-top.png')} alt="" />
                                        <img className="bottom-img" src={require('../../../assets/img/apps-solution-bottom.png')} alt="" />
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
                                        <h2 className="text-left"><span className="text-color">Some of our</span><br />Apps</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row app-list">
                            <div className="items">
                                <div className="col-lg-8">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/meet-meena.png')})` }}>

                                        </div>
                                        <div className="item-body">
                                            <h3>Meena Game</h3>
                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" />
                                            <p>Another mobile oriented channel that UNICEF intends to use to execute its Meena Communication Initiative (MCI) aimed at changing perceptions and behavior that hamper the survival</p>
                                            <a href="/apps-details" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/adolescent-app.png')})` }}>

                                        </div>
                                        <div className="item-body">
                                            <h3>Adolescent App</h3>
                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" />
                                            <p>A digital application for adolescent club members to connect, share knowledge and have access information.</p>
                                            <a href="/" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="col-lg-8">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/vimory-apps.png')})` }}>
                                        </div>
                                        <div className="item-body">
                                            <img src={require('../../../assets/img/project/vimory-logo.png')} alt="" />
                                            <p>Fun and fast, Vimory will help your social media posts stand out from the crowd; perfect for Facebook Profile video and Instagram video moments.</p>
                                            <a href="/" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/grido-apps.png')})` }}>
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
                                <a href="/" className="cus-btn details">See All<i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        )
    }
}
export default AppDetails;