import React from 'react';
import PaintingsSection from '../../components/PaintingSection';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <PaintingsSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
