import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { Form, Input, Button, message, Spin, Alert } from 'antd';
import propTypes from 'prop-types';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import * as ROUTES from '../../constants/routes';
import '../LoginPage/style.css';

const AdminLogin = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState();
  const history = useHistory();

  const onFinish = async ({ email, password }) => {
    try {
      setLoaded(true);
      await Axios.post(`/api/v1/admin/login`, {
        email,
        password,
        role: 'admin',
      });
      const { setRole } = props;
      message.success('تم تسجيل الدخول بنجاح');
      setLoaded(false);
      setRole('admin');
      history.push(ROUTES.ADMIN_DASHBOARD_PAGE);
    } catch (err) {
      let e;
      if (err.response) {
        switch (err.response.data.message) {
          case 'Incorrect Password':
            e = ' كلمة المرور خاطئة!';
            break;
          case 'You have to sign up first':
            e = 'البريد الإلكتروني خاطئ';
            break;
          default:
            e = 'حصل خطأ غير متوقع حاول مجددًا مرةً أخرى';
        }
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
        <h2 className="form-title"> أهلًا بك في صفحة المدير</h2>
        <Form
          name="normal_login"
          className="admin-login-form"
          onFinish={onFinish}
        >
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
          </Form.Item>
          {error && <Alert message={error} type="error" />}
        </Form>
      </div>
    </div>
  );
};
AdminLogin.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
    goBack: propTypes.func.isRequired,
  }).isRequired,
  setRole: propTypes.func.isRequired,
};

export default AdminLogin;
