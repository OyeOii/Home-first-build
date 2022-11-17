import React, { Component } from 'react';
// import Icons from './icons/Icons';

import OyeLogo from '../../assets/oyeoii_pink_logo.PNG';
import './footer.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/custom.css';

// import { Container } from 'react-bootstrap';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';



const Footer = () => (
  <div className="oyeoii__footer section__padding">

    <div className="oyeoii__footer-heading">
      <h1 className="gradient__text">NEWSLETTER</h1>
      <p>Be a part of new journey and get exclusive giveaway, and more!</p>
    </div>

    <div className = "oyeoii__footer-input">
      <input type = "name" placeholder = "Your Name Here" />
    </div>

    <div className = "oyeoii__footer-input">
      <input type = "email" placeholder = "Your Email Address" />
    </div>

    <div className="oyeoii__footer-btn">
      <p>Subscribe</p>
    </div>

    <div className="oyeoii__footer-links">
      <div className="oyeoii__footer-links_logo">
        <img src={OyeLogo} alt="oyeoii_logo" />

          <div>
            <p>OyeOii's Journey, CM 17 <br /> All Rights Reserved <br /> © 2022 </p>
          </div>
                
  </div>

      <div className="oyeoii__footer-links_div">
        <h4>Quick Links</h4>
        <p>กลุ่มอยากเรียนที่มอลต้า</p>
        <p>Cat's Instagram</p>
        <p>Request a post</p>
        <p>Q&A</p>
        <p>Work with me</p>
      </div>

      <div className="oyeoii__footer-links_div">
        <h4>Forum</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>

      <div className="oyeoii__footer-links_div">
        <h4>Get in touch</h4>
        <p>Calle Marte 17,<br /> Malaga</p>
        <p>My Porfolio</p>
        <p>pattarawarin_patt@yahoo.com</p>
      </div>

    </div>

      {/* <div className = "oyeoii__social-links">
          <Icons />
      </div> */}

    <div className="oyeoii__footer-copyright">
      <p>© 2022 OyeOii's Journey. All rights reserved.</p>
    </div>

  </div>
);


export default Footer;