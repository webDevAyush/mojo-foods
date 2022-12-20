import React from 'react';
import { FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">The Hyde Park, Sector 78, Noida, UP 201301, India</p>
        <p className="p__opensans">+91 9792757429</p>
        <p className="p__opensans">+91 9999445554</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
        <a href="https://www.linkedin.com/in/mr-ayush-chauhan/" target="_blank"><FiLinkedin /></a>
        <a href="https://twitter.com/AyushPr29614666" target="_blank"><FiTwitter /></a>
          <a href="https://www.instagram.com/mr.ayushchauhan__/" target="_blank"><FiInstagram /></a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Gericht. All Rights reserved.</p>
      <p className="p__opensans">Crafted by <a href="https://www.instagram.com/mr.ayushchauhan__/">Ayush Chauhan</a>❤️&🍻</p>
    </div>

  </div>
);

export default Footer;