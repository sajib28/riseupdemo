import React, { Component } from 'react';
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import Banner from '../../commonTools/Banner';
import BackgroundImage from '../../../assets/img/event.jpg';
import newsIntro from '../../../assets/img/intro.jpg';
import {
    Link
} from "react-router-dom";

export default class EventDetails extends Component {
    render() {
        let alt = "demo";
        return (
            <div className="page news-details">
            <Nav />
            <Banner id="PressBanner" title="Our Expertice Makes Headline" backgroundImage={BackgroundImage} />
                <section className="event-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="short-info">
                                    <img src={newsIntro} alt={alt} />
                                    <h2>Lorem ipsum dolor sit amet</h2>
                                    <div className="date-time">
                                        <span className="date">Dec 6 -dec 9</span>
                                        <span className="time">10pm</span>
                                        <h5 className="place">Lorem ipsum dolor sit amet</h5>
                                    </div>
                                </div>
                                <div className="content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nemo, ipsam, incidunt saepe nisi est architecto corrupti consequatur tempore totam numquam alias sed! Esse quisquam error facere vero non? Adipisci!
                                    Debitis eos voluptate explicabo, nemo minus aperiam accusantium velit minima tempore esse sint dicta inventore culpa odio totam maiores? Nesciunt officia eaque distinctio reprehenderit consectetur vitae sint deleniti, exercitationem dolorum?
                                    Quae corporis ullam reprehenderit ipsa iure eius minus, architecto eveniet! Voluptas, veritatis! Amet repellendus nulla quibusdam repudiandae necessitatibus cumque laboriosam eum dolorem quasi, enim, earum magni, vitae nesciunt temporibus totam!</p><br />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eligendi non quae corporis laborum dolor, nihil delectus, debitis assumenda id iste molestiae, illo suscipit deserunt quibusdam. Perspiciatis reprehenderit qui fuga?
                                    Omnis praesentium velit, laudantium exercitationem molestiae recusandae minus, ea cupiditate rem, numquam temporibus totam. Illo eum quibusdam optio ipsam. A alias quam molestias omnis quod minima nisi sapiente! Maiores, quia?
                                    Animi beatae quis odit consequuntur molestias laborum facere minima non delectus, magnam commodi officia, laboriosam nobis, maxime ab maiores rerum accusantium eius perferendis. Ipsum aliquid, debitis quaerat necessitatibus tempora accusantium?</p>
                                </div>
                                <div className="social-media">
                                    <h5>Share On</h5>
                                    <ul className="list-unstyled">
                                        <li><Link to="/"><i className="fa fa-facebook"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}
