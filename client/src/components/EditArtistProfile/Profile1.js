import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import Axios from 'axios';
import { message, Button } from 'antd';
import EditProfileForm from './index';
import AuthorizationContext from '../../Contexts/AuthorizationContext';
import AddReview from '../ReviewForm';
import ReviewContainer from '../ReviewForm/ReviewContainer';

function Profile({ match }) {
  const [profileData, setProfileData] = useState();
  const [showForm, setShowForm] = useState(false);
  const [reviewVisible, setReviewVisible] = useState(false);
  const [reviews, setReviews] = useState();
  const { artistId } = match.params;

  const getArtistReviews = async (id) => {
    try {
      const { data } = await Axios.get(`/api/v1/review/${id}`);
      if (data.statusCode === 200) {
        setReviews(data.data);
      }
    } catch (err) {
      let e;
      if (err.response) {
        switch (err.response.data.message) {
          case 'Artist ID should be number':
            e = 'لا يمكن العثور على هذا الفنان';
            break;
          default:
            e = 'فشلت العملية, يرجى المحاولة لاحقاً';
        }
      } else {
        e = 'فشلت العملية, يرجى المحاولة لاحقاً';
      }
      message.error(e);
    }
  };

  const getArtistProfile = async (id) => {
    try {
      const { data: artistData } = await Axios.get(`/api/v1/profile/${id}`);
      setProfileData(artistData.data[0]);
    } catch (err) {
      message.error('تعذر جلب بيانات الفنان');
    }
  };
  const hideForm = () => setShowForm(false);
  const hideReview = () => setReviewVisible(false);

  useEffect(() => {
    getArtistProfile(artistId);
    getArtistReviews(artistId);
  }, [artistId]);
  return (
    <>
      <AuthorizationContext.Consumer>
        {({ user: { role, id } }) =>
          role === 'artist' &&
          id === +artistId && (
            <Button onClick={() => setShowForm(true)}>
              تعديل بيانات الحساب
            </Button>
          )
        }
      </AuthorizationContext.Consumer>
      <AuthorizationContext.Consumer>
        {({ user: { role } }) =>
          role === 'customer' && (
            <Button onClick={() => setReviewVisible(true)}>
              {' '}
              أضف تقييم الفنان
            </Button>
          )
        }
      </AuthorizationContext.Consumer>
      {reviewVisible && (
        <AddReview
          reviewVisible={reviewVisible}
          hideReview={hideReview}
          artistID={artistId}
        />
      )}
      {showForm && (
        <EditProfileForm
          profileData={profileData}
          showForm={showForm}
          hideForm={hideForm}
          updateProfile={getArtistProfile}
          artistId={artistId}
        />
      )}
      {reviews && <ReviewContainer reviews={reviews} />}
    </>
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
