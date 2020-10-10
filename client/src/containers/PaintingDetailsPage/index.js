import React, { useState, useEffect } from 'react';
import { Button, Radio, Select, Spin, message } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
import propTypes from 'prop-types';
import AuthorizationContext from '../../Contexts/AuthorizationContext';
import PictureWall from '../../components/Mockup';
import Navbar from '../../components/common/Navbar';
import './style.css';

function PaintingsDetail({ match }) {
  const [imgPreview, setimgPreview] = useState('previewImg');
  const [painting, setPainting] = useState();
  const [size, setSize] = useState();

  const history = useHistory();
  const cloudinaryLink =
    'https://res.cloudinary.com/dacf3uopo/image/upload/v1593353472/';

  const getPaintingByID = async (id) => {
    try {
      const { data } = await Axios.get(`/api/v1/painting/${id}`);
      setPainting(data.data);
    } catch (err) {
      message.error('حدث خطأ ');
    }
  };
  useEffect(() => {
    getPaintingByID(match.params.artId);
  }, [match.params.artId]);

  const handleSizeChange = (value) => {
    setSize(value);
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
      <Navbar />
      {painting ? (
        <div className="main__details__container">
          <div className="containerD">
            <div className="container__details">
              <div className="painting">
                <h1>{painting.title}</h1>
                <p>{painting.description}</p>
                <h3>
                  {' '}
                  التصنيف <strong>{painting.category}</strong>
                </h3>
                <Link
                  className="artistName"
                  to={`/artist/${painting.artist_id}`}
                >
                  <h3>
                    الفنان
                    <strong>
                      {`${painting.first_name} ${painting.last_name} `}
                    </strong>
                  </h3>
                </Link>
                <br />

                <Radio.Group
                  className="viewBtn"
                  buttonStyle="solid"
                  defaultValue="previewImg"
                  onChange={(e) => setimgPreview(e.target.value)}
                >
                  <Radio.Button className="paintingView" value="previewImg">
                    عرض اللوحة
                  </Radio.Button>
                  <Radio.Button className="paintingView" value="previewWall">
                    عرض على الحائط
                  </Radio.Button>
                </Radio.Group>
                <br />
                <br />
                <label htmlFor="size">
                  {' '}
                  حجم اللوحة{' '}
                  <Select
                    id="size"
                    defaultValue={Object.keys(painting.property)[0]}
                    style={{ width: 120, margin: '10px' }}
                    onChange={handleSizeChange}
                  >
                    {Object.keys(painting.property).map((e) => (
                      <Select.Option key={e} value={e}>
                        {e}
                      </Select.Option>
                    ))}
                  </Select>
                  <strong className="price">
                    {
                      painting.property[
                        size || Object.keys(painting.property)[0]
                      ]
                    }
                    $
                  </strong>
                  <br />
                  <AuthorizationContext.Consumer>
                    {({ user }) => (
                      <Button
                        className="addBtn"
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
                            history.push('/login');
                          }
                        }}
                      >
                        إضافة إلى السلة
                      </Button>
                    )}
                  </AuthorizationContext.Consumer>
                </label>
              </div>
            </div>
            <div className="container__image">
              {imgPreview === 'previewImg' ? (
                <img
                  className="imgPreview"
                  alt={painting.title}
                  src={cloudinaryLink + painting.img}
                />
              ) : (
                <PictureWall paintingSrc={painting.img} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <Spin />
      )}
    </>
  );
}

PaintingsDetail.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      artId: propTypes.node,
    }).isRequired,
  }).isRequired,
};

export default PaintingsDetail;
