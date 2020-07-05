import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { Button } from 'antd';
import * as ROUTES from '../../../constants/routes';
import AuthorizationContext from '../../../Contexts/AuthorizationContext';
import LogoutContext from '../../../Contexts/LogoutContext';
import navLogo from '../../../assets/images/berwaz.png';
import './style.css';

const NavbarComponent = () => {
  return (
    <div className="main-navbar-container">
      <AuthorizationContext.Consumer>
        {({ user: { role } }) => (
          <div className="navbar-container">
            <div className="nav-right">
              <Link to={ROUTES.HOME_PAGE}>
                <img className="nav-logo" src={navLogo} alt="logo" />
              </Link>
            </div>
            {!role && (
              <div className="nav-left">
                <Link to={ROUTES.SIGNUP_PAGE} className="sign-up-link">
                  مستخدم جديد
                </Link>
                <Link to={ROUTES.LOGIN_PAGE} className="login-link">
                  تسجيل الدخول
                </Link>
                <Link to={ROUTES.CART_PAGE}>
                  <FaShoppingCart className="cart-icon" />
                </Link>
              </div>
            )}
            {role === 'customer' && (
              <div className="nav-left">
                <Link to={ROUTES.CART_PAGE}>
                  <FaShoppingCart className="cart-icon" />
                </Link>
                <LogoutContext.Consumer>
                  {({ logout }) => (
                    <Button
                      className="nav-logout-btn"
                      onClick={() => {
                        logout();
                      }}
                    >
                      تسجيل الخروج
                    </Button>
                  )}
                </LogoutContext.Consumer>
              </div>
            )}
            {role === 'artist' && (
              <div className="nav-left">
                <LogoutContext.Consumer>
                  {({ logout }) => (
                    <Button
                      className="nav-logout-btn"
                      onClick={() => {
                        logout();
                      }}
                    >
                      تسجيل الخروج
                    </Button>
                  )}
                </LogoutContext.Consumer>
              </div>
            )}
          </div>
        )}
      </AuthorizationContext.Consumer>
    </div>
  );
};

export default NavbarComponent;
