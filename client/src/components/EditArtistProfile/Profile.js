import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import Axios from 'axios';
import { message, Button } from 'antd';

import EditProfileForm from './index';
import AuthorizationContext from '../../Contexts/AuthorizationContext';

function Profile({ match }) {
  const [profileData, setProfileData] = useState();
  const [showForm, setShowForm] = useState(false);
  const { artistId } = match.params;

  const getArtistProfile = async (id) => {
    try {
      const { data: artistData } = await Axios.get(`/api/v1//profile/${id}`);
      setProfileData(artistData.data[0]);
    } catch (err) {
      message.error('تعذر جلب بيانات الفنان');
    }
  };
  const hideForm = () => setShowForm(false);
  useEffect(() => {
    getArtistProfile(artistId);
  }, []);
  return (
    <>
      <AuthorizationContext.Consumer>
        {({ user }) =>
          user.role === 'artist' &&
          user.id === +artistId && (
            <Button onClick={() => setShowForm(true)}>
              تعديل بيانات الحساب
            </Button>
          )
        }
      </AuthorizationContext.Consumer>
      {showForm && (
        <EditProfileForm
          profileData={profileData}
          showForm={showForm}
          hideForm={hideForm}
        />
      )}
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
