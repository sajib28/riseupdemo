import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Accordion extends Component {
    render() {
        return (

            <div className="accordion" id="accordionExample">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Collapsible Group Item #1 <i className="fas fa-chevron-down"></i></button>
                        </h2>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            <p>Vacancy 3</p>
                            <h3>Job Responsibilities</h3>
                            <ul className="list-unstyled">
                                <li>Highly functional with front-end technologies like HTML5, CSS3, Bootstrap, SASS, etc.</li>
                                <li>Back-end development experience with MySQL and PHP.</li>
                                <li>Expert in jQuery, Ajax, JavaScript coding.</li>
                            </ul>
                            <h3>Educational Requirements</h3>
                            <ul className="list-unstyled">
                                <li>Highly functional with front-end technologies like HTML5, CSS3, Bootstrap, SASS, etc.</li>
                                <li>Back-end development experience with MySQL and PHP.</li>
                                <li>Expert in jQuery, Ajax, JavaScript coding.</li>
                            </ul>
                            <h3>Job Responsibilities</h3>
                            <ul className="list-unstyled">
                                <li>Highly functional with front-end technologies like HTML5, CSS3, Bootstrap, SASS, etc.</li>
                                <li>Back-end development experience with MySQL and PHP.</li>
                                <li>Expert in jQuery, Ajax, JavaScript coding.</li>
                            </ul>
                            <Link class="cus-btn" to="/career-form">Apply for this position</Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Game Artist  <i className="fas fa-chevron-down"></i>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">
                            <p>Vacancy 3</p>
                            <h3>Job Responsibilities</h3>
                            <ul className="list-unstyled">
                                <li>Highly functional with front-end technologies like HTML5, CSS3, Bootstrap, SASS, etc.</li>
                                <li>Back-end development experience with MySQL and PHP.</li>
                                <li>Expert in jQuery, Ajax, JavaScript coding.</li>
                            </ul>
                            <h3>Educational Requirements</h3>
                            <ul className="list-unstyled">
                                <li>Highly functional with front-end technologies like HTML5, CSS3, Bootstrap, SASS, etc.</li>
                                <li>Back-end development experience with MySQL and PHP.</li>
                                <li>Expert in jQuery, Ajax, JavaScript coding.</li>
                            </ul>
                            <h3>Job Responsibilities</h3>
                            <ul className="list-unstyled">
                                <li>Highly functional with front-end technologies like HTML5, CSS3, Bootstrap, SASS, etc.</li>
                                <li>Back-end development experience with MySQL and PHP.</li>
                                <li>Expert in jQuery, Ajax, JavaScript coding.</li>
                            </ul>
                            <Link class="cus-btn" to="/career-form">Apply for this position</Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Game Developer  <i className="fas fa-chevron-down"></i></button>
                        </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">
                            <p>Vacancy 3</p>
                            <h3>Job Responsibilities</h3>
                            <ul className="list-unstyled">
                                <li>Highly functional with front-end technologies like HTML5, CSS3, Bootstrap, SASS, etc.</li>
                                <li>Back-end development experience with MySQL and PHP.</li>
                                <li>Expert in jQuery, Ajax, JavaScript coding.</li>
                            </ul>
                            <h3>Educational Requirements</h3>
                            <ul className="list-unstyled">
                                <li>Highly functional with front-end technologies like HTML5, CSS3, Bootstrap, SASS, etc.</li>
                                <li>Back-end development experience with MySQL and PHP.</li>
                                <li>Expert in jQuery, Ajax, JavaScript coding.</li>
                            </ul>
                            <h3>Job Responsibilities</h3>
                            <ul className="list-unstyled">
                                <li>Highly functional with front-end technologies like HTML5, CSS3, Bootstrap, SASS, etc.</li>
                                <li>Back-end development experience with MySQL and PHP.</li>
                                <li>Expert in jQuery, Ajax, JavaScript coding.</li>
                            </ul>
                            <Link class="cus-btn" to="/career-form">Apply for this position</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Accordion;