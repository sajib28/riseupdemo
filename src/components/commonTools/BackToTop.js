import React, { Component } from 'react';
import $ from 'jquery';
class BackToTop extends Component {
    componentDidMount() {
          // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
          $('.scroll-top').fadeIn();
          $('.scroll-down').fadeOut();
           $('.back-to-top').addClass("back-top-color");
        } else {
          $('.scroll-top').fadeOut();
          $('.scroll-down').fadeIn();
          $('.back-to-top').removeClass("back-top-color");
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
            <div className="back-to-top">
                <div className="scroll-down">
                    <a href="/"><span className="text">Scroll Down</span><span className="arrow-sign"></span></a>
                </div>
                <div className="scroll-top">
                    <a href="/"><span className="text">Scroll Top</span><span className="arrow-sign"></span></a>
                </div>
            </div>
        )
    }
}
export default BackToTop;