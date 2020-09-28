import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return(
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Please subscribe for the vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at anytime
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="your email" className="footer-input"/>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to="/">
                            How it Works?
                        </Link>
                        <Link to="/">
                            Testimonials
                        </Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/">
                            Contact
                        </Link>
                        <Link to="/">
                            Support
                        </Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to="/">
                            Instagram
                        </Link>
                        <Link to="/">
                            Facebook
                        </Link>
                        <Link to="/">
                            Youtube
                        </Link>
                        <Link to="/">
                            Twitter
                        </Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TravelNZ
              <i class='fas fa-suitcase-rolling' />
            </Link>
          </div>
          <small class='website-rights'>TRAVELNZ © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>

        </div>
    );
}

export default Footer;