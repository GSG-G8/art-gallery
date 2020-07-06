import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Alert, Spin, Empty, Button, message } from 'antd';
import { CSVLink } from 'react-csv';

import './style.css';

const AdminPage = () => {
  const [artists, setArtists] = useState([]);
  const [loaded, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //   const [active, setActive] = useState();

  const getAllArtistData = async () => {
    try {
      setLoading(true);
      const { data } = await Axios.get('/api/v1/artists');
      setArtists(data.data);
      setLoading(false);
    } catch (err) {
      setError('حدث خطأ في عملية جلب المعلومات');
      setLoading(false);
    }
  };
  const switchActive = async (id) => {
    try {
      const {
        data: { statusCode, message: msg },
      } = await Axios.patch(`/api/v1/admin/artist/${id}`);
      if (statusCode === 200 && msg) {
        message.success('تم تفعيل /الغاء تفعيل الحساب بنجاح');
        getAllArtistData();
      }
    } catch (err) {
      if (err.response) {
        setError('تعذر تفعيل او الغاء تفعيل الحساب لهذا الفنان');
      }
    }
  };
  useEffect(() => {
    getAllArtistData();
  }, []);
  //   const columns = [
  //     {
  //       title: 'الاسم الاول',
  //       dataIndex: 'first_name',
  //       key: 'last_name',
  //     },
  //     {
  //       title: 'الاسم الثاني',
  //       dataIndex: 'last_name',
  //       key: 'last_name',
  //     },
  //     {
  //       title: 'البريد الالكتروني',
  //       dataIndex: 'email',
  //       key: 'email',
  //     },
  //     {
  //       title: 'حالة الحساب',
  //       dataIndex: 'active',
  //       key: 'active',
  //       render: (dataIndex) => {
  //         setActive(dataIndex);
  //       },
  //     },
  //     {
  //       title: 'تفعيل/تعطيل',
  //       dataIndex: 'id',
  //       key: 'id',
  //       render: (dataIndex) => (
  //         <Button
  //           onClick={() => {
  //             switchActive(dataIndex);
  //           }}
  //         >
  //           `{active ? 'تعطيل' : 'تفعيل'}`
  //         </Button>
  //       ),
  //     },
  //   ];
  return (
    <div className="admin-artist-container">
      <p>حساب الادمن يساوي : 500دولار</p>
      <h4>يحتوي هذا الجدول على جميع الرسامين وحالة الحساب </h4>
      {error ? (
        <Alert type="error" message={error} />
      ) : loaded ? (
        <Spin>loading ...</Spin>
      ) : !artists.length ? (
        <Empty />
      ) : (
        <div>
          <Button variant="warning">
            <CSVLink data={artists} filename="artists">
              تصدير معلومات الفنانين
            </CSVLink>
          </Button>
          <table id="artists-table" className="table-artist">
            <thead>
              <tr>
                <th>الاسم</th>
                <th>البريد الالكتروني</th>
                <th>حالة الحساب</th>
                <th>تفعيل/تعطيل</th>
              </tr>
            </thead>
            <tbody>
              {artists
                .sort((a, b) => a.id - b.id)
                .map(
                  ({
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    active,
                    id,
                  }) => (
                    <tr key={firstName}>
                      <td>{`${firstName} ${lastName}`} </td>
                      <td>{email}</td>
                      <td>{active ? 'نشط' : 'غير نشط'}</td>
                      <td>
                        <Button
                          type={active ? 'danger' : ''}
                          onClick={() => switchActive(id)}
                          className="btn-active"
                        >
                          {active ? 'تعطيل' : 'تفعيل'}
                        </Button>
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>

        // <Table dataSource={artists} columns={columns} />
      )}
    </div>
  );
};

export default AdminPage;
