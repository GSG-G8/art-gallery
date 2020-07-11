import React, { useState, useEffect } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import Axios from 'axios';
import {
  Table,
  Space,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Empty,
  message,
} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import CheckoutForm from './CheckoutForm';
import './style.css';

import Navbar from '../../components/common/Navbar';

const { Option } = Select;

const { confirm } = Modal;

const CartPage = () => {
  const [cartData, setCartData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [budgetVisible, setBudgetVisible] = useState(false);
  const [checkoutData, setCheckoutData] = useState([]);
  const [budget, setBudget] = useState('');
  const [update, setUpdate] = useState(false);

  const cloudinaryLink =
    'https://res.cloudinary.com/dacf3uopo/image/upload/v1593353472/';

  const fetchData = async () => {
    try {
      const {
        data: { data },
      } = await Axios.get('/api/v1/cart');
      const {
        data: { data: userData },
      } = await Axios.get('/api/v1/profile');
      setCartData(data);
      setBudget(userData[0].budget);
    } catch (err) {
      message.error('خطأ في السيرفر، يرجى المحاولة لاحقًا');
    }
  };

  useEffect(() => {
    fetchData();
  }, [update]);

  const deleteCart = (id, title) => {
    confirm({
      title: 'هل أنتَ متأكد من رغبتك في حذف هذا المنتج من عربة التسوق ؟',
      icon: <ExclamationCircleOutlined />,
      content: `رقم اللوحة: ${id},  اسم اللوحة: ${title}`,
      okText: 'نعم',
      okType: 'danger',
      cancelText: 'لا',
      onOk: async () => {
        try {
          await Axios.delete(`/api/v1/cart/${id}`);
          message.success('تم حذف اللوحة من عربة التسوق');
          setUpdate(!update);
        } catch (err) {
          message.error('حدث خطا في حذف اللوحة');
        }
      },
    });
  };

  const onCreate = async (values) => {
    try {
      const { paintingId, property } = values;
      await Axios.post('/api/v1/paintings/buy', {
        paintingId,
        property,
      });
      await Axios.delete(`/api/v1/cart/${paintingId}`);
      message.success('تمت عملية الشراء بنجاح');
      setUpdate(!update);
      setVisible(false);
    } catch (err) {
      if (
        err.response.data.message ===
        "Sorry You don't have enough money for this operation"
      ) {
        message.error(
          'عذرًا ولكنك لا تملك في رصيدك ما يكفي لإتمام هذه العملية، يُرجى المحاولة بعد شحن الرصيد'
        );
      } else {
        message.error('حدث خطا في عملية الشراء');
      }
    }
  };

  const CollectionCreateForm = () => {
    const [form] = Form.useForm();

    const PropertyForm = () => {
      if (checkoutData) {
        const keys = Object.keys(checkoutData.property);

        return (
          <Form.Item
            name="property"
            label="السعر"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select className="select-before">
              {keys.map((key) => (
                <Option value={key}>
                  الأبعاد: {key} , السعر: {checkoutData.property[key]}
                </Option>
              ))}
            </Select>
          </Form.Item>
        );
      }

      return <Select className="select-before" />;
    };

    return (
      <Modal
        visible={visible}
        title="شراء اللوحة"
        okText="شراء"
        cancelText="إلغاء"
        onCancel={() => {
          setVisible(false);
        }}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              message.error({
                message: 'خطأ في إدخال المعلومات',
                description: info.errorFields[0].errors,
              });
            });
        }}
      >
        <Form
          form={form}
          layout="horizontal"
          name="form_in_modal"
          initialValues={{
            paintingId: checkoutData.painting_id,
            title: checkoutData.title,
            description: checkoutData.description,
            category: checkoutData.category,
          }}
        >
          <Form.Item
            name="paintingId"
            label="رقم اللوحة"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item name="title" label="اسم اللوحة">
            <Input disabled />
          </Form.Item>

          <Form.Item name="description" label="الوصف">
            <Input type="textarea" disabled />
          </Form.Item>

          <Form.Item name="category" label="التصنيف">
            <Input disabled />
          </Form.Item>
          <PropertyForm />
        </Form>
      </Modal>
    );
  };

  const columns = [
    {
      title: 'اللوحة',
      dataIndex: 'img',
      key: 'img',
      render: (img) => (
        <img
          src={`${cloudinaryLink}${img}`}
          alt="Painting"
          style={{ width: '100px', justifyContent: 'center' }}
        />
      ),
    },
    {
      title: 'العنوان',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <h3>{text}</h3>,
    },
    {
      title: 'وصف اللوحة',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'التصنيف',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'تنفيذ',
      key: 'action',
      render: (dataIndex) => (
        <Space size="middle">
          <Button
            onClick={() => {
              setVisible(true);
              setCheckoutData(dataIndex);
            }}
          >
            شراء
          </Button>
          <Button
            type="danger"
            onClick={() => deleteCart(dataIndex.painting_id, dataIndex.title)}
          >
            حذف
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="cart__container__main">
      <Navbar pageType="cart" />
      <div className="cart__container">
        <div className="budget__container">
          <Button
            type="primary"
            style={{ color: 'white' }}
            onClick={() => setBudgetVisible(true)}
          >
            إضافة رصيد
          </Button>
          <Modal
            visible={budgetVisible}
            title="إضافة الرصيد"
            okButtonProps={{ disabled: true, style: { display: 'none' } }}
            cancelText="إغلاق"
            onCancel={() => {
              setBudgetVisible(false);
            }}
          >
            <StripeProvider apiKey="pk_test_51H2XOsGP4bG3BNnqIuJs1B3aTgxkO5WB9lgYI9Szn7sfNcwYq24XuOh4zuYIECpbYAcRhIzwdo7HSbrb59cj2rwS00G9CnMEz5">
              <Elements>
                <CheckoutForm setBudget={setBudget} />
              </Elements>
            </StripeProvider>
          </Modal>
          <div>
            <h3 className="budget__heading">
              <span>رصيدك الحالي : </span> <span>{budget}$</span>
            </h3>
          </div>
        </div>
        {cartData.length === 0 ? (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        ) : (
          <Table
            columns={columns}
            dataSource={cartData}
            rowKey="id"
            size="middle"
            className="cart__table"
            bordered
          />
        )}
        <div>
          <CollectionCreateForm />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
