import React, { Component } from 'react'
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
// import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import $ from 'jquery';
// import Accordion from '../../commonTools/Accordion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
class ApplicationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            cvFile: 'null',
            cvPreviewUrl: 'nill',
            cvValue:'',
            nameError: '',
            emailError: '',
            phoneError: '',
            cvError: ''


        };
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value }, () => {
            this.validateName();
        });
    }
    handleEmailChange = (event) => {
        this.setState({ 
            email: event.target.value }, () => {
            this.validateEmail();
        });
    }
    handlePhoneChange = (event) => {
        this.setState({ phone: event.target.value }, () => {
            this.validatePhone();
        });
    }
    handleCvChange = (event) => {
        this.setState({ 
            cvFile: event.target.files[0],
            cvValue: event.target.value}, () => {
            this.validateCv();
        });
        let reader = new FileReader();
     
        reader.onloadend = () => {
          this.setState({
            cvPreviewUrl: reader.result
          });
        }
     
        reader.readAsDataURL(event.target.files[0])
    }
    validateName = () => {
        const { name } = this.state;
        if (name === '') {
            this.setState({
                nameError: 'Please type your name'
            });
            return true
        }
        else if (name.length < 3) {
            this.setState({
                nameError: 'Name must be longer than 2 characters'
            });
            return true
        }
        else if (name.match(/^\s+$/) !== null) {
            this.setState({
                nameError: 'Please type valid name'
            });
            return true
        }
        else {
            this.setState({
                nameError: ''
            });
            return false
        }
        // this.setState({
        //     nameError:
        //         name.length > 3 ? null : 'Name must be longer than 3 characters'
        // });
    }
    validateEmail = () => {
        const { email } = this.state;
        if (email === '') {
            this.setState({
                emailError: 'Please Enter your email'
            });
            return true
        }
        else if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            this.setState({
                emailError: 'Please Enter Valid email'

            });
            return true
        }
        else {
            this.setState({
                emailError: ''

            });
            return false
        }
        // this.setState({
        //     emailError:
        //         email.length > 3 ? null : 'Name must be longer than 3 characters'
        // });
    }
    validatePhone = () => {
        const { phone } = this.state;
        if (phone === '') {
            this.setState({
                phoneError: 'Please type your number'
            });
            return true
        }
        else if (isNaN(phone)) {
            this.setState({
                phoneError: 'Please type only number'
            });
            return true
        }
        else {
            this.setState({
                phoneError: ''
            });
            return false
        }
    }
    validateCv = () => {
        const { cvValue } = this.state;
        var allowedExtensions = /(\.pdf|\.doc|\.docx|\.jpg|\.png)$/i;
        if (cvValue === '') {
            this.setState({
                cvError: 'Please Upload your CV'
            });
            return true
        }
        else if (!allowedExtensions.exec(cvValue)) {
            this.setState({
                cvError: 'Please Upload your Cv with Valid Extension'
            });
            return false
        }
        else {
            this.setState({
                cvError: ''
            });
            return false
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.validateName();
        this.validateEmail();
        this.validatePhone();
        this.validateCv();
        if (this.validateName() === true) {
            $('html, body').animate({ scrollTop: $('#name').offset().top - 150 }, 'slow');
            return false;
        }
        else if (this.validateEmail() === true) {
            $('html, body').animate({ scrollTop: $('#email').offset().top - 150 }, 'slow');
            return false;
        }

        else if (this.validatePhone() === true) {
            $('html, body').animate({ scrollTop: $('#phone').offset().top - 150 }, 'slow');
            return false;
        }
        else if (this.validateCv() === true) {
            $('html, body').animate({ scrollTop: $('#cv').offset().top - 150 }, 'slow');
            return false;
        }
        else {
            Swal.fire({
                icon: 'success',
                title: 'The form has been successfully submitted',
                showConfirmButton: true
            })
        }
    }

    render() {
        let $cvPreview = '';
        if (this.state.cvPreviewUrl) {
           $cvPreview = (<div className="image-container" ><a href={this.state.cvPreviewUrl}>Click link to view file</a></div>);
          }
          else{
            $cvPreview = '';
          }
        return (
            <div className="page application-form">
                <Nav className="navbar navbar-expand-lg" />
                {/* Banner */}
                <section id="careerForm" className="banner middle-content" style={{ backgroundImage: `url(${require('../../../assets/img/banner/career-banner.png')})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="introText">
                                    <h1><span className="text-color">Game </span>Artist</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Banner */}
                <section className="career-form">
                    <div className="container">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-lg-3 col-md-5">
                                    <h3>Personal information</h3>
                                    <p>Tell us something about yourself</p>
                                </div>
                                <div className="col-lg-6 col-md-7">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Full Name <span className="text-danger">*</span></label>
                                                <input type="text" className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`} id="name" name="full_name" value={this.state.name} onChange={this.handleNameChange} onBlur={this.validateName} placeholder="|" />
                                                <div className='invalid-feedback'>{this.state.nameError}</div>
                                            </div>
                                            <div className="form-group">
                                                <label>Email address <span className="text-danger">*</span></label>
                                                <input type="email" className={`form-control ${this.state.emailError ? 'is-invalid' : ''}`} name="email" id="email" value={this.state.email} onChange={this.handleEmailChange} onBlur={this.validateEmail} placeholder="Your email address" />
                                                <div className='invalid-feedback'>{this.state.emailError}</div>
                                            </div>
                                            <div className="form-group">
                                                <label>Phone number <span className="text-danger">*</span></label>
                                                <input type="text" className={`form-control ${this.state.phoneError ? 'is-invalid' : ''}`} name="phone" id="phone" value={this.state.phone} onChange={this.handlePhoneChange} onBlur={this.validatePhone} placeholder="Your phone number" />
                                                <div className='invalid-feedback'>{this.state.phoneError}</div>
                                            </div>
                                            <div className="form-group photo-upload">
                                                <h2 className="photo-lebel">Photo</h2>
                                                <label htmlFor="photo" className="photo">Add File </label>
                                                <input type="file" className="form-control-file" name="photo" id="photo" />
                                                <span>We accept PNG, JPG, and JPEG files</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-3 col-md-5">
                                    <h3>CV / Resume <span className="text-danger">*</span></h3>
                                    <p>Upload your CV or resume file</p>
                                </div>
                                <div className="col-lg-6 col-md-7">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group file-upload">
                                                <label htmlFor="cv" className="cv">Add File</label>
                                                <input type="file" className={`form-control ${this.state.cvError ? 'is-invalid' : ''}`} name="cv" id="cv" value={this.state.cvValue} onChange={this.handleCvChange} />
                                                <span>We accept PDF, DOC, DOCX, JPG and PNG files</span>
                                                { $cvPreview }
                                                <div className='invalid-feedback'>{this.state.cvError}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-3 col-md-5">
                                    <h3>Cover letter</h3>
                                    <p>Insert your cover letter here</p>
                                </div>
                                <div className="col-lg-6 col-md-7">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea className="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-12 d-block text-center">
                                    <button type="submit" className="cus-btn"><span className="text-color">Submit</span> Application</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <Footer />
            </div >
        )
    }
}
export default ApplicationForm;