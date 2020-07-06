import React from 'react';
import PaintingsSection from '../../components/PaintingSection';
import Footer from '../../components/common/Footer';
import Slider from '../../components/common/Slider';
import './style.css';

function LandingPage() {
  return (
    <div>
      <Slider />
      <PaintingsSection />
      <Footer className="landingP__footer" />
    </div>
  );
}

export default LandingPage;
