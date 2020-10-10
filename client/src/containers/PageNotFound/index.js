import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_PAGE } from '../../constants/routes';
import { ReactComponent as NotfoundImg } from '../../assets/images/notFound.svg';
import './style.css';

function NotFound() {
  return (
    <div className="page__notfound">
      <NotfoundImg styleName="img__not-found" />
      <h1>نأسف,هذه الصفحة غير متوفرة.</h1>
      <Link styleName="link__pageNotFound" to={HOME_PAGE}>
        عودة للصفحة الرئيسية
      </Link>
    </div>
  );
}

export default NotFound;
