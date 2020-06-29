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
        e = 'حصل خطأ غير متوقع حاول مجددا مرة اخرى';
      }
      setError(e);
      setLoaded(false);
    }
  };
  return (
    <div className="form-container">
      <h2 className="form-title">اهلا بك في موقع برواز</h2>
      <h3 className="sub-title">سجل دخولك كـ</h3>
      <Form name="normal_login" className="login-form" onFinish={onFinish}>
        <Radio.Group
          onChange={({ target: { value } }) => setRole(value)}
          defaultValue="customer"
          className="radio-g"
        >
          <Radio.Button className="radio-btn" value="customer">
            مشتري
          </Radio.Button>
          <Radio.Button className="radio-btn" value="artist">
            فنان
          </Radio.Button>
        </Radio.Group>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: '!رجاء قم بادخال بريدك الالكتروني' },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="الايميل"
            className="form-input"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '!رجاء قم بادخال كلمة المرور' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="كلمة المرور"
            className="form-input"
          />
        </Form.Item>
        <a className="login-form-forgot" href="/">
          نسيت كلمة المرور؟
        </a>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            {loaded ? <Spin /> : 'تسجيل الدخول'}
          </Button>
          <br />
          <a className="sign-up-btn" href="/login">
            مستخدم جديد
          </a>
        </Form.Item>
        {error && <Alert message={error} type="error" />}
      </Form>
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
