import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import Axios from 'axios';
import { FaFacebook, FaInstagram, FiEdit } from 'react-icons/all';
import { message, Spin, Button, Alert, Upload, Form } from 'antd';

import AddProduct from '../AddProduct';
import AuthorizationContext from '../../Contexts/AuthorizationContext';
import PaintingSection from '../PaintingSection/PaintingsSection';
import EditArtistProfile from '../EditArtistProfile';

import './style.css';

function Profile({ match }) {
  const [profileData, setProfileData] = useState();
  const [showForm, setShowForm] = useState(false);
  const [showFormEdit, setShowFormEdit] = useState(false);
  const [paintings, setPaintings] = useState();
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [ArtistImg, setArtistImg] = useState();
  const cloudinaryLink =
    'https://res.cloudinary.com/dacf3uopo/image/upload/v1593353472/';
  const { artistId } = match.params;

  const getArtistProfile = async (id) => {
    try {
      const {
        data: { data: artistData },
      } = await Axios.get(`/api/v1/profile/${id}`);
      setProfileData(artistData[0]);
      setArtistImg(artistData[0].profile_img);
    } catch (err) {
      let e;
      if (err.response.data.message === "Sorry There's no artist for this id") {
        e = 'لا يوجد فنان بهذا المعرف';
      } else {
        e = 'تعذر جلب بيانات الفنان';
      }
      setError(e);
    }
  };

  const getAllPainting = async (id) => {
    try {
      const { data } = await Axios.get(`/api/v1/paintingsArtist/${id}`);
      if (data.statusCode === 200) {
        setPaintings(data.data);
      }
    } catch (err) {
      let e;
      if (
        err &&
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
    getArtistProfile(artistId);
  }, []);

  useEffect(() => {
    getAllPainting(artistId);
  }, []);

  const hideForm = () => setShowForm(false);
  const hideFormEdit = () => setShowFormEdit(false);

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

  const onFinish = async () => {
    try {
      setLoaded(true);
      const formData = new FormData();
      formData.append('profileImg', ArtistImg);
      const {
        data: { message: msg, statusCode },
      } = await Axios.patch('/api/v1/artist/avatar', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (statusCode === 200 && msg === 'Image added successfully') {
        setLoaded(false);
        message.success('تم تعديل الصورة الشخصية بنجاح');
        getArtistProfile(artistId);
      }
    } catch (err) {
      if (err.response.data.message[0] === 'Should be an image png or jpeg') {
        message.error('يجب ادخال صورة بامتداد png , jpeg');
        setLoaded(false);
      } else {
        message.error(' فشل تحميل الصورة الرجاء المحاولة مرة اخرى');
      }
    }
  };

  const isAuth = (user) => user.role === 'artist' && user.id === +artistId;

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
                  src={
                    ArtistImg && `${cloudinaryLink}${profileData.profile_img}`
                  }
                />
                {loaded && <Spin />}
                <Form
                  className="form-edit-img"
                  layout="inline"
                  name="edit-img-form"
                  onFinish={onFinish}
                >
                  <Form.Item name="artistImg">
                    <Upload
                      type="file"
                      beforeUpload={(file) => {
                        setArtistImg(file);
                        return false;
                      }}
                      onRemove={() => setArtistImg(null)}
                      value={ArtistImg}
                    >
                      <Button onClick className="edit-img-btn">
                        <FiEdit />
                      </Button>
                    </Upload>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      className="edit-img-btn submit"
                      type="primary"
                      htmlType="submit"
                    >
                      حفظ الصورة
                    </Button>
                  </Form.Item>
                </Form>
              </div>
              <p>
                {profileData.first_name} {profileData.last_name}
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
              <p>{profileData.bio}</p>
              <p>
                <span>رقم الهاتف : </span> {profileData.mobile_no}
              </p>
              {profileData.social_media_accounts && (
                <div className="social_media">
                  <a
                    href={
                      profileData.social_media_accounts
                        ? profileData.social_media_accounts[0]
                        : null
                    }
                  >
                    <FaFacebook className="facebook" />
                  </a>
                  <a
                    href={
                      profileData.social_media_accounts
                        ? profileData.social_media_accounts[1]
                        : 'www.google.com'
                    }
                  >
                    <FaInstagram />
                  </a>
                </div>
              )}
            </>
          ) : (
            <Spin />
          )}
        </div>
        <div className="left-header">
          <AuthorizationContext.Consumer>
            {({ user }) =>
              isAuth(user) && (
                <Button onClick={() => setShowFormEdit(true)}>
                  تعديل بيانات الحساب
                </Button>
              )
            }
          </AuthorizationContext.Consumer>
          {showFormEdit && (
            <EditArtistProfile
              profileData={profileData}
              showForm={showFormEdit}
              hideForm={hideFormEdit}
              updateProfile={getArtistProfile}
              artistId={artistId}
            />
          )}
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
