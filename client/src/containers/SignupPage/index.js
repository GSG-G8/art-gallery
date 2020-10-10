import React, { useState } from 'react';
import Axios from 'axios';
import { Form, Input, Button, message, Spin, Alert, Radio } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import { AiOutlineMail, AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import * as ROUTES from '../../constants/routes';
import '../LoginPage/style.css';

const Register = ({ setRole: swithRole }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState();
  const [role, setRole] = useState('customer');
  const [customized, setCustomized] = useState(false);

  const history = useHistory();

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
      const name = data.message?.split(',');
      message.success(`مرحبا, ${name[1]} تم تسجيل حسابك بنجاح`);
      setLoaded(false);
      swithRole(role);
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
      }
      setError(e);
      setLoaded(false);
    }
  };
  return (
    <div className="main-form-container">
      <div className="form-container">
        <h2 className="form-title">أهلًا بكَ في موقع برواز</h2>
        <h3 className="sub-title">سجل حسابك كـ</h3>
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
            rules={[
              { required: true, message: '!رجاء قم بادخال اسمك الاول' },
              { min: 2, message: ' الاسم يجب ان يكون اكثر من حروفين' },
              { max: 20, message: 'لقد تجاوزت الحد المسموح' },
            ]}
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
            rules={[
              { required: true, message: '!رجاء قم بادخال اسمك الثاني' },
              { min: 2, message: 'الاسم يجب ان يكون اكثر من حروفين' },
              { max: 20, message: 'لقد تجاوزت الحد المسموح' },
            ]}
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
              placeholder="البريد الالكتروني"
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
              placeholder="تأكيد كلمة المرور"
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
  setRole: propTypes.func.isRequired,
};

export default Register;
