import React, { Component } from 'react';
import { Link } from "react-router-dom";
class CompanyLogo extends Component {
    render() {
        return (
            <div className="company-logo">
                <ul className="list-unstyled">
                    <li><Link to="/"><img src={require('../../assets/img/unicef.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../../assets/img/unicef.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../../assets/img/unicef.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../../assets/img/unicef.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../../assets/img/unicef.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../../assets/img/unicef.png')} alt=""/></Link></li>
                </ul>
            </div>
        )
    }
}
export default CompanyLogo;