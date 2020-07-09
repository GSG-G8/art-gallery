import React from 'react';
import { Form, Input, Button, Select, Upload } from 'antd';
import { FaUpload } from 'react-icons/all';

import './style.css';

const { TextArea } = Input;
const { Option } = Select;

const CustomOrder = () => {
  return (
    <div className="main-form-custom">
      <div className="form-container">
        <h1 className="form-title">الطلب المخصص</h1>
        <h3 className="sub-title">
          اذا كنت تريد طلب مخصص لرسم لوحتك اطلب من هنا :
        </h3>
        <Form name="normal_login" className="login-form">
          <Form.Item>
            <p>ادخل صورة مشابهة او وصف لطلبك</p>
            <Upload>
              <Button>
                <FaUpload /> تحميل صورة
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="descrption"
            rules={[
              {
                required: true,
                message: 'الرجاء ادخال وصف الطلب',
              },
            ]}
          >
            <TextArea
              className="form-input"
              rows={4}
              placeholder="ادخل وصف لطلبك"
            />
          </Form.Item>
          <Form.Item>
            <p>اختر اسم الفنان : </p>
            <Select style={{ width: 200 }}>
              <Option value="alaa">الاء ابو سويرح</Option>
              <Option value="rana">رنا عبيد</Option>
              <Option value="lina">لينا يحيى</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="custom-form-button"
            >
              اطلب لوحتك
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CustomOrder;
