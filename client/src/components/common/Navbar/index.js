import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import * as ROUTES from '../../../constants/routes';
import AuthorizationContext from '../../../Contexts/AuthorizationContext';
import LogoutContext from '../../../Contexts/LogoutContext';
import navLogo from '../../../assets/images/berwaz.png';
import './style.css';

const NavbarComponent = () => {
  return (
    <div className="main-navbar-container">
      <AuthorizationContext.Consumer>
        {({ user }) => (
          <div className="navbar-container">
            <div className="nav-left">
              <Link to={ROUTES.CART_PAGE}>
                <FaShoppingCart className="cart-icon" />
              </Link>
              <Link to={ROUTES.SIGNUP_PAGE} className="nav-link">
                مستخدم جديد
              </Link>
              <Link to={ROUTES.LOGIN_PAGE} className="btn btn-primary">
                تسجيل الدخول
              </Link>
            </div>
            <div className="nav-right">
              <Link to={ROUTES.HOME_PAGE}>
                <img className="nav-logo" src={navLogo} alt="logo" />
              </Link>
            </div>
          </div>
        )}
      </AuthorizationContext.Consumer>
    </div>
  );
};

export default NavbarComponent;
