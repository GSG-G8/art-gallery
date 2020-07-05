import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
// import { faShoppingCart } from 'react-icons/fa';
import * as ROUTES from '../../../constants/routes';
import navLogo from '../../../assets/images/berwaz.png';
import './style.css';

const NavbarComponent = () => {
  return (
    <div className="main-navbar-container">
      <div className="navbar-container">
        <div className="nav-left">
          <Link to={ROUTES.CART_PAGE}>
            <faShoppingCart className="cart-icon" size="lg" />
          </Link>
          <Link to={ROUTES.SIGNUP_PAGE} className="nav-link">
            مستخدم جديد
          </Link>
          <Link to={ROUTES.LOGIN_PAGE}>
            <Button className="nav-login-btn">تسجيل الدخول</Button>
          </Link>
        </div>
        <div className="nav-right">
          <Link to={ROUTES.HOME_PAGE}>
            <img className="nav-logo" src={navLogo} alt="logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
