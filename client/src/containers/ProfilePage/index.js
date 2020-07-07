import React from 'react';
import Profile from '../../components/ProfileArtist';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

function ProfilePage(props) {
  return (
    <div>
      <Navbar />
      <Profile {...props} />
      <Footer />
    </div>
  );
}

export default ProfilePage;
