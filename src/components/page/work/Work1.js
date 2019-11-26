import React, { Component } from 'react';
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
// import grid-itemitup from 'grid-itemitup';
// import Isotope from 'isotope-layout';
// import $ from 'jquery';
// import {Link} from "react-router-dom";

class Work extends Component {
    componentDidMount() {
        var Isotope = require('isotope-layout');

        var iso = new Isotope('.grid', {
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
        // bind filter button click
        var filtersElem = document.querySelector('.filters-button-group');
        filtersElem.addEventListener('click', function (event) {
            // only work with buttons
            var filterValue = event.target.getAttribute('data-filter');
            // use matching filter function
            // filterValue = filterValue;
            iso.arrange({ filter: filterValue });
        });
        
        // change is-checked class on buttons
        var buttonGroups = document.querySelectorAll('.button-group');
        for (var i = 0, len = buttonGroups.length; i < len; i++) {
            var buttonGroup = buttonGroups[i];
            radioButtonGroup(buttonGroup);
        }
        function radioButtonGroup( buttonGroup ) {
            buttonGroup.addEventListener( 'click', function( event ) {
              // only work with buttons
            //   if ( !matchesSelector( event.target, 'button' ) ) {
            //     return;
            //   }
              buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
              event.target.classList.add('is-checked');
            });
          }
    }

    render() {
        // let alt = "Demo";
        return (
            <div className="page work">
                <Nav className="navbar navbar-expand-lg" />
                <section id="careerForm" className="banner middle-content" style={{ backgroundImage: `url(${require('../../../assets/img/banner/career-banner.png')})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inroText">
                                    <h1><span className="text-color">Game </span>Artist</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="project app-list">
                    <div className="projectfilter app-list">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div class="button-group filters-button-group">
                                        <button className="button is-checked" data-filter="*">All</button>
                                        <button className="button" data-filter=".client">Client</button>
                                        <button className="button" data-filter=".rise-up">Rise up</button>
                                        <button className="button" data-filter=".app">App</button>
                                        <button className="button" data-filter=".game">Game</button>
                                        <button className="button" data-filter=".x-r">X-R</button>
                                        <button className="button" data-filter=".web-system">Web System</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row grid">
                                <div className="grid-sizer"></div>
                                <div className="col-lg-8 grid-item x-r grid-item--width2 app">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/meet-meena.png')})` }}>

                                        </div>
                                        <div className="item-body">
                                            <h3>Meena Game</h3>
                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" />
                                            <p>Another mobile oriented channel that UNICEF intends to use to execute its Meena Communication Initiative (MCI) aimed at changing perceptions and behavior that hamper the survival</p>
                                            <a rel="noopener noreferrer" href="/apps-details" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 grid-item web-system">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/adolescent-app.png')})` }}>

                                        </div>
                                        <div className="item-body">
                                            <h3>Adolescent App</h3>
                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" />
                                            <p>A digital application for adolescent club members to connect, share knowledge and have access information.</p>
                                            <a rel="noopener noreferrer" href="/" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 grid-item game x-r app">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/grido-apps.png')})` }}>

                                        </div>
                                        <div className="item-body">
                                            {/* <h3>Meena Game</h3> */}
                                            <img src={require('../../../assets/img/project/grido-logo.png')} alt="" />
                                            <p>Another mobile oriented channel that UNICEF intends to use to execute its Meena Communication Initiative (MCI) aimed at changing perceptions and behavior that hamper the survival</p>
                                            <a rel="noopener noreferrer" href="/apps-details" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 grid-item grid-item--width2 app client rise-up">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/vimory-apps.png')})` }}>

                                        </div>
                                        <div className="item-body">
                                            {/* <h3>Adolescent App</h3> */}
                                            <img src={require('../../../assets/img/project/vimory-logo.png')} alt="" />
                                            <p>Fun and fast, Vimory will help your social media posts stand out from the crowd; perfect forFacebook Profile video and Instagram video moments.</p>
                                            <a rel="noopener noreferrer" href="/" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 grid-item grid-item--width2 web-system app game">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/ants-battlefield.png')})` }}>

                                        </div>
                                        <div className="item-body">
                                            <h3>Tap Tap Ants: Battlefield</h3>
                                            {/* <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" /> */}
                                            <p>Are you looking for ant games for kids or your own? Do you have enough tapping skills to protect your food?</p>
                                            <a rel="noopener noreferrer" href="/apps-details" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 grid-item x-r client app">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/rooftop-frenzy.png')})` }}>

                                        </div>
                                        <div className="item-body">
                                            <h3>Rooftop Frenzy</h3>
                                            {/* <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" /> */}
                                            <p>A digital application for adolescent club members to connect, share knowledge and have access information.</p>
                                            <a rel="noopener noreferrer" href="/" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 grid-item client app">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/language-movement.png')})` }}>

                                        </div>
                                        <div className="item-body">
                                            <h3>Meena Game</h3>
                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" />
                                            <p>Another mobile oriented channel that UNICEF intends to use to execute its Meena Communication Initiative (MCI) aimed at changing perceptions and behavior that hamper the survival</p>
                                            <a rel="noopener noreferrer" href="/apps-details" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 grid-item grid-item--width2 game app x-r web-system  client">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/meena-game.png')})` }}>

                                        </div>
                                        <div className="item-body">
                                            <h3>Adolescent App</h3>
                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" />
                                            <p>A digital application for adolescent club members to connect, share knowledge and have access information.</p>
                                            <a rel="noopener noreferrer" href="/" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div >
        )
    }
}
export default Work;