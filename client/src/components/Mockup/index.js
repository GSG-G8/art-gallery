import React, { useState } from 'react';
import { Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './style.css';
import 'antd/dist/antd.css';

const readFile = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function PictureWall() {
  const [previewImage, setPreviewImage] = useState('');
  const handlePreview = async (file) => {
    if (!file.preview) {
      setPreviewImage(await readFile(file.originFileObj));
    }
  };
  const removeImg = () => {
    setPreviewImage('');
  };
  return (
    <>
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
            <div className="ant-upload-text">Upload</div>
          </div>
        )}
      </Upload>
      {previewImage && <img alt="hi" src={previewImage} />}
    </>
  );
}

export default PictureWall;
