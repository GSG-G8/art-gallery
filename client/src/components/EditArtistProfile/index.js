import React from 'react';
import propTypes from 'prop-types';
import { Modal, Form, Input, Radio } from 'antd';

function EditProfileForm({ profileData, showForm, hideForm }) {
  const {
    mobile_no: mobileNo,
    customized,
    social_media_accounts: accounts,
    bio,
  } = profileData;
  const formRef = React.createRef();

  return (
    <>
      <Modal
        visible={showForm}
        title="تعديل بيانات حسابك"
        okText="عدل البيانات"
        cancelText="إلغاء"
        onCancel={hideForm}
        onOk={() => formRef.current.submit()}
      >
        <Form
          ref={formRef}
          initialValues={{
            mobileNo,
            customized,
            bio,
            facebook: accounts[0],
            instagram: accounts[1],
          }}
          onFinish={(value) => console.log(value)}
        >
          <Form.Item
            name="mobileNo"
            label="رقم الجوال"
            rules={[
              {
                len: 13,
                message: 'رقم الجوال يجب أن يكون مبدوئاً بالرمز الدولي +970',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="customized" label="هل تقوم بتنفيذ أعمال بحسب الطلب">
            <Radio.Group>
              <Radio value>نعم</Radio>
              <Radio value={false}>لا</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="bio" label="أضف نبذة شخصية">
            <Input />
          </Form.Item>
          <Form.Item
            name="facebook"
            label="حساب فيسبوك"
            rules={[
              {
                type: 'url',
                message: 'يجب أن يكون رابط',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="instagram"
            label="حساب انستجرام"
            rules={[
              {
                type: 'url',
                message: 'يجب أن يكون رابط',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
EditProfileForm.propTypes = {
  profileData: propTypes.shape({
    mobile_no: propTypes.number,
    customized: propTypes.bool.isRequired,
    social_media_accounts: propTypes.array,
    bio: propTypes.string,
  }).isRequired,
  showForm: propTypes.bool.isRequired,
  hideForm: propTypes.func.isRequired,
};
export default EditProfileForm;
