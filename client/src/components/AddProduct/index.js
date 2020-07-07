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
  RiPriceTag2Line,
  MdPhotoSizeSelectLarge,
  MdDescription,
  MdSubtitles,
} from 'react-icons/all';

import './style.css';

const { Option } = Select;

const AddProduct = ({ showForm, hideForm }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState();
  const [paintingImg, setPaintingImg] = useState();
  const [category, setCategory] = useState();
  const [sizeProp, setSizeProp] = useState([]);
  const [priceProp, setPriceProp] = useState([]);
  // const [property, setProperty] = useState({});

  const requiredField = sizeProp.length && priceProp.length ? 'false' : 'true';

  // const obj = {};
  // for (const i in sizeProp) {
  //   for (const j in priceProp) {
  //     obj[i] = j;
  //   }
  // }
  // setProperty({ ...property, obj });

  const handleCategories = (value) => {
    setCategory(value);
  };
  const addProp = ({ size, price }) => {
    setSizeProp([...sizeProp, size]);
    setPriceProp([...priceProp, price]);
    // setProperty([...property, { [size]: price }]);
  };

  const onFinish = async ({ title, description }) => {
    const formData = new FormData();
    formData.append('paintingImg', paintingImg);
    formData.append(
      'data',
      JSON.stringify({
        title,
        description,
        property: JSON.stringify({ sizeProp, priceProp }),
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
            <Select style={{ width: 120 }} onChange={handleCategories}>
              <Option value="landscape">طبيعة</Option>
              <Option value="islamic">اسلامي</Option>
              <Option value="sky">سماء</Option>
              <Option value="hertiage">ثقافة</Option>
              <Option value="other">غير ذلك</Option>
            </Select>
          </div>
          <Form
            layout="inline"
            className="addProduct-form-prop"
            onFinish={addProp}
          >
            <Form.Item
              name="size"
              rules={[
                {
                  required: { requiredField },
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
                  required: { requiredField },
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
            <Form.Item>
              <Button className="btn-prop" type="primary" htmlType="submit">
                اضافة خاصية
              </Button>
            </Form.Item>{' '}
          </Form>
          <div className="div-prop">
            <div>
              {sizeProp.length > 0 &&
                sizeProp.map((el) => <p key={`${el}11`}>{el}</p>)}
            </div>
            <div>
              {' '}
              {priceProp.length &&
                priceProp.map((el) => <p key={`${el}11`}>{el}$</p>)}
            </div>
          </div>
          <Form.Item name="paintingImg">
            <Upload
              type="file"
              beforeUpload={(file) => {
                setPaintingImg(file);
                return false;
              }}
              onRemove={() => setPaintingImg(null)}
              fileList={paintingImg}
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
};

export default AddProduct;
