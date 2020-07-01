import React, { useState } from 'react';
import Axios from 'axios';
import {
  Form,
  Input,
  Button,
  message,
  Spin,
  Alert,
  Upload,
  Select,
} from 'antd';
import {
  RiPriceTag2Line,
  MdPhotoSizeSelectLarge,
  MdDescription,
  AiOutlineCloudUpload,
  MdSubtitles,
} from 'react-icons/all';
import './style.css';

const { Option } = Select;

const AddProduct = () => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState();
  const [paintingImg, setPaintingImg] = useState();
  const [category, setCategory] = useState();

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      //   console.log(info);
      if (info.file.status !== 'uploading') {
        // eslint-disable-next-line no-console
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        setPaintingImg(info.file.name);
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const handleCategories = (value) => {
    setCategory(value);
  };
  const onFinish = async ({ title, description, size, price }) => {
    try {
      setLoaded(true);
      await Axios.post(`/api/v1/painting`, {
        title,
        description,
        property: JSON.stringify({ size, price }),
        category,
        paintingImg,
      });
      setLoaded(false);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err.response);
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
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleCategories}
          >
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
        <Upload {...props} multiple={false} customRequest={() => {}}>
          <Button>
            <AiOutlineCloudUpload /> تحميل صورة
          </Button>
        </Upload>

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
