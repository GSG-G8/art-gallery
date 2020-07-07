import React from 'react';
import PaintingsSection from '../../components/PaintingSection';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import SlideShow from '../../components/common/Slider';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <SlideShow />
      <PaintingsSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
