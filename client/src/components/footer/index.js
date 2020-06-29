import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faInstagram,
  faFacebookSquare,
  faBehance,
  faSkype,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/images/berwaz.png';
import './style.css';

const Footer = () => {
  return (
    <div className="main-container">
      <div className="footer-container">
        <div className="follow-container">
          <p>تابعنا على</p>
          <div className="follow-icons">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} color="#636D73" size="2x" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faPinterest} color="#636D73" size="2x" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} color="#636D73" size="2x" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebookSquare}
                color="#636D73"
                size="2x"
              />
            </a>
            <a
              href="https://www.behance.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faBehance} color="#636D73" size="2x" />
            </a>
          </div>
        </div>
        <div className="contact-container">
          <p className="contact-title">تواصل معنا</p>
          <div className="contact-icons">
            <div className="icon-1">
              <p>غزة - فلسطين</p>
              <FontAwesomeIcon icon={faMapMarker} color="#636D73" size="lg" />
            </div>
            <div className="icon-2">
              <p>+972-000000</p>
              <FontAwesomeIcon icon={faPhone} color="#636D73" size="lg" />
            </div>
            <div className="icon-3">
              <p>berwaz@gmail.com</p>
              <a
                href="mailto:berwaz@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} color="#636D73" size="lg" />
              </a>
            </div>
            <div className="icon-4">
              <p>berwaz</p>
              <a
                href="https://skype.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faSkype} color="#636D73" size="lg" />
              </a>
            </div>
          </div>
        </div>
        <div className="logo-container">
          <img src={logo} alt="logo" />
          <p>
            برواز هي منصة عربية تساعد الرسامين على بيع لوحاتهم الفنية بأفضل سعر
            و وبأفضل وسيلة للتسويق الالكتروني نسعى لان نكون الأفضل والاعلى جودة
          </p>
        </div>
      </div>
      <div className="copy-right">
        <p>سياسات المتجر</p>
        <p> الأسئلة الشائعة</p>
        <p> فريق العمل</p>
        <p> ‫©‬ ‫‪2020‬‬ ‫‪All‬‬ ‫‪rights‬‬ ‫‪reserved.BARWAZ‬‬</p>
      </div>
    </div>
  );
};

export default Footer;
