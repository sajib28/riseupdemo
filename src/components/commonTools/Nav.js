import React, { Component } from 'react'
import {
  Link,
  NavLink
} from "react-router-dom";
import $ from 'jquery';
import riseuplogo from '../../assets/img/riseup-logo.png';
import logo from '../../assets/img/logo.png';
import menubar from '../../assets/img/bars.png';
import menuClose from '../../assets/img/close.png';


class Nav extends Component {
  componentDidMount() {
    $(window).scroll(function () {
      headerFixed();
      function headerFixed() {
        let mainMenu = document.getElementById("mainMenu");
        let mainMenuSticky = mainMenu.offsetTop;
        if (window.pageYOffset > mainMenuSticky) {
          mainMenu.classList.add("sticky-header");
          // $('.sticky-header').css("transition", "all 0.3s linear");
        } else {
          mainMenu.classList.remove("sticky-header");
        }
      }
    });
    // dropdown menu
    $(document).ready(function () {
      //dropdown menu
      $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
      });

      // Add slideUp animation to Bootstrap dropdown when collapsing.
      $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
      });
      //dropdown menu
    });

    // Back to top
    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.scroll-top').fadeIn();
        $('.scroll-down').fadeOut();

      } else {
        $('.scroll-top').fadeOut();
        $('.scroll-down').fadeIn();
      }
    });

    $('.scroll-down').click(function () {
      $('html, body').animate({ scrollTop: $(document).height() }, 1500);
      return false;
    });

    $('.scroll-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 1500);
      return false;
    });

  }
  render() {
    return (
      <header>
        <nav id="mainMenu" className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/"><img src={riseuplogo} alt="" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/service">Service</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/work">Work</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/press">Process</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/about">About Us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/blog">Blog</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/career">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="topMenuIcon">
              <Link className="nav-link openMenu" to="/" data-toggle="modal" data-target="#fullscreenMenu"><img src={menubar} alt="" /></Link>
            </div>
          </div>
        </nav>
        <div className="modal fade fullscreen-menu" id="fullscreenMenu" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><img src={menuClose} alt="" /></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="navbar">
                        <ul className="list-unstyled left-menu navbar-nav">
                          <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                          </li>
                          {/* <li className="nav-item">
                          <NavLink activeClassName="active" className="nav-link" to="/service">Our Services</NavLink>
                        </li> */}
                          <li className="nav-item dropdown">
                            <Link to="/" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Our Services <span className="caret"></span></Link>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/iets">Apps Development</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/iets">Game Development</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/iets">Web System</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/iets">XR Solution</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/iets">Iets</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/service">Our Process</NavLink>
                          </li>

                          <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/work">Our Work</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/about">About Us</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/about">Our clients</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/blog">Blog</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/career">Career</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/press">Press Kit</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/press">Contact</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/apps">Apps</NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="company-info">
                        <img src={logo} alt="" />
                        <div className="contact-info">
                          <li><a href="mailto:contact@riseuplabs.com">contact@riseuplabs.com</a></li>
                          <li><a href="tel:01759747387">+88-0175-974-7387</a></li>
                        </div>
                        <div className="company-address">
                          <p>Head Office:B6,<br />Plot-35,Sonargaon<br />Janapath Road,Sector-07,<br />Uttara, Dhaka-1230,<br />Bangladesh</p>
                        </div>
                        <div className="social-media">
                          <ul className="list-unstyled list-inline">
                            <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="/"><i className="fas fa-meh-blank"></i></a></li>
                            <li><a href="/"><i className="fab fa-youtube"></i></a></li>

                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-down">
          <a href="/"><span className="text">Scroll Down</span><span className="arrow-sign"></span></a>
        </div>
        <div className="scroll-top">
          <a href="/"><span className="text">Scroll Top</span><span className="arrow-sign"></span></a>
        </div>
      </header>
    )
  }
}
export default Nav;