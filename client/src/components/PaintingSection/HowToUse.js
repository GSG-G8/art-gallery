import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { notification, Button, Form, Input, Radio, Select } from 'antd';
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

  const filterAdvance = (value) => {
    if (value === 'mostPopular') {
      getPaintings();
      const sorted = paintings.sort((a, b) => b.count_sold - a.count_sold);
      setPaintings(sorted.slice(0, 10));
    } else if (value === 'price') {
      setDisplaySearch(true);
    }
  };
  const searchByPrice = (values) => {
    getPaintings();
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
      setDisplaySearch(false);
    }
  };
  return (
    <>
      <div className="container">
        <div className="container__filter">
          <div>
            <Select
              placeholder="بحث متقدم"
              style={{ width: 120 }}
              onChange={filterAdvance}
            >
              <Select.Option value="mostPopular">الأكثر مبيعاً</Select.Option>
              <Select.Option value="price">السعر</Select.Option>
            </Select>
          </div>
          {displaySearch && (
            <div>
              <Form name="basic" onFinish={searchByPrice}>
                <h3>بحث حسب السعر</h3>
                <Form.Item label="أقل من" name="price">
                  <Input style={{ width: 120 }} />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                  بحث
                </Button>
              </Form>
            </div>
          )}
          <Radio.Group
            onChange={(e) => getPaintings(e.target.value)}
            defaultValue="all"
          >
            {category.map((e) => (
              <Radio.Button value={e.name[0]}>{e.name[1]}</Radio.Button>
            ))}
          </Radio.Group>
        </div>
        <PaintingSection paintings={paintings} />
      </div>
    </>
  );
}

export default App;
