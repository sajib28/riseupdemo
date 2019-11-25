import React, { Component } from 'react';
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import Banner from '../../commonTools/Banner';
import BackgroundImage from '../../../assets/img/event.jpg';
import eventImg1 from '../../../assets/img/write.jpg';
import apps1 from '../../../assets/img/Valrhona-Chocolate.jpg';
import apps2 from '../../../assets/img/rent-lion-image-2.jpg';
// import mixitup from 'mixitup';
import Isotope from 'isotope-layout';
import $ from 'jquery';
import {
    Link
} from "react-router-dom";

class Work extends Component {
    componentDidMount() {
        var Isotope = require('isotope-layout');

        var iso = new Isotope('.grid', {
            itemSelector: '.grid-item',
            percentPosition: true,
            layoutMode: 'masonry',
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
            filterValue = filterValue;
            iso.arrange({ filter: filterValue });
        });
    }

    render() {
        let alt = "Demo";
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
                <div class="button-group filters-button-group">
                    <button class="button is-checked" data-filter="*">show all</button>
                    <button class="button" data-filter=".cat1">Cat1</button>
                    <button class="button" data-filter=".cat2">Cat2</button>
                    <button class="button" data-filter=".cat3">Cat3</button>
                </div>
                <section>
                    <div className="container">
                        <div className="row grid">

                            <div class="grid-sizer"></div>
                            <div class="grid-item grid-item--width2">
                                <img src={require('../../../assets/img/project/meena-game.png')} alt="" />
                            </div>

                            <div class="grid-item">
                                <img src={require('../../../assets/img/project/adolescent-app.png')} alt="" />
                            </div>
                            <div class="grid-item grid-item--width2">
                                <img src={require('../../../assets/img/project/meena-game.png')} alt="" />
                            </div>

                            <div class="grid-item">
                                <img src={require('../../../assets/img/project/adolescent-app.png')} alt="" />
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