import React from 'react';
import { Empty, Rate, Carousel } from 'antd';
import propTypes from 'prop-types';
import './style.css';

function ReviewContainer({ reviews }) {
  return reviews.length > 0 ? (
    <Carousel autoplay className="reviewSlider">
      {reviews.map((review) => (
        <div key={review.id}>
          <h2>{`${review.first_name} ${review.last_name}`}</h2>
          <Rate disabled defaultValue={review.rate} />
          <p>{review.details}</p>
          <p>{Date(review.review_date).split('G')[0]}</p>
        </div>
      ))}
    </Carousel>
  ) : (
    <Empty />
  );
}

ReviewContainer.propTypes = {
  reviews: propTypes.arrayOf(propTypes.object).isRequired,
};
export default ReviewContainer;
