import React from 'react';
import { Rate, Button } from 'antd';
import reviewPhoto from '../../assets/images/review.png';

import './style.css';

const ReviewPage = () => {
  return (
    <div className="page-container">
      <div className="review-img-container">
        <img className="review-img" src={reviewPhoto} alt="reviewPhoto" />
      </div>
      <div className="review-container">
        <div className="rate-container">
          <h2 className="title-1">ما رأيك بأداء هذا الرسام ؟</h2>
          <h3 className="title-2">رأيك مهم بالنسبة لنا</h3>
          <Rate className="star-rate" />
          <div className="textarea-container">
            <h2 className="title-3">تعليق</h2>
            <textarea
              className="textarea-review"
              placeholder="رجاءاََ كن صادقاََ في تعليقك"
              rows="5"
              cols="50"
            />
            <Button className="review-btn">ارسال التعليق</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
