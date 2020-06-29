import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { notification, Button, Form, Input, Radio } from 'antd';
import PaintingSection from './index';
import './index.css';

function App() {
  const [paintings, setPaintings] = useState();
  const [displaySearch, setDisplaySearch] = useState(false);

  const category = [
    { name: ['hertage', 'تراث'] },
    { name: ['sky', 'سماء'] },
    { name: ['nature', 'طبيعة'] },
    { name: ['all', 'الكل'] },
  ];

  const getPaintings = async (cat) => {
    try {
      const {
        data: { data },
      } = await axios.get(`/api/v1/paintings/${cat || 'all'}`);
      setPaintings(data);
    } catch (err) {
      notification.error('عذراً, لا يمكن تحميل اللوحات');
    }
  };

  useEffect(() => {
    getPaintings();
  }, []);

  const onFinish = (values) => {
    if (values.price) {
      const paintingsWithPrices = paintings.map((e) => {
        const keys = Object.keys(e.property);
        const newProperity = {};
        for (let i = 0; i < keys.length; i += 1) {
          if (Number(e.property[keys[i]]) <= values.price) {
            newProperity[keys[i]] = e.property[keys[i]];
          }
        }
        e.property = newProperity;
        return e;
      });
      const result = paintingsWithPrices.filter(
        (e) => Object.keys(e.property).length > 0
      );
      setPaintings(result);
    }
  };

  return (
    <>
      <div className="container">
        <div className="container__filter">
          <Button onClick={() => setDisplaySearch(true)}> بحث متقدم</Button>
          <Radio.Group
            onChange={(e) => getPaintings(e.target.value)}
            defaultValue="all"
          >
            {category.map((e) => (
              <Radio.Button value={e.name[0]}>{e.name[1]}</Radio.Button>
            ))}
          </Radio.Group>
          {displaySearch && (
            <div>
              <Form name="basic" onFinish={onFinish}>
                <h3>بحث حسب السعر</h3>
                <Form.Item label="أقل من" name="price">
                  <Input />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                  بحث
                </Button>
              </Form>
            </div>
          )}
        </div>
        <PaintingSection paintings={paintings} />
      </div>
    </>
  );
}

export default App;
