import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { notification, Empty, Table, Space, Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import './style.css';

const { confirm } = Modal;

const CartPage = () => {
  const [cartData, setCartData] = useState([]);

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
  }, [cartData]);

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
          setCartData(cartData);
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
          <Button>شراء</Button>
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
    </div>
  );
};

export default CartPage;
