import React from 'react';
import { Carousel } from 'antd';
import pic1 from '../../../assets/images/Calligraphy.jpg';
import pic3 from '../../../assets/images/Jerusalem.jpg';
import pic4 from '../../../assets/images/EgyptPyramids.jpg';
import pic5 from '../../../assets/images/words.jpg';
import './style.css';

const SlideShow = () => {
  return (
    <div className="main-carousal">
      <div className="titles-container">
        <h1 className="title-1">أرقى اللوحات الفنية</h1>
        <h1 className="title-2">تجدونها هنا </h1>
        <p>الفن العربي فن جميل يتضمن فن العمارة وفن الخط العربي وفن الزخرفة</p>
      </div>
      <div className="carousal-container">
        <Carousel autoplay>
          <div className="image-container">
            <img className="slider-image" src={pic5} alt="words" />
          </div>
          <div className="image-container">
            <img className="slider-image" src={pic1} alt="Calligraphy" />
          </div>
          <div className="image-container">
            <img src={pic3} alt="Jerusalem" className="slider-image" />
          </div>
          <div className="image-container">
            <img src={pic4} alt="EgyptPyramids" className="slider-image" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default SlideShow;
