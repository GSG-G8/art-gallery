import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { notification } from 'antd';
import PaintingSection from './index';
import './index.css';

function App() {
  const [paintings, setPaintings] = useState();

  const getPaintings = async () => {
    try {
      const {
        data: { data },
      } = await axios.get('/api/v1/paintings/all');
      setPaintings(data);
    } catch (err) {
      notification.error('عذراً, لا يمكن تحميل اللوحات');
    }
  };

  useEffect(() => {
    getPaintings();
  }, []);

  return (
    <>
      <PaintingSection paintings={paintings} />
    </>
  );
}

export default App;
