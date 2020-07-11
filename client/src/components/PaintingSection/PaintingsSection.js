import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons';
import { Pagination, message, Popconfirm, Empty } from 'antd';

import Axios from 'axios';

import AuthorizationContext from '../../Contexts/AuthorizationContext';
import * as ROUTES from '../../constants/routes';

function PaintingsSection({ paintings, deletePainting }) {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(6);
  const cloudinaryLink =
    'https://res.cloudinary.com/dacf3uopo/image/upload/c_limit,h_400,w_400/v1593353472/';

  const history = useHistory();

  const handlePageChange = (value) => {
    if (value <= 1) {
      setMinValue(0);
      setMaxValue(6);
    } else {
      setMinValue(maxValue);
      setMaxValue(paintings.length <= value * 6 ? paintings.length : value * 6);
    }
  };

  const addPaintingToCart = async (paintingId) => {
    try {
      const { data } = await Axios.post('/api/v1/cart', {
        paintingId,
      });
      if (data.StatusCode === 201) {
        message.success('تم إضافة الصورة للسلة بنجاح');
      }
    } catch (data) {
      message.error('الصورة موجودة فعلاً في السلة');
    }
  };

  return (
    <>
      {paintings && (
        <>
          <div className="container__paintings">
            {paintings.length > 0 ? (
              paintings
                .sort((a, b) => b.id - a.id)
                .slice(minValue, maxValue)
                .map((painting) => (
                  <div className="flip-card" key={painting.id}>
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img
                          alt={painting.title}
                          src={`${cloudinaryLink}${painting.img}`}
                        />
                      </div>
                      <div
                        className="flip-card-back"
                        style={{
                          width: 300,
                          backgroundSize: 'cover',
                          background: `linear-gradient(
                        rgba(0, 0, 0,0.7),
                        rgba(0, 0, 0,0.7)
                      ),url(${cloudinaryLink}${painting.img}) center no-repeat`,
                        }}
                      >
                        <AuthorizationContext.Consumer>
                          {({ user }) => (
                            <>
                              {user.userRole === 'admin' ||
                                (user.userRole === 'artist' &&
                                  painting.artist_id === user.id && (
                                    <div className="deleteBtn">
                                      <Popconfirm
                                        title="هل أنت متأكد من حذف هذه اللوحة؟"
                                        onConfirm={() =>
                                          deletePainting(painting.id)
                                        }
                                        okText="نعم"
                                        cancelText="لا"
                                      >
                                        <DeleteOutlined width="2em" />
                                      </Popconfirm>
                                    </div>
                                  ))}
                              <button
                                type="button"
                                className="moreBtn"
                                onClick={() => {
                                  if (user.userRole === 'customer') {
                                    addPaintingToCart(painting.id);
                                  } else if (
                                    user.userRole === 'artist' ||
                                    user.userRole === 'admin'
                                  ) {
                                    message.warn(
                                      'عليك تسجيل الدخول بحساب مشترٍ لتتم العملية'
                                    );
                                  } else {
                                    history.push(ROUTES.LOGIN_PAGE);
                                  }
                                }}
                              >
                                أضف إلى السلة
                              </button>
                            </>
                          )}
                        </AuthorizationContext.Consumer>
                        <br />
                        <Link className="moreBtn" to={`/art/${painting.id}`}>
                          {' '}
                          ...للمزيد
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
            ) : (
              <Empty />
            )}
          </div>
          <div className="paintingsPag">
            {' '}
            <div className="paintingsPag">
              <Pagination
                total={paintings.length}
                defaultCurrent={1}
                defaultPageSize={6}
                onChange={handlePageChange}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
PaintingsSection.propTypes = {
  paintings: propTypes.arrayOf(propTypes.object).isRequired,
  deletePainting: propTypes.func.isRequired,
};
export default PaintingsSection;
