import React from 'react';
import './Footer.css';
import 'remixicon/fonts/remixicon.css';

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <div className='logo'>
            <a href="#"><h2>Cravin'</h2></a>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dicta voluptates earum aliquam ipsam at quia reiciendis rem voluptatem officiis!</p>
          <div className="footer-social-icons">
              
              <a
                href="https://www.facebook.com/iameenalam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              
              <a
                href="https://www.linkedin.com/in/iameenalam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/iameenalam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-instagram-line"></i>
              </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <a href="#"><li>Home</li></a>
            <a href="#explore-menu"><li>Menu</li></a>
            <a href="#footer"><li>Contact</li></a>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+92-333-456-7890</li>
            <li>contact@cravin.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright {year} © Cravin' | All rights reserved.</p>
    </div>
  );
}

export default Footer;
