import React from 'react';
import { Rate, Form, Input, Button, message } from 'antd';
import axios from 'axios';
import reviewPhoto from '../../assets/images/review.svg';
import './style.css';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};

const ReviewPage = () => {
  const onFinish = async ({ rate, details }) => {
    console.log('details :>> ', details);
    console.log('rate :>> ', rate);

    try {
      await axios
        .post('/api/v1/review', { rate, details })
        .then(() => message.success('شكرا على اتصالاك نهارك سعيد'));
    } catch (err) {
      let error;
      if (err.response) error = err.response.data.message;
      else error = 'something went wrong, please try again later';
      message.error(error);
    }
  };

  return (
    <div className="page-container">
      <div className="review-img-container">
        <img className="review-img" src={reviewPhoto} alt="reviewPhoto" />
      </div>
      <div className="review-container">
        <Form {...layout} name="nest-messages" onFinish={onFinish}>
          <div className="titles-container">
            <h2 className="title-1">ما رأيك بأداء هذا الرسام ؟</h2>
            <h3 className="title-2">رأيك مهم بالنسبة لنا</h3>
          </div>
          <Form.Item
            className="rate-container"
            name="rate"
            rules={[
              {
                required: true,
                message: 'يرجى ادخال تقييم',
              },
            ]}
          >
            <Rate className="star-rate" defaultValue={0} />
          </Form.Item>
          <Form.Item
            className="textarea-review"
            name="details"
            label="التعليق"
            rules={[
              {
                required: true,
                message: 'يرجى ادخال تعليق',
              },
            ]}
          >
            <Input.TextArea
              className="textarea-container"
              placeholder="التعليق ...."
            />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button
              className="review-btn"
              type="primary"
              htmlType="submit"
              onClick={(e) => e.target.value}
            >
              ارسال التعليق
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ReviewPage;
