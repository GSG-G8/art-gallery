import React from 'react';
import { Result } from 'antd';
import './style.css';
import { Link } from 'react-router-dom';
import { HOME_PAGE } from '../../constants/routes';

function NotFound() {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="نأسف,هذه الصفحة غير متوفرة."
        extra={<Link to={HOME_PAGE}>عودة للصفحة الرئيسية</Link>}
      />
    </div>
  );
}

export default NotFound;
