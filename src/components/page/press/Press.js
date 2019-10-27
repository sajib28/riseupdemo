import React, { Component } from 'react';
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import Banner from '../../commonTools/Banner';
import BackgroundImage from '../../../assets/img/event.jpg';
import eventImg1 from '../../../assets/img/app.jpg';
import newsIntro from '../../../assets/img/intro.jpg';
import nationalFather from '../../../assets/img/national-father.png';
import {
    Link
} from "react-router-dom";
import $ from 'jquery';
class Press extends Component {
    componentDidMount() {
        $('.inroText h1').each(function () {

            var text = $(this).text().split(' ');
            if (text.length < 2)
                return;
            text[0] = '<span class="firstWord">' + text[0] + '</span>';
            $(this).html(text.join(' '));

        });
    }
    render() {
        let alt = "demo";
        return (

            <div className="page press">
                <Nav />
                <Banner id="PressBanner" title="Our Expertice Makes Headline" backgroundImage={BackgroundImage} />
                <section className="event">
                    <div className="container">
                        <div className="row">
                            {/* event item */}
                            <div className="event-item">
                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <img src={nationalFather} alt={alt} />
                                    </div>

                                </div>
                                <div className="col-lg-6">
                                    <div className="content-block">
                                        <h2>Lorem ipsum dolor sit amet</h2>
                                        <div className="date-time">
                                            <span className="date">Dec 6 -dec 9</span>
                                            <span className="time">10pm</span>
                                            <h5 className="place">Lorem ipsum dolor sit amet</h5>
                                        </div>
                                        <Link to="/">Details</Link>
                                    </div>
                                </div>
                            </div>
                            {/* End event item */}
                            {/* event item */}
                            <div className="event-item">
                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <img src={nationalFather} alt={alt} />
                                    </div>

                                </div>
                                <div className="col-lg-6">
                                    <div className="content-block">
                                        <h2>Lorem ipsum dolor sit amet</h2>
                                        <div className="date-time">
                                            <span className="date">Dec 6 -dec 9</span>
                                            <span className="time">10pm</span>
                                            <h5 className="place">Lorem ipsum dolor sit amet</h5>
                                        </div>
                                        <Link to="/">Details</Link>
                                    </div>
                                </div>
                            </div>
                            {/* End event item */}
                            {/* event item */}
                            <div className="event-item">
                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <img src={nationalFather} alt={alt} />
                                    </div>

                                </div>
                                <div className="col-lg-6">
                                    <div className="content-block">
                                        <h2>Lorem ipsum dolor sit amet</h2>
                                        <div className="date-time">
                                            <span className="date">Dec 6 -dec 9</span>
                                            <span className="time">10pm</span>
                                            <h5 className="place">Lorem ipsum dolor sit amet</h5>
                                        </div>
                                        <Link to="/">Details</Link>
                                    </div>
                                </div>
                            </div>
                            {/* End event item */}
                        </div>
                    </div>
                </section>
                <section className="news">
                    <div className="container">
                        <div className="row">
                            {/* odd */}

                            <div className="news-items">

                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <img src={eventImg1} alt={alt} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="content-block">
                                        <span className="date">dec 06 2019</span>
                                        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda officiis deleniti repellat optio</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia quo nulla sunt nam maiores odit ratione earum, vel optio, quasi exercitationem beatae asperiores eum corrupti distinctio praesentium assumenda odio.Facilis omnis officia delectus? Incidunt sint quaerat deserunt odio impedit quidem quasi corporis necessitatibus explicabo reprehenderit quisquam, cupiditate aut vitae unde eos labore soluta. Voluptates, illum repellendus? Debitis, veritatis cum.</p>
                                        <Link to="/">Details</Link>
                                    </div>
                                </div>

                            </div>
                            {/* End Odd */}

                            {/* Even */}

                            <div className="news-items">

                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <img src={eventImg1} alt={alt} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="content-block">
                                        <span className="date">dec 06 2019</span>
                                        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda officiis deleniti repellat optio</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia quo nulla sunt nam maiores odit ratione earum, vel optio, quasi exercitationem beatae asperiores eum corrupti distinctio praesentium assumenda odio.Facilis omnis officia delectus? Incidunt sint quaerat deserunt odio impedit quidem quasi corporis necessitatibus explicabo reprehenderit quisquam, cupiditate aut vitae unde eos labore soluta. Voluptates, illum repellendus? Debitis, veritatis cum.</p>
                                        <Link to="/">Details</Link>
                                    </div>
                                </div>

                            </div>
                            {/* odd */}

                            <div className="news-items">

                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <img src={eventImg1} alt={alt} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="content-block">
                                        <span className="date">dec 06 2019</span>
                                        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda officiis deleniti repellat optio</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia quo nulla sunt nam maiores odit ratione earum, vel optio, quasi exercitationem beatae asperiores eum corrupti distinctio praesentium assumenda odio.Facilis omnis officia delectus? Incidunt sint quaerat deserunt odio impedit quidem quasi corporis necessitatibus explicabo reprehenderit quisquam, cupiditate aut vitae unde eos labore soluta. Voluptates, illum repellendus? Debitis, veritatis cum.</p>
                                        <Link to="/">Details</Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Odd */}
                        </div>
                    </div>
                </section>
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
                <section className="news-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="short-info">
                                    <h2>Lorem ipsum dolor sit amet</h2>
                                    <div className="date-time">
                                        <span className="date">Dec 6 -dec 9</span>
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
                                <div className="short-info">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <img src={nationalFather} alt={alt} />
                                        </div>
                                        <div className="col-lg-6">
                                            <img src={nationalFather} alt={alt} />
                                        </div>
                                    </div>
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

                <Footer />
            </div >
        )
    }
}

export default Press;