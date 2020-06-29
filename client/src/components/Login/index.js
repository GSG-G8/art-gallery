import React, { useState } from 'react';
import Axios from 'axios';
import { Form, Input, Button, message, Spin, Alert, Radio } from 'antd';
import propTypes from 'prop-types';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

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
        e = 'Something went wrong, please try again later';
      }
      setError(e);
      setLoaded(false);
    }
  };
  return (
    <div>
      <Form name="normal_login" className="login-form" onFinish={onFinish}>
        <Radio.Group
          onChange={({ target: { value } }) => setRole(value)}
          defaultValue="customer"
        >
          <Radio.Button value="artist">artist</Radio.Button>
          <Radio.Button value="customer">customer</Radio.Button>
        </Radio.Group>
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
Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
    goBack: propTypes.func.isRequired,
  }).isRequired,
};

export default Login;
