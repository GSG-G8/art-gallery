import React from 'react';
import PaintingsSection from '../../components/PaintingSection';
import Footer from '../../components/common/Footer';
import './style.css';

function LandingPage() {
  return (
    <div>
      <PaintingsSection />
      <Footer className="landingP__footer" />
    </div>
  );
}

export default LandingPage;
