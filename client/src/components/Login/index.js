import React, { useState } from 'react';
import Axios from 'axios';
import { Form, Input, Button, message, Spin, Alert, Radio } from 'antd';
import propTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import * as ROUTES from '../../constants/routes';
import './style.css';

const Login = ({ setRole: switchRole }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState();
  const [role, setRole] = useState('customer');

  const history = useHistory();

  const onFinish = async ({ email, password }) => {
    try {
      setLoaded(true);
      await Axios.post(`/api/v1/login`, {
        email,
        password,
        role,
      });
      message.success('تم تسجيل الدخول بنجاح');
      setLoaded(false);
      switchRole(role);
      history.push(ROUTES.HOME_PAGE);
    } catch (err) {
      let e;
      if (err.response) {
        switch (err.response.data.message) {
          case 'You have to sign up first':
            e = 'البريد الإلكتروني خاطئ';
            break;
          case 'Incorrect Password':
            e = 'كلمة المرور خاطئة !';
            break;
          default:
            e = 'حصل خطأ غير متوقع حاول مجددًا مرةً أخرى';
        }
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
              {
                type: 'email',
                message: 'ادخل بريد الكتروني صالح',
              },
            ]}
          >
            <Input
              prefix={<AiOutlineMail className="site-form-item-icon" />}
              placeholder="البريد الالكتروني"
              className="form-input"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'رجاءً قم بإدخال كلمة المرور !',
              },
            ]}
          >
            <Input
              prefix={<AiOutlineLock className="site-form-item-icon" />}
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
            <Link className="sign-up-btn" to={ROUTES.SIGNUP_PAGE}>
              مستخدم جديد
            </Link>
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
  setRole: propTypes.func.isRequired,
};

export default Login;
