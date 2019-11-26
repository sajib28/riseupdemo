import React, { Component } from 'react';
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import Swal from 'sweetalert2';
import $ from 'jquery';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            contactmessage: '',
            nameError: '',
            emailError: '',
            phoneError: '',
            messageError: '',


        };
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value }, () => {
            this.validateName();
        });
    }
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value }, () => {
            this.validateEmail();
        });
    }
    handlephoneChange = (event) => {
        this.setState({ phone: event.target.value }, () => {
            this.validatephone();
        });
    }
    handlecontactmessagee = (event) => {
        this.setState({ contactmessage: event.target.value }, () => {
            this.validatecontactmessage();
        });
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
    validatephone = () => {
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
        // this.setState({
        //     phoneError:
        //         phone.length > 3 ? null : 'Name must be longer than 3 characters'

        // });
    }
    validatecontactmessage = () => {
        const { contactmessage } = this.state;
        if (contactmessage === '') {
            this.setState({
                messageError: 'Please type your message'

            });
            return true
        }
        else {
            this.setState({
                messageError: ''

            });
            return false
        }

    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.validateName();
        this.validateEmail();
        this.validatephone();
        this.validatecontactmessage();
        if (this.validateEmail() === true) {
            $('html, body').animate({ scrollTop: $('#name').offset().top - 150 }, 'slow');
            return false;
        }
        else if (this.validateName() === true) {
            $('html, body').animate({ scrollTop: $('#email').offset().top - 150 }, 'slow');
            return false;
        }

        else if (this.validatephone() === true) {
            $('html, body').animate({ scrollTop: $('#phone').offset().top - 150 }, 'slow');
            return false;
        }
        else if (this.validatecontactmessage() === true) {
            $('html, body').animate({ scrollTop: $('#contactmessage').offset().top - 150 }, 'slow');
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
        return (
            <div className="page contact">
                <Nav className="navbar navbar-expand-lg dark-color" />
                <section className="contact-us">
                    <div className="container">
                        <div className="row">
                            <div className="vertical-middle">
                                <div className="col-lg-4 pr-0">
                                    <div className="company-info text-center">
                                        <div className="company-address">
                                            <img src={require('../../../assets/img/icon/address.png')} alt="" />
                                            <p className="text-center">Floor-B6, Plot-35, Sonargaon<br />Janapath Road, Sector-07,<br />Uttara, Dhaka-1230, Bangladesh</p>
                                        </div>
                                        <div className="phone">
                                            <img src={require('../../../assets/img/icon/phone.png')} alt="" />
                                            <li><a href="tel:01759747387">+88-0175-974-7387</a></li>
                                        </div>
                                        <div className="email">
                                            <img src={require('../../../assets/img/icon/mail.png')} alt="" />
                                            <li><a href="mailto:contact@riseuplabs.com">contact@riseuplabs.com</a></li>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 pl-0">
                                    <div className="contact-form">
                                        <img className="angle-top" src={require('../../../assets/img/icon/contact-top-angle.png')} alt=""/>
                                        <img className="angle-bottom" src={require('../../../assets/img/icon/contact-bottom-angle.png')} alt=""/>
                                        <div className="section-title">
                                            <div className="title text-center">
                                                <h2 className="text-center">
                                                    <span className="text-color">Let's</span> Talk!</h2>
                                                <p className="text-center">We’d love to hear what you are working on.<br />
                                                    Drop us a note here and we’ll get back to you within 24 hours.</p>
                                            </div>
                                        </div>
                                        <form id="ContactForm" onSubmit={this.handleSubmit}>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" name="names" className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`} id="name" placeholder="Your Name" value={this.state.name} onChange={this.handleNameChange} onBlur={this.validateName} />
                                                        <div className='invalid-feedback'>{this.state.nameError}</div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <input type="email" name="email" className={`form-control ${this.state.emailError ? 'is-invalid' : ''}`} id="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} onBlur={this.validateEmail} />
                                                        <div className='invalid-feedback'>{this.state.emailError}</div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" name="phone" className={`form-control ${this.state.phoneError ? 'is-invalid' : ''}`} id="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.handlephoneChange} onBlur={this.validatephone} />
                                                        <div className='invalid-feedback'>{this.state.phoneError}</div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" name="company" className="form-control" id="companyName" placeholder="Company (Optional)" value={this.state.company} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <textarea className={`form-control ${this.state.messageError ? 'is-invalid' : ''}`} name="contactmessage" id="contactmessage" placeholder="Message" value={this.state.contactmessage} onChange={this.handlecontactmessagee} onBlur={this.validatecontactmessage}></textarea>
                                                        <div className='invalid-feedback'>{this.state.messageError}</div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group float-right">
                                                        <button type="submit" className="cus-btn"><span className="text-color">Send</span> Message</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="google-map">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="title">Find us on Google Map</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <iframe title="Rise Up Labs Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1289.9168693717875!2d90.39585154647231!3d23.87415825798397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4241b52d99d%3A0xdf7009a05d863ce5!2sRise%20Up%20Labs!5e0!3m2!1sen!2sbd!4v1574333333213!5m2!1sen!2sbd" width="100%" height="493"></iframe>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Banner */}
                <Footer />
            </div>
        )
    }
}
export default Contact;
