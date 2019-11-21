import React, { Component } from 'react'
import Slider from "react-slick";
class HomeSlider extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "0",
            swipeToSlide: true,
            slidesToShow: 1,
            speed: 500
        };
        return (
            <div id="homeSlider">
                <Slider {...settings}>
                    <div>
                        <img src={require('../../assets/img/home-slider/home-slide-1.jpg')} alt="" />

                        <div className="inroText">
                            <h1><span className="text-uppercase text-color">Riseup</span><br />Beyond Reality Driving <br />into Technology</h1>
                        </div>
                    </div>
                    <div>
                        <img src={require('../../assets/img/home-slider/home-slide-2.png')} alt="" />

                        <div className="inroText">
                            <h1><span className="text-uppercase text-color">Riseup</span><br />Beyond Reality Driving <br />into Technology</h1>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}
export default HomeSlider;