import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { notification, Button, Form, Input, AutoComplete } from 'antd';
import PaintingSection from './index';
import './index.css';

function App() {
  const [paintings, setPaintings] = useState();
  const [displaySearch, setDisplaySearch] = useState(false);

  const category = ['طبيعة', 'تراث', 'سماء'];

  const getPaintings = async () => {
    try {
      const {
        data: { data },
      } = await axios.get('/api/v1/paintings/all');
      setPaintings(data);
    } catch (err) {
      notification.error('عذراً, لا يمكن تحميل اللوحات');
    }
  };

  useEffect(() => {
    getPaintings();
  }, []);

  // Object.keys(obj)[0];

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
          {displaySearch && (
            <div>
              <Form name="basic" onFinish={onFinish}>
                <h3>بحث حسب السعر</h3>
                <Form.Item label="أقل من" name="price">
                  <Input />
                </Form.Item>
                <h3>بحث حسب التصنيف</h3>
                {/* <Form.Item label="التصنيف" name="category">
                  <AutoComplete
                    style={{
                      width: 200,
                    }}
                    placeholder="التصنيف"
                    // options=['طبيعة', 'تراث', 'سماء']
                    filterOption={(inputValue, option) =>
                      option.value
                        .toUpperCase()
                        .indexOf(inputValue.toUpperCase()) !== -1
                    }
                  />
                </Form.Item> */}
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
