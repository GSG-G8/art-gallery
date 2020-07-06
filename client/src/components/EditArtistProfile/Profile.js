import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import Axios from 'axios';
import { message, Spin } from 'antd';

function Profile({ match }) {
  const [profileData, setProfileData] = useState();

  const getArtistProfile = async (id) => {
    try {
      const { data: artistData } = await Axios.get(`/api/v1//profile/${id}`);
      setProfileData(artistData.data);
    } catch (err) {
      message.error('تعذر جلب بيانات الفنان');
    }
  };
  useEffect(() => {
    getArtistProfile(match.params.artistId);
  });
  return <>{profileData ? <h1>hiii</h1> : <Spin />}</>;
}
Profile.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      artistId: propTypes.node,
    }).isRequired,
  }).isRequired,
};

export default Profile;
