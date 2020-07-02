import React, { useState } from 'react';
import Axios from 'axios';
import { Form, Input, Button, Spin, Alert, Select, message } from 'antd';
import {
  RiPriceTag2Line,
  MdPhotoSizeSelectLarge,
  MdDescription,
  MdSubtitles,
} from 'react-icons/all';
import './style.css';

const { Option } = Select;

const AddProduct = () => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState();
  const [paintingImg, setPaintingImg] = useState();
  const [category, setCategory] = useState();

  const handleCategories = (value) => {
    setCategory(value);
  };

  const onFinish = async ({ title, description, size, price }) => {
    const formData = new FormData();
    formData.append('paintingImg', paintingImg[0]);
    formData.append(
      'data',
      JSON.stringify({
        title,
        description,
        property: JSON.stringify({ size, price }),
        category,
      })
    );
    try {
      setLoaded(true);
      await Axios.post(`/api/v1/painting`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setLoaded(false);
      message.success('تم إضافة اللوحة بنجاح');
    } catch (err) {
      setError(err.response.data.message);
      setLoaded(false);
    }
  };
  return (
    <div>
      <Form name="add_product" className="addProduct-form" onFinish={onFinish}>
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
          <Select style={{ width: 120 }} onChange={handleCategories}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
        </div>
        <Form.Item
          name="size"
          rules={[
            {
              required: true,
              message: 'رجاءً قم بادخال حجم اللوحة   !',
            },
          ]}
        >
          <Input
            prefix={<MdPhotoSizeSelectLarge />}
            placeholder="حجم اللوحة"
            className="form-input"
          />
        </Form.Item>
        <Form.Item
          name="price"
          rules={[
            {
              required: true,
              message: 'رجاءً قم بادخال سعر اللوحة   !',
            },
          ]}
        >
          <Input
            prefix={<RiPriceTag2Line />}
            placeholder="سعر اللوحة"
            className="form-input"
          />
        </Form.Item>
        <Form.Item name="paintingImg">
          <input type="file" onChange={(e) => setPaintingImg(e.target.files)} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {loaded ? (
              <span>
                <Spin />
                loading
              </span>
            ) : (
              'اضافة لوحة '
            )}
          </Button>
        </Form.Item>
        {error && <Alert message={error} type="error" />}
      </Form>
    </div>
  );
};

export default AddProduct;
