import React, { useState } from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
} from 'react-stripe-elements';
import propTypes from 'prop-types';
import axios from 'axios';
import { Form, Button, Input, message, notification, Alert, Spin } from 'antd';

const CheckoutForm = ({ setBudget, stripe }) => {
  const [receiptUrl, setReceiptUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const stripeToken = await stripe.createToken();
      const { token, error } = stripeToken;
      const { amount } = values;
      if (token) {
        const { data } = await axios.post('/api/v1/stripe/charge', {
          amount: Number(amount).toFixed(2).replace('.', ''),
          source: token.id,
          budget: amount,
        });
        if (data.message === 'charge posted successfully') {
          setBudget(data.newUserBudget);
          notification.success({
            message: 'تمت عملية الدفع بنجاح',
            duration: 1,
            description: `رصيدك الحالي ${data.newUserBudget}$`,
          });
        }
        setReceiptUrl(data.charge.receipt_url);
      } else {
        setErrorMessage(error.message);
      }
    } catch (err) {
      if (
        err.response.data.message ===
        'Your card was declined. This transaction requires authentication.'
      ) {
        message.error('تم رفض البطاقة، يُرجى التحقق من المصادقات');
      } else {
        message.error('حصل خطأ غير متوقع، يُرجى المحاولة مرةً أخرى');
      }
    }
    setLoading(false);
  };
  if (receiptUrl) {
    return (
      <div className="success">
        <h2>تمت عملية الدفع بنجاح</h2>
        <a href={receiptUrl} target="_blank" rel="noopener noreferrer">
          لعرض الوصل الخاص بعملية الدفع
        </a>
      </div>
    );
  }
  return (
    <div className="checkout-form">
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="قيمة المبلغ المراد إضافته"
          name="amount"
          rules={[
            { required: true, message: 'بالرجاء إدخال المبلغ المراد إضافته' },
          ]}
        >
          <Input style={{ width: '50%' }} />
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
          <Button
            type="primary"
            style={{ color: 'aliceblue' }}
            htmlType="submit"
          >
            تنفيذ {loading && <Spin size="small" />}
          </Button>
        </Form.Item>
        {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
      </Form>
    </div>
  );
};

CheckoutForm.propTypes = {
  setBudget: propTypes.func.isRequired,
  stripe: propTypes.shape({
    createToken: propTypes.func.isRequired,
  }).isRequired,
};

export default injectStripe(CheckoutForm);
