import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <form className="form-inline center">
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                           <h1>Company logo</h1>
                           <p>&copy; Riseup Labs. All Rights Reserved</p>
                        </div>
                        <div className="col-lg-3">
                            <h3>Goto</h3>
                            <ul className="list-unstyled">
                                <li><a href="/" rel="noopener noreferrer">Home</a></li>
                                <li><a href="/" rel="noopener noreferrer">Service</a></li>
                                <li><a href="/" rel="noopener noreferrer">Work</a></li>
                                <li><a href="/" rel="noopener noreferrer">Press</a></li>
                                <li><a href="/" rel="noopener noreferrer">About</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                        <h3>Enterprise</h3>
                        <ul className="list-unstyled">
                            <li><a href="/" rel="noopener noreferrer">Home</a></li>
                            <li><a href="/" rel="noopener noreferrer">Service</a></li>
                            <li><a href="/" rel="noopener noreferrer">Work</a></li>
                            <li><a href="/" rel="noopener noreferrer">Press</a></li>
                            <li><a href="/" rel="noopener noreferrer">About</a></li>
                        </ul>
                        </div>
                        <div className="col-lg-2">
                        <h3>Social</h3>
                        <ul className="list-unstyled">
                            <li><a href="/" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="/" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="/" rel="noopener noreferrer">Linkedin</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;