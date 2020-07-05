import React from 'react';
import propTypes from 'prop-types';
import { Modal, Form, Input, Radio } from 'antd';
import Axios from 'axios';

function EditProfileForm({ profileData, showForm, hideForm }) {
  const {
    mobile_no: mobileNo,
    customized,
    social_media_accounts: accounts,
    bio,
  } = profileData;
  const formRef = React.createRef();

  const updateProfile = async (values) => {
    const { mobileNu, custome, biog, facebook, instagram } = values;
    console.log({ mobileNu, custome, biog, facebook, instagram }, 'form');

    try {
      const { data } = await Axios.patch('/api/v1/artist', {
        mobileNo: mobileNu,
        customized: custome,
        bio: biog,
        socialMediaAccounts: [facebook, instagram],
      });
      console.log({ data });
    } catch (err) {
      console.log(err);
    }
  };

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
            mobileNu: mobileNo,
            custome: customized,
            biog: bio,
            facebook: accounts[0],
            instagram: accounts[1],
          }}
          onFinish={updateProfile}
        >
          <Form.Item
            name="mobileNu"
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
          <Form.Item name="custome" label="هل تقوم بتنفيذ أعمال بحسب الطلب">
            <Radio.Group>
              <Radio value>نعم</Radio>
              <Radio value={false}>لا</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="biog" label="أضف نبذة شخصية">
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
