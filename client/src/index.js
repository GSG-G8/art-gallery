import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import Arabic from 'antd/es/locale/ar_EG';
import App from './app';

ReactDOM.render(
  <ConfigProvider direction="rtl" locale={Arabic}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
);
