import React, { Component } from 'react';
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import Banner from '../../commonTools/Banner';
import BackgroundImage from '../../../assets/img/event.jpg';
import eventImg1 from '../../../assets/img/write.jpg';
import apps1 from '../../../assets/img/Valrhona-Chocolate.jpg';
import apps2 from '../../../assets/img/rent-lion-image-2.jpg';
import mixitup from 'mixitup';
import Masonry from 'masonry-layout';

import $ from 'jquery';
import {
    Link
} from "react-router-dom";

class Work extends Component {
    componentDidMount() {
        mixitup('.grid');
        // var $grid = $('.grid').masonry({
        //     itemSelector: '.grid-item',
        //     percentPosition: true,
        //     columnWidth: '.grid-sizer'
        // });

        // $grid.imagesLoaded().progress(function () {
        //     $grid.masonry();
        // });
        var elem = document.querySelector('.grid');
        var msnry = new Masonry(elem, {
            itemSelector: '.grid-item',
            percentPosition: true,
            columnWidth: '.grid-sizer'
        });
        // $(".mix:odd").addClass('reverse-items');
    }

    render() {
        let alt = "Demo";
        return (
            <div className="page work">
                <Nav className="navbar navbar-expand-lg" />
                <Banner id="workBanner" backgroundImage={BackgroundImage} />
                <button type="button" data-filter="all">All</button>
                <button type="button" data-filter=".client">Client</button>
                <button type="button" data-filter=".rise-up">Rise up</button>
                <button type="button" data-filter=".app">App</button>
                <button type="button" data-filter=".game">Game</button>
                <button type="button" data-filter=".x-r">X-R</button>
                <button type="button" data-filter=".web-system">Web System</button>
                <section>
                    <div class="grid">
                        <div class="grid-sizer"></div>
                        <div class="grid-item mix x-r">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" />
                        </div>
                        <div class="grid-item mix client">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg" />
                        </div>
                        <div class="grid-item mix app game">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg" />
                        </div>
                        <div class="grid-item mix rise-up">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg" />
                        </div>
                        <div class="grid-item mix game x-r">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg" />
                        </div>
                        <div class="grid-item mix web-system">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg" />
                        </div>
                        <div class="grid-item mix x-r game">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/contrail.jpg" />
                        </div>
                        <div class="grid-item mix x-r app">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/golden-hour.jpg" />
                        </div>
                        <div class="grid-item mix game">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg" />
                        </div>
                    </div>

                </section>
                <Footer />
            </div >
        )
    }
}
export default Work;