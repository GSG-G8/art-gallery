/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
} from 'react-stripe-elements';
import axios from 'axios';
import { Form, Button, Input } from 'antd';

const CheckoutForm = ({ stripe }) => {
  const [receiptUrl, setReceiptUrl] = useState('');

  const handleSubmit = async (values) => {
    const { token } = await stripe.createToken();
    const { amount } = values;

    const order = await axios.post('/api/v1/stripe/charge', {
      amount: amount.toString().replace('.', ''),
      source: token.id,
      receipt_email: 'mu7ammadabed@gmail.com',
    });

    setReceiptUrl(order.data.charge.receipt_url);
  };
  if (receiptUrl) {
    return (
      <div className="success">
        <h2>Payment Successful!</h2>
        <a href={receiptUrl}>View Receipt</a>
        <Link to="/">Home</Link>
      </div>
    );
  }
  return (
    <div className="checkout-form">
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="قيمة المبلغ المراد إضافته" name="amount">
          <Input />
        </Form.Item>
        <Form.Item label="Credit Card Details">
          <CardNumberElement />
        </Form.Item>
        <Form.Item label="Credit Card Expiry Date">
          <CardExpiryElement />
        </Form.Item>
        <Form.Item label="Credit Card CVC">
          <CardCVCElement />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default injectStripe(CheckoutForm);
