import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaBehance,
  FaInstagram,
  FaMapMarker,
  FaPhone,
  FaEnvelope,
  FaSkype,
} from 'react-icons/fa';
import logo from '../../../assets/images/berwaz.png';
import './style.css';

const Footer = () => {
  return (
    <div className="main-container">
      <div className="footer-container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
          <p>
            برواز هي منصة عربية تساعد الرسامين على بيع لوحاتهم الفنية بأفضل سعر
            و وبأفضل وسيلة للتسويق الالكتروني نسعى لان نكون الأفضل والاعلى جودة
          </p>
        </div>
        <div className="contact-container">
          <h3 className="contact-title">تواصل معنا</h3>
          <div className="contact-icons">
            <div className="icon-1">
              <FaMapMarker className="icons" size="1.2em" />
              <p>غزة - فلسطين</p>
            </div>
            <div className="icon-2">
              <FaPhone className="icons" size="1.2em" />
              <p>+972-000000</p>
            </div>
            <div className="icon-3">
              <a
                href="mailto:berwaz@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="icons" size="1.2em" />
              </a>
              <p>berwaz.g@gmail.com</p>
            </div>
            <div className="icon-4">
              <a
                href="https://skype.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSkype className="icons" size="1.4em" />
              </a>
              <p>berwaz</p>
            </div>
          </div>
        </div>
        <div className="follow-container">
          <h3>تابعنا على</h3>
          <div className="follow-icons">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="icons" size="2em" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest className="icons" size="2em" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icons" size="2em" />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="icons" size="2em" />
            </a>
            <a
              href="https://www.behance.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBehance className="icons" size="2em" />
            </a>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <p>سياسات المتجر</p>
        <p> الأسئلة الشائعة</p>
        <p> فريق العمل</p>
        <p>‫‪2020‬‬ ‫‪All‬‬ ‫‪rights‬‬ ‫‪reserved.BERWAZ‬‬ &copy;</p>
      </div>
    </div>
  );
};

export default Footer;
