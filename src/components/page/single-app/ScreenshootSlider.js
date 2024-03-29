import React, { Component } from 'react'
import Slider from "react-slick";
// import 'slick-carousel'
// import $ from 'jquery';
class ScreenshootSlider extends Component {
    componentDidMount() {
        // $(function () {
        //     $('#slick').on('init', function (event, slick) {
        //         $(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
        //         $('.current').text(slick.currentSlide + 1);
        //         $('.total').text(slick.slideCount);
        //     })
        //         .slick({

        //         })
        //         .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        //             $('.current').text(nextSlide + 1);
        //         });
        // });
    }

    render() {
        const settings = {
            infinite: true,
            slidesToShow: 2,
            swipeToSlide: true,
            speed: 500,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        return (
            // <div id="slick">
            <Slider {...settings}>
                <div className="image">
                    <img src={require('../../../assets/img/screenshot-slider/screenshot-1.png')} alt="" />
                </div>
                <div className="image">
                    <img src={require('../../../assets/img/screenshot-slider/screenshot-1.png')} alt="" />
                </div>
                <div className="image">
                    <img src={require('../../../assets/img/screenshot-slider/screenshot-1.png')} alt="" />
                </div>
                <div className="image">
                    <img src={require('../../../assets/img/screenshot-slider/screenshot-1.png')} alt="" />
                </div>
                {/* </div> */}
            </Slider >

        )
    }
}
export default ScreenshootSlider;