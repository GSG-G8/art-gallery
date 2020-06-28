import React from 'react';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const NavbarComponent = () => {
  return (
    <div className="navbar-container">
      {/* <div className="nav-right">
        <h3>برواز</h3>
      </div> */}
      <div className="nav-left">
        <a to="/cart">
          <FontAwesomeIcon
            className="cart-icon"
            icon={faShoppingCart}
            color="#00695C"
            size="lg"
          />
        </a>
        <a to="/signup" className="nav-link">
          مستخدم جديد
        </a>
        <Button className="nav-login-btn">تسجيل الدخول</Button>
      </div>
      <div className="nav-line" />
    </div>
  );
};

export default NavbarComponent;
