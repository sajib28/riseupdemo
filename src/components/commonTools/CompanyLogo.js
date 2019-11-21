import React, { Component } from 'react';
class CompanyLogo extends Component {
    render() {
        return (
            <div className="company-logo">
                <ul className="list-unstyled">
                    <li><a rel="noopener noreferrer" href="/"><img src={require('../../assets/img/company-logo/ict-logo.png')} alt=""/></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.unicef.org/" target="_blank"><img src={require('../../assets/img/company-logo/unicef-logo.png')} alt=""/></a></li>
                    <li><a rel="noopener noreferrer" href="/"><img src={require('../../assets/img/company-logo/innovation-logo.png')} alt=""/></a></li>
                    <li><a rel="noopener noreferrer" href="/"><img src={require('../../assets/img/company-logo/bbc-logo.png')} alt=""/></a></li>
                    <li><a rel="noopener noreferrer" href="/"><img src={require('../../assets/img/company-logo/mages-logo.png')} alt=""/></a></li>
                    <li><a rel="noopener noreferrer" href="/"><img src={require('../../assets/img/company-logo/bcc-logo.png')} alt=""/></a></li>
                    <li><a rel="noopener noreferrer" href="/"><img src={require('../../assets/img/company-logo/robi-logo.png')} alt=""/></a></li>
                    <li><a rel="noopener noreferrer" href="/"><img src={require('../../assets/img/company-logo/habson-logo.png')} alt=""/></a></li>
                </ul>
            </div>
        )
    }
}
export default CompanyLogo;