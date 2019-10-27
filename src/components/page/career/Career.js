import React, { Component } from 'react'
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import Banner from '../../commonTools/Banner';
import BackgroundImage from '../../../assets/img/event.jpg';
import Accordion from './Accordion';
class Career extends Component {
    render() {
        return (
            <div className="career">
                <Nav />
                <Banner id="careerBanner" backgroundImage={BackgroundImage} />
                <section className="career-position">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Accordion />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div >
        )
    }
}
export default Career;