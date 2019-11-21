import React, { Component } from 'react';
import Slider from "react-slick";
import slid1 from '../../../assets/img/about-slider/about-slide-1.png';
import slid2 from '../../../assets/img/about-slider/about-slide-2.png';
import slid3 from '../../../assets/img/about-slider/about-slide-3.png';
class AboutSlider extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "0",
            slidesToShow: 3,
            speed: 500
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="image">
                        <img src={slid1} alt="" />
                    </div>
                    <div className="image">
                        <img src={slid2} alt="" />
                    </div>
                    <div className="image">
                        <img src={slid3} alt="" />
                    </div>
                    <div className="image">
                        <img src={slid1} alt="" />
                    </div>
                    <div className="image">
                        <img src={slid2} alt="" />
                    </div>
                    <div className="image">
                        <img src={slid3} alt="" />
                    </div>
                </Slider>
            </div>
        )
    }
}
export default AboutSlider;