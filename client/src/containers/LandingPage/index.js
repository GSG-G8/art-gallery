import React from 'react';
import PaintingsSection from '../../components/PaintingSection';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import Slider from '../../components/common/Slider';
import CustomForm from '../../components/CustomSection';
import './style.css';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Slider />
      <PaintingsSection />
      <CustomForm />
      <Footer />
    </div>
  );
}

export default LandingPage;
