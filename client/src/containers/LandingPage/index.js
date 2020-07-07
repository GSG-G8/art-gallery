import React from 'react';
import PaintingsSection from '../../components/PaintingSection';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import Slider from '../../components/common/Slider';
import './style.css';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Slider />
      <PaintingsSection />
      <Footer className="landingP__footer" />
    </div>
  );
}

export default LandingPage;
