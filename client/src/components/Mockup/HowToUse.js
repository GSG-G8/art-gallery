import React from 'react';
import PictureWall from './index';
import './style.css';

function Details() {
  const paintingSrc =
    'https://5.imimg.com/data5/NW/ZP/ZO/SELLER-75452045/beauty-during-rainy-season-paintings-500x500.jpg';
  return (
    <>
      <PictureWall paintingSrc={paintingSrc} />
    </>
  );
}

export default Details;
