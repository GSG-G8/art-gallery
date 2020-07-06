import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import Axios from 'axios';
import { FaFacebook, FaInstagram, FcEditImage } from 'react-icons/all';
import { message, Spin, Button, Alert } from 'antd';

import AddProduct from '../AddProduct';
import AuthorizationContext from '../../Contexts/AuthorizationContext';
import PaintingSection from '../PaintingSection/PaintingsSection.js';

import './style.css';

function Profile({ match }) {
  const [profileData, setProfileData] = useState();
  const [showForm, setShowForm] = useState(false);
  const [paintings, setPaintings] = useState();
  const [error, setError] = useState(null);

  const getArtistProfile = async (id) => {
    try {
      const { data: artistData } = await Axios.get(`/api/v1/profile/${id}`);
      setProfileData(artistData.data[0]);
    } catch (err) {
      let e;
      if (err.response.data.message === "Sorry There's no artist for this id") {
        e = 'لا يوجد فنان لهذا الاي دي';
      } else {
        e = 'تعذر جلب بيانات الفنان';
      }
      setError(e);
    }
  };

  const getAllPainting = async (artistId) => {
    try {
      const { data } = await Axios.get(`/api/v1/paintingsArtist/${artistId}`);
      if (data.statusCode === 200) {
        setPaintings(data.data);
      }
    } catch (err) {
      let e;
      if (
        err.response.data.message ===
        "Sorry There's no paintings for this artist"
      ) {
        e = 'لا يوجد لوحات لهذا الفنان';
      } else {
        e = 'حدث خطا في جلب اللوحات';
      }
      message.error(e);
    }
  };
  useEffect(() => {
    getArtistProfile(match.params.artistId);
  }, []);

  useEffect(() => {
    getAllPainting(match.params.artistId);
  }, []);

  const hideForm = () => setShowForm(false);
  useEffect(() => {
    getArtistProfile(match.params.artistId);
  }, []);

  const deletePainting = async (paintingID) => {
    try {
      const { data } = await Axios.delete(`/api/v1/paintings/${paintingID}`);
      if (data.statusCode === 200) {
        message.success('تم حذف اللوحة بنجاح');
        setPaintings(paintings.filter((e) => e.id !== paintingID));
      }
    } catch (err) {
      message.error('حدث خطا في عملية الحذف');
    }
  };

  const isAuth = (user) =>
    user.role === 'artist' && user.id === +match.params.artistId;

  return (
    <div className="profile-container">
      <header className="header-profile">
        <div className="right-header">
          {error ? (
            <Alert
              message={error}
              description="لا يمكن ايجاد البيانات"
              type="error"
              showIcon
            />
          ) : profileData ? (
            <>
              <div className="container-edit-img">
                <img
                  className="circle-img"
                  alt="profile img"
                  src={profileData.profile_img}
                />
                <Button className="edit-img-btn">
                  <FcEditImage />{' '}
                </Button>
              </div>
              <p>
                <span>اسم الفنان :</span> {profileData.first_name}{' '}
                {profileData.last_name}
              </p>
              <AuthorizationContext.Consumer>
                {({ user }) =>
                  isAuth(user) && (
                    <p>
                      <span>رصيدك الحالي يساوي :</span>
                      {profileData.budget} شيكل{' '}
                    </p>
                  )
                }
              </AuthorizationContext.Consumer>
              <p>
                <span>المزيد من المعلومات : </span> {profileData.bio}
              </p>
              <p>
                <span>رقم الهاتف : </span> {profileData.mobile_no}
              </p>
              <div className="social_media">
                {profileData.social_media_accounts[0] && (
                  <a href={profileData.social_media_accounts[0]}>
                    <FaFacebook className="facebook" />
                  </a>
                )}
                {profileData.social_media_accounts[1] && (
                  <a href={profileData.social_media_accounts[1]}>
                    <FaInstagram />
                  </a>
                )}
              </div>
            </>
          ) : (
            <Spin />
          )}
        </div>
        <div className="left-header">
          <AuthorizationContext.Consumer>
            {({ user }) => isAuth(user) && <Button>تعديل البيانات</Button>}
          </AuthorizationContext.Consumer>
        </div>
      </header>
      <div className="painting-container">
        <AuthorizationContext.Consumer>
          {({ user }) =>
            isAuth(user) && (
              <Button onClick={() => setShowForm(true)}>
                اضافة لوحة جديدة
              </Button>
            )
          }
        </AuthorizationContext.Consumer>
        {showForm && (
          <AddProduct
            className="add-btn"
            showForm={showForm}
            hideForm={hideForm}
          />
        )}
        <div className="paintings">
          <PaintingSection
            paintings={paintings}
            deletePainting={deletePainting}
          />
        </div>
      </div>
    </div>
  );
}
Profile.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      artistId: propTypes.node,
    }).isRequired,
  }).isRequired,
};

export default Profile;
