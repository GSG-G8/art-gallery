import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';

function PaintingsSection({ paintings }) {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(6);
  const cloudinaryLink =
    'https://res.cloudinary.com/dacf3uopo/image/upload/v1593353472/';

  const handlePageChange = (value) => {
    if (value <= 1) {
      setMinValue(0);
      setMaxValue(6);
    } else {
      setMinValue(maxValue);
      setMaxValue(paintings.length <= value * 6 ? paintings.length : value * 6);
    }
  };
  return (
    <>
      {paintings && (
        <>
          <div className="container__paintings">
            {paintings.length > 0 &&
              paintings.slice(minValue, maxValue).map((painting) => (
                <>
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img
                          alt={painting.title}
                          src={`${cloudinaryLink}${painting.img}`}
                          style={{
                            width: 300,
                            height: 300,
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                      <div
                        className="flip-card-back"
                        style={{
                          width: 300,

                          background: `linear-gradient(
                        rgba(0, 0, 0,0.7),
                        rgba(0, 0, 0,0.7)
                      ),url(${cloudinaryLink}${painting.img})`,
                        }}
                      >
                        <button type="button" className="moreBtn">
                          أضف إلى السلة
                        </button>
                        <br />
                        <Link
                          className="moreBtn"
                          to={`/paintings/${painting.id}`}
                        >
                          {' '}
                          ...للمزيد
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
          <Pagination
            total={paintings.length}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
            defaultCurrent={1}
            defaultPageSize={6}
            onChange={handlePageChange}
          />
        </>
      )}
    </>
  );
}
PaintingsSection.propTypes = {
  paintings: propTypes.arrayOf(propTypes.object).isRequired,
};
export default PaintingsSection;
