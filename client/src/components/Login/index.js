import React, { useState } from 'react';
import Axios from 'axios';
import { Form, Input, Button, message, Spin, Alert, Radio } from 'antd';
import propTypes from 'prop-types';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './style.css';

const Login = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState();
  const [role, setRole] = useState('customer');

  const onFinish = async ({ email, password }) => {
    try {
      setLoaded(true);
      const { data } = await Axios.post(`/api/v1/login`, {
        email,
        password,
        role,
      });
      const { history } = props;
      message.success(data.message);
      setLoaded(false);
      history.push('/');
    } catch (err) {
      let e;
      if (err.response) {
        e = err.response.data.message;
      } else {
        e = 'حصل خطأ غير متوقع حاول مجددًا مرةً أخرى';
      }
      setError(e);
      setLoaded(false);
    }
  };
  return (
    <div className="main-form-container">
      <div className="form-container">
        <h2 className="form-title">أهلًا بكَ في موقع برواز</h2>
        <h3 className="sub-title">تسجيل الدخول كـ</h3>
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <Radio.Group
            onChange={({ target: { value } }) => setRole(value)}
            defaultValue="customer"
            className="radio-g"
          >
            <Radio.Button className="radio-btn" value="customer">
              مشترٍ
            </Radio.Button>
            <Radio.Button className="radio-btn" value="artist">
              فنان
            </Radio.Button>
          </Radio.Group>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'رجاءً قم بإدخال البريد الإلكتروني !',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="الإيميل"
              className="form-input"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'رجاءً قم بإدخال كلمة المرور !' },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="كلمة المرور"
              className="form-input"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {loaded ? <Spin /> : 'تسجيل الدخول'}
            </Button>
            <br />
            <a className="sign-up-btn" href="/signup">
              مستخدم جديد
            </a>
          </Form.Item>
          {error && <Alert message={error} type="error" />}
        </Form>
      </div>
    </div>
  );
};
Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
    goBack: propTypes.func.isRequired,
  }).isRequired,
};

export default Login;
