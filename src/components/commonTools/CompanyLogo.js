import React, { Component } from 'react';
import { Link } from "react-router-dom";
class CompanyLogo extends Component {
    render() {
        return (
            <div className="company-logo">
                <ul className="list-unstyled">
                    <li><Link to="/"><img src={require('../../assets/img/company-logo/ict-logo.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../../assets/img/company-logo/unicef-logo.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../../assets/img/company-logo/innovation-logo.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../../assets/img/company-logo/bbc-logo.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../../assets/img/company-logo/mages-logo.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../../assets/img/company-logo/bcc-logo.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../../assets/img/company-logo/robi-logo.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../../assets/img/company-logo/habson-logo.png')} alt=""/></Link></li>
                </ul>
            </div>
        )
    }
}
export default CompanyLogo;