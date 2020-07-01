import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  notification,
  Empty,
  Table,
  Space,
  Button,
  Modal,
  Form,
  Input,
  Select,
} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import './style.css';

const { Option } = Select;

const { confirm } = Modal;

const CartPage = () => {
  const [cartData, setCartData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [checkoutData, setCheckoutData] = useState([]);

  const fetchData = async () => {
    try {
      const {
        data: { data },
      } = await axios.get('/api/v1/cart');
      if (data) {
        setCartData(data);
      } else {
        setCartData([]);
      }
    } catch (err) {
      const {
        response: {
          data: { message },
        },
      } = err;
      notification.error({
        message: 'خطأ في السيرفر، يرجى المحاولة لاحقًا',
        description: message,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          await axios.delete(`/api/v1/cart/${id}`);
          notification.success({
            message: 'تم حذف اللوحة من عربة التسوق',
          });
          setCartData(cartData.filter((painting) => painting.id !== id));
        } catch (err) {
          const {
            response: {
              data: { message },
            },
          } = err;
          notification.error({
            message: 'Error 401 Un-Authorized',
            description: message,
          });
        }
      },
    });
  };

  const onCreate = async (values) => {
    try {
      const { paintingId, property } = values;
      // console.log('Received values of form: ', values);
      await axios.post('/api/v1/paintings/buy', {
        paintingId,
        property,
      });
      notification.success({
        message: 'تمت عملية الشراء بنجاح',
      });
      setVisible(false);
    } catch (err) {
      const {
        response: {
          data: { message },
        },
      } = err;
      if (message === "Sorry You don't have enough money for this operation") {
        notification.error({
          message: 'لا يوجد رصيد كافٍ',
          description:
            'عذرًا ولكنك لا تملك في رصيدك ما يكفي لإتمام هذه العملية، يُرجى المحاولة بعد شحن الرصيد',
        });
      } else {
        notification.error({
          message,
        });
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
              notification.error({
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
        <img src={img} alt="Painting" style={{ width: '150px' }} />
      ),
    },
    {
      title: 'العنوان',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <h2>{text}</h2>,
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
          <Button onClick={() => deleteCart(dataIndex.id, dataIndex.title)}>
            حذف
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="cart-cards-container">
      {cartData.length === 0 ? (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} className="empty" />
      ) : (
        <Table columns={columns} dataSource={cartData} rowKey="id" />
      )}
      <div>
        <CollectionCreateForm />
      </div>
    </div>
  );
};

export default CartPage;
