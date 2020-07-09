/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
} from 'react-stripe-elements';
import axios from 'axios';
import { Form, Button, Input, message, notification } from 'antd';

const CheckoutForm = ({ stripe }) => {
  const [receiptUrl, setReceiptUrl] = useState('');

  const handleSubmit = async (values) => {
    try {
      const stripeToken = await stripe.createToken();
      const { token, error } = stripeToken;
      const { amount } = values;
      if (token) {
        const { data } = await axios.post('/api/v1/stripe/charge', {
          amount: Number(amount).toFixed(2).replace('.', ''),
          source: token.id,
          receipt_email: 'mu7ammadabed@gmail.com',
          budget: amount,
        });
        if (data.message === 'charge posted successfully') {
          notification.success({
            message: 'تمت عملية الدفع بنجاح',
            description: `رصيدك الحالي ${data.newUserBudget}$`,
          });
        }
        setReceiptUrl(data.charge.receipt_url);
      } else {
        message.error(error.message);
      }
    } catch (err) {
      message.error('حصل خطأ غير متوقع، يُرجى المحاولة مرةً أخرى');
    }
  };
  if (receiptUrl) {
    return (
      <div className="success">
        <h2>تمت عملية الدفع بنجاح</h2>
        <a href={receiptUrl}>لعرض الوصل الخاص بعملية الدفع</a>
      </div>
    );
  }
  return (
    <div className="checkout-form">
      <Form layout="vertical" onFinish={handleSubmit} confirmLoading>
        <Form.Item
          label="قيمة المبلغ المراد إضافته"
          name="amount"
          rules={[
            { required: true, message: 'بالرجاء إدخال المبلغ المراد إضافته' },
          ]}
        >
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
            تنفيذ
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default injectStripe(CheckoutForm);
