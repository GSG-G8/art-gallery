import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import AddProduct from '../AddProduct';

import './style.css';

const ArtistProfile = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <AddProduct />
      </Modal>
    </div>
  );
};

export default ArtistProfile;
