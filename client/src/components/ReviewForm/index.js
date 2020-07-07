import React from 'react';
import { Modal, Form, Input, Rate, message } from 'antd';
import propTypes from 'prop-types';
import Axios from 'axios';

function AddReview({ reviewVisible, hideReview, artistID }) {
  const formRef = React.createRef();

  const SubmitReview = async (values) => {
    const { details, rate } = values;
    try {
      const { data } = await Axios.post('/api/v1/review', {
        details,
        rate,
        artistID,
      });
      if (data.StatusCode === 201) {
        message.success('تم إضافة التقييم بنجاح');
        hideReview();
      }
    } catch (err) {
      let e;
      if (err.response) {
        switch (err.response.data.message) {
          case 'NO ARTIST FOR THIS ID':
            e = 'الفنان الذي تريد تقييمه غير موجود';
            break;
          case 'rate should be integer':
            e = 'التقييم يجب أن يكون عدد صحيح';
            break;
          default:
            e = 'فشلت العملية, يرجى المحاولة لاحقاً';
        }
      } else {
        e = 'فشلت العملية, يرجى المحاولة لاحقاً';
      }
      message.error(e);
      hideReview();
    }
  };
  return (
    <Modal
      visible={reviewVisible}
      onCancel={hideReview}
      okText="أضف تقييمك"
      title="قم بتقييم الفنان"
      cancelText="إلغاء"
      onOk={() => formRef.current.submit()}
    >
      <Form ref={formRef} onFinish={SubmitReview}>
        <Form.Item name="rate" label="تقييم">
          <Rate />
        </Form.Item>
        <Form.Item name="details" label="تفاصيل">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
}

AddReview.propTypes = {
  reviewVisible: propTypes.bool.isRequired,
  hideReview: propTypes.func.isRequired,
  artistID: propTypes.number.isRequired,
};
export default AddReview;
