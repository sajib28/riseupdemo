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
    const myId = window.location.hash.slice(1)
    const elem = document.getElementById("homeService")
    if (elem) {
      elem.scrollIntoView()
    }

    $(window).scroll(function () {
      headerFixed();
      function headerFixed() {
        var mainMenu = document.getElementById("mainMenu");
        if ($('#mainMenu').length) {
          var mainMenuSticky = mainMenu.offsetTop;
          if (window.pageYOffset > mainMenuSticky) {
            mainMenu.classList.add("sticky-header");
          } else {
            mainMenu.classList.remove("sticky-header");
          }
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

      $('.fullscreen-menu .navbar-nav li').click(function () {
        if(!$(this).hasClass('dropdown')){
         $('.modal-backdrop').fadeOut();
         $('body').removeClass('modal-open');
         $('body').css('padding',0);
        }
      })
      // if ($(".fullscreen-menu .navbar-nav li").hasClass("dropdown")) {
      //   alert()
      //   // $('.modal-backdrop').hide();
      // };

      $('#fullscreenMenu').scroll(function () {

        // close button fixed
        let fullscreenMenu = document.getElementById("fullscreenMenu");
        if ($(fullscreenMenu).scrollTop() > 0) {
          fullscreenMenu.classList.add("fixedCloseBtn");
        } else {
          fullscreenMenu.classList.remove("fixedCloseBtn");
        }
        //End  Close button fixed
      });
    });

  }
  render() {
    return (
      <header>
        <nav id="mainMenu" className={this.props.className}>
          <div className="container">
            <Link className="navbar-brand" to={`${process.env.PUBLIC_URL}/`} exact="true"><img src={riseuplogo} alt="Rise Up Labs" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink activeClassName='active' className="nav-link" to={`${process.env.PUBLIC_URL}/`} exact>Service</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName='active' className="nav-link" to={`${process.env.PUBLIC_URL}/work`}>Work</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName='active' className="nav-link" to={`${process.env.PUBLIC_URL}/process`}>Process</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName='active' className="nav-link" to={`${process.env.PUBLIC_URL}/about`}>About Us</NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="http://www.riseuplabs.com/blog/">Blog</a>
                </li>

                <li className="nav-item">
                  <NavLink activeClassName='active' to={`${process.env.PUBLIC_URL}/contact`} className="nav-link">Contact</NavLink>
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
              <div className="container-fluid">
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
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="navbar">
                        <ul className="list-unstyled left-menu navbar-nav">
                          <li className="nav-item">
                            <NavLink activeClassName='active' className="nav-link" to={`${process.env.PUBLIC_URL}/`} exact>Home</NavLink>
                          </li>
                          <li className="nav-item dropdown">
                            <Link to="/" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Our Services <i className="fas fa-chevron-down"></i></Link>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/apps-development">Apps Development</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link" to="/">Game Development</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link" to="/">Web System</NavLink>
                              </li>
                              <li className="nav-item">
                                <Link className="nav-link" to="/">XR Solution</Link>
                              </li>
                              <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/iets">Iets</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/process">Our Process</NavLink>
                          </li>

                          <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/work">Our Work</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/about">About Us</NavLink>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/">Our clients</Link>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="http://www.riseuplabs.com/blog/">Blog</a>
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/career">Career</NavLink>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/">Press Kit</Link>
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/contact">Contact</NavLink>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/">Apps</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
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
      </header>
    )
  }
}
export default Nav;