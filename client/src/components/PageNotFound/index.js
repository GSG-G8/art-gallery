import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import notFoundImg from '../../assets/images/notFoundImg.svg';
import './style.css';

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <img src={notFoundImg} alt="notFound" className="not-found-img" />
      <div>
        <h1> ...عذراََ</h1>
        <p>هذه الصفحة غير متوفرة</p>
        <Link to={ROUTES.HOME_PAGE}>
          <Button>الصفحة الرئيسية</Button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
