import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Alert, Spin, Empty, Button, message } from 'antd';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import NavBar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import './style.css';

const AdminPage = () => {
  const [artists, setArtists] = useState([]);
  const [loaded, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [budgetAdmin, setBudgetAdmin] = useState('');

  const getAdminBudget = async () => {
    try {
      const {
        data: { data },
      } = await Axios.get('/api/v1/admin');
      setBudgetAdmin(`${data[0].budget}$`);
    } catch (err) {
      if (err.response) {
        setError('حدث خطا في جلب بيانات الادمن');
      }
    }
  };
  useEffect(() => {
    getAdminBudget();
  }, []);

  const getAllArtistsData = async () => {
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
        getAllArtistsData();
      }
    } catch (err) {
      if (err.response) {
        setError('تعذر تفعيل او الغاء تفعيل الحساب لهذا الفنان');
      }
    }
  };
  useEffect(() => {
    getAllArtistsData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="admin-artist-container">
        <h3 className="admin-budget">
          حساب الادمن يساوي :<span className="budget-mark">{budgetAdmin}</span>{' '}
        </h3>
        {error ? (
          <Alert type="error" message={error} />
        ) : loaded ? (
          <Spin>loading ...</Spin>
        ) : !artists.length ? (
          <Empty />
        ) : (
          <div>
            <ReactHTMLTableToExcel
              id="test-table-xls-button"
              className="download-table-xls-button"
              table="artists-table"
              filename="tablexls"
              sheet="tablexls"
              buttonText="تحميل لملف اكسل"
            />
            <table id="artists-table" className="table-artist">
              <thead>
                <tr>
                  <th>الاسم</th>
                  <th>البريد الالكتروني</th>
                  <th>حالة الحساب</th>
                  <th>رقم الجوال</th>
                  <th>$الرصيد</th>
                  <th>تفعيل/تعطيل</th>
                </tr>
              </thead>
              <tbody>
                {artists
                  .sort((a, b) => b.id - a.id)
                  .map(
                    ({
                      first_name: firstName,
                      last_name: lastName,
                      email,
                      active,
                      id,
                      mobile_no: mobile,
                      budget,
                    }) => (
                      <tr key={id}>
                        <td>{`${firstName} ${lastName}`} </td>
                        <td>{email}</td>
                        <td>{active ? 'نشط' : 'غير نشط'}</td>
                        <td>{mobile || 'لا يوجد'}</td>
                        <td>{budget}$$</td>
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
        )}
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;
