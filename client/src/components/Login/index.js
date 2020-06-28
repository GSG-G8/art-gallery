import React, { useState } from 'react';
import Axios from 'axios';
import { Form, Input, Button, message, Spin, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {
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
      //   const { history } = props;
      message.success(data.message);
      //   history.push('/');
    } catch (err) {
      let e;
      if (err.response) {
        e = err.response.data.message;
      } else {
        e = 'Something went wrong, please try again later';
      }
      setError(e);
      setLoaded(false);
    }
  };
  return (
    <div>
      <Button value="artist" onClick={() => setRole('artist')}>
        artist
      </Button>
      <Button value="customer" onClick={() => setRole('customer')}>
        customer
      </Button>
      <Form name="normal_login" className="login-form" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item />
        <a className="login-form-forgot" href="/">
          Forgot password
        </a>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            {loaded ? <Spin /> : 'Login'}
          </Button>
          <br />
          <a href="/login">register now!</a>
        </Form.Item>
        {error && <Alert message={error} type="error" />}
      </Form>
    </div>
  );
};

export default Login;
