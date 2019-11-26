import React, { Component } from 'react';
import Slider from "react-slick";
// import slid1 from '../../../assets/img/about-slider/about-slide-1.png';
// import slid2 from '../../../assets/img/about-slider/about-slide-2.png';
// import slid3 from '../../../assets/img/about-slider/about-slide-3.png';

const aboutSlider =[
{
    about_img:require('../../../assets/img/about-slider/about-slide-1.png'),
    alt_img:'demo1'
},
{
    about_img:require('../../../assets/img/about-slider/about-slide-2.png'),
    alt_img:'demo2'  
},
{
    about_img:require('../../../assets/img/about-slider/about-slide-3.png'),
    alt_img:'demo3'
},
{
    about_img:require('../../../assets/img/about-slider/about-slide-1.png'),
    alt_img:'demo3'
}
]

const getSlider = aboutSlider.map( (singleSlider,i)=>{
return(
    <div className="image" key={i}>
            <img src={singleSlider.about_img} alt={singleSlider.alt_img} />
    </div>
)
})



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
                    {getSlider}
                </Slider>
            </div>
        )
    }
}
export default AboutSlider;