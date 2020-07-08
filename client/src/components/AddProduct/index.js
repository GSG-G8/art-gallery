import React, { useState } from 'react';
import Axios from 'axios';
import propTypes from 'prop-types';
import {
  Form,
  Input,
  Button,
  Spin,
  Alert,
  Select,
  message,
  Upload,
  Modal,
} from 'antd';
import {
  BsUpload,
  FaMinus,
  FaPlus,
  MdDescription,
  MdSubtitles,
} from 'react-icons/all';

import './style.css';
import FormItem from 'antd/lib/form/FormItem';

const { Option } = Select;

const AddProduct = ({ showForm, hideForm }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState();
  const [paintingImg, setPaintingImg] = useState();

  const onFinish = async ({ props, size, price, ...values }) => {
    const obj = {};
    obj[size] = price;
    if (props) {
      // eslint-disable-next-line no-return-assign
      props.map((el) => (obj[el.size] = el.price));
    }
    const body = {
      ...values,
      property: obj,
    };

    const formData = new FormData();

    formData.append('paintingImg', paintingImg);
    formData.append('data', JSON.stringify(body));
    try {
      setLoaded(true);
      await Axios.post(`/api/v1/painting`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setLoaded(false);
      message.success('تم إضافة اللوحة بنجاح');
      hideForm();
    } catch (err) {
      setError(err.response.data.message);
      setLoaded(false);
    }
  };
  const formRef = React.createRef();

  return (
    <div>
      <Modal
        visible={showForm}
        title="اضافة لوحة "
        okText="اضافة اللوحة"
        cancelText="إلغاء"
        onCancel={hideForm}
        onOk={() => formRef.current.submit()}
      >
        <Form
          ref={formRef}
          name="add_product"
          className="addProduct-form"
          onFinish={onFinish}
        >
          <h2 className="title-add">اضافة لوحة</h2>
          <Form.Item
            name="title"
            rules={[
              {
                required: true,
                message: 'رجاءً قم بادخال اسم اللوحة   !',
              },
            ]}
          >
            <Input
              prefix={<MdSubtitles />}
              placeholder="اسم اللوحة"
              className="form-input"
            />
          </Form.Item>
          <Form.Item
            name="description"
            rules={[
              {
                required: true,
                message: 'رجاءً قم بادخال تفاصيل اللوحة   !',
              },
            ]}
          >
            <Input
              prefix={<MdDescription />}
              placeholder="تفاصيل اللوحة"
              className="form-input"
            />
          </Form.Item>
          <div className="cat-div">
            <span>نوع اللوحة : </span>
            <FormItem name="category">
              <Select style={{ width: 120 }}>
                <Option value="nature">طبيعة</Option>
                <Option value="islamic">اسلامي</Option>
                <Option value="sky">سماء</Option>
                <Option value="hertage">ثقافة</Option>
                <Option value="other">غير ذلك</Option>
              </Select>
            </FormItem>
          </div>

          <div
            style={{ display: 'flex', marginBottom: 8, width: '100%' }}
            align="start"
          >
            <Form.Item
              name="size"
              label="حجم الصورة cm"
              rules={[{ required: true, message: 'أضف حجماً' }]}
            >
              <Input placeholder="حجم اللوحة" />
            </Form.Item>
            <Form.Item
              name="price"
              label="السعر دولار"
              rules={[{ required: true, message: 'أضف السعر' }]}
            >
              <Input style={{ width: '100%' }} placeholder="السعر" />
            </Form.Item>
          </div>

          <Form.List name="props">
            {(fields, { add, remove }) => {
              return (
                <div>
                  {fields.map((field) => (
                    <div
                      key={field.key}
                      style={{ display: 'flex' }}
                      align="start"
                    >
                      <>
                        <Form.Item
                          {...field}
                          name={[field.name, 'size']}
                          label="حجم الصورة cm"
                          fieldKey={[field.fieldKey, 'size']}
                          rules={[{ required: true, message: 'أضف حجماً' }]}
                        >
                          <Input placeholder="حجم اللوحة" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          label="السعر شيكل"
                          name={[field.name, 'price']}
                          fieldKey={[field.fieldKey, 'price']}
                          rules={[{ required: true, message: 'أضف السعر' }]}
                        >
                          <Input
                            style={{ width: '100%' }}
                            placeholder="السعر"
                          />
                        </Form.Item>
                      </>

                      <FaMinus
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    </div>
                  ))}

                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => {
                        add();
                      }}
                      block
                    >
                      <FaPlus /> أضف حجماً جديد
                    </Button>
                  </Form.Item>
                </div>
              );
            }}
          </Form.List>

          <Form.Item name="paintingImg">
            <Upload
              type="file"
              beforeUpload={(file) => {
                setPaintingImg(file);
                return false;
              }}
              onRemove={() => setPaintingImg(null)}
              value={paintingImg}
            >
              <Button>
                <BsUpload /> تحميل صورة اللوحة
              </Button>
            </Upload>
          </Form.Item>

          {loaded && (
            <span>
              <Spin />
              جاري التحميل
            </span>
          )}
          {error && <Alert message={error} type="error" />}
        </Form>
      </Modal>
    </div>
  );
};
AddProduct.propTypes = {
  profileData: propTypes.shape({
    title: propTypes.string,
  }).isRequired,
  showForm: propTypes.shape({
    showForm: propTypes.string,
  }).isRequired,
  hideForm: propTypes.shape({
    title: propTypes.func,
  }).isRequired,
  map: propTypes.shape({
    title: propTypes.func,
  }).isRequired,
  length: propTypes.shape({
    title: propTypes.func,
  }).isRequired,
};

export default AddProduct;
