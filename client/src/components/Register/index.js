import React, { useState } from 'react';
import Axios from 'axios';
import { Form, Input, Button, message, Spin, Alert, Radio } from 'antd';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { AiOutlineMail, AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import * as ROUTES from '../../constants/routes';
import '../Login/style.css';

const Register = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState();
  const [role, setRole] = useState('customer');
  const [customized, setCustomized] = useState(false);

  const onFinish = async ({
    email,
    password,
    firstName,
    lastName,
    confirmPassword,
  }) => {
    try {
      setLoaded(true);
      const { data } = await Axios.post(`/api/v1/sign-up`, {
        email: email.trim(),
        password,
        confirmPassword,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        role,
        customized,
      });
      const { history } = props;
      message.success(data.message);
      setLoaded(false);
      history.push(ROUTES.HOME_PAGE);
    } catch (err) {
      let e;
      if (err.response) {
        switch (err.response.data.message) {
          case 'email exist !!':
            e = 'البريد الالكتروني موجود بالفعل !!';
            break;
          case 'Passwords must match':
            e = 'كلمة المرور لا تتطابق !! ';
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
        <h2 className="form-title">اهلا بك في موقع برواز</h2>
        <h3 className="sub-title">سجل دخولك كـ</h3>
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
            name="firstName"
            rules={[{ required: true, message: '!رجاء قم بادخال اسمك الاول' }]}
          >
            <Input
              prefix={<AiOutlineUser className="site-form-item-icon" />}
              type="text"
              placeholder="الاسم الاول"
              className="form-input"
            />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[{ required: true, message: '!رجاء قم بادخال اسمك الثاني' }]}
          >
            <Input
              prefix={<AiOutlineUser className="site-form-item-icon" />}
              type="text"
              placeholder="الاسم الثاني"
              className="form-input"
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: '!رجاء قم بادخال بريدك الالكتروني' },
              {
                type: 'email',
                message: 'ادخل بريد الكتروني صالح',
              },
            ]}
          >
            <Input
              prefix={<AiOutlineMail className="site-form-item-icon" />}
              placeholder="الايميل"
              className="form-input"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '!رجاء قم بادخال كلمة المرور' }]}
          >
            <Input
              prefix={<AiOutlineLock className="site-form-item-icon" />}
              type="password"
              placeholder="كلمة المرور"
              className="form-input"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            rules={[{ required: true, message: '!رجاء قم بادخال كلمة المرور' }]}
          >
            <Input
              prefix={<AiOutlineLock className="site-form-item-icon" />}
              type="password"
              placeholder="تاكيد كلمة المرور"
              className="form-input"
            />
          </Form.Item>
          {role === 'artist' && (
            <div className="radio-container">
              <p> هل تقوم بالرسم حسب الطلب؟ </p>
              <Radio.Group onChange={(e) => setCustomized(e.target.value)}>
                <Radio value="true">نعم</Radio>
                <Radio value="false">لا</Radio>
              </Radio.Group>
            </div>
          )}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {loaded ? <Spin /> : 'تسجيل حسابي'}
            </Button>
            <br />
            <Link className="sign-up-btn" to={ROUTES.LOGIN_PAGE}>
              تسجيل الدخول بدلاً من ذلك
            </Link>
          </Form.Item>
          {error && <Alert message={error} type="error" />}
        </Form>
      </div>
    </div>
  );
};
Register.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
    goBack: propTypes.func.isRequired,
  }).isRequired,
};

export default Register;
