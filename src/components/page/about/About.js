import React, { Component } from 'react'
import Nav from '../../commonTools/Nav';
import Banner from '../../commonTools/Banner';
import BackgroundImage from '../../../assets/img/event.jpg';
import Footer from '../../commonTools/Footer';
class About extends Component {
    render() {
        return (
            <div className="page about">
                <Nav />
                <Banner id="aboutBanner" backgroundImage={BackgroundImage} />
                <div>
                    About Page
            </div>
                <Footer />
            </div>
        )
    }
}
export default About;