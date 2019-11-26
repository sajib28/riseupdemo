import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
class NotFound extends Component {
    render() {
        return (
            <div id="notfound">
                <div className="notfound-inner">
                    <h1>404</h1>
                    <p>Oops! Page not found</p>
                    <Link to={`${process.env.PUBLIC_URL}/`} exact className="cus-btn"><span className="text-color">Home</span> Page</Link>
                </div>
            </div>
        )
    }
}
export default NotFound;