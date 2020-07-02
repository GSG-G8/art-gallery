import React, { useState } from 'react';
import { Upload } from 'antd';
import { Rnd } from 'react-rnd';
import { PlusOutlined } from '@ant-design/icons';
import propTypes from 'prop-types';
import './style.css';

const readFile = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function PictureWall({ paintingSrc }) {
  const [previewImage, setPreviewImage] = useState('');
  const [paintingWidth, setPaintingWidth] = useState(200);

  const handlePreview = async (file) => {
    if (!file.preview) {
      setPreviewImage(await readFile(file.originFileObj));
    }
  };
  const removeImg = () => {
    setPreviewImage('');
  };
  const cloudinaryLink =
    'https://res.cloudinary.com/dacf3uopo/image/upload/v1593353472/';
  return (
    <div className="dargContainer">
      <Upload
        accept="image/*"
        multiple={false}
        listType="picture-card"
        onPreview={handlePreview}
        onRemove={removeImg}
      >
        {!previewImage && (
          <div>
            <PlusOutlined />
            <div className="ant-upload-text">إضافة صورة الحائط</div>
          </div>
        )}
      </Upload>
      {previewImage && (
        <div
          className="devConta"
          style={{
            height: '100vh',
            background: `url(${previewImage}) center  no-repeat`,
          }}
        >
          <Rnd
            bounds="parent"
            onResize={(e, direction, ref) => {
              setPaintingWidth(ref.offsetWidth);
            }}
          >
            <img
              alt="painting"
              src={cloudinaryLink + paintingSrc}
              style={{ width: `${paintingWidth}px` }}
            />
          </Rnd>
        </div>
      )}
    </div>
  );
}

PictureWall.propTypes = {
  paintingSrc: propTypes.string.isRequired,
};

export default PictureWall;
