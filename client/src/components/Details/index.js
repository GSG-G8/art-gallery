import React, { useState } from 'react';
import { Button, Radio, Select } from 'antd';
import './style.css';

function PaintingsDetail({ match }) {
  const [imgPreview, setimgPreview] = useState('previewImg');
  const [size, setSize] = useState();
  const artID = match.params.artId;
  const painting = {
    title: 'طائر الاوز',
    img:
      'https://media.zid.store/0651e4a4-a220-4670-8922-c62f64ff8293/c69cd11f-6321-46b6-91fc-d4ea9769fbdf.jpeg',
    description: 'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية',
    category: 'لوحات طيور',
    property: '{"40*60":"70","120*160":"150", "200*140":"250"}',
    count_sold: '1',
    artist_id: '1',
  };

  const handleSizeChange = (value) => {
    setSize(value);
  };
  return (
    <div className="container">
      {console.log(artID, 'artid')}
      <div className="container__details">
        <div className="painting">
          <h1>{painting.title}</h1>
          <p>{painting.description}</p>
          <Radio.Group
            buttonStyle="solid"
            defaultValue="previewImg"
            onChange={(e) => setimgPreview(e.target.value)}
          >
            <Radio.Button className="paintingView" value="previewImg">
              عرض اللوحة
            </Radio.Button>
            <Radio.Button className="paintingView" value="previewWall">
              عرض على الحائط
            </Radio.Button>
          </Radio.Group>
          <br />
          <br />
          <label htmlFor="size">
            {' '}
            حجم اللوحة{' '}
            <Select
              id="size"
              defaultValue={JSON.parse(painting.property)[0]}
              style={{ width: 120 }}
              onChange={handleSizeChange}
            >
              {Object.keys(JSON.parse(painting.property)).map((e) => (
                <Select.Option value={e}>{e}</Select.Option>
              ))}
            </Select>
          </label>
          <strong className="price">
            {JSON.parse(painting.property)[size]}{' '}
          </strong>{' '}
          <br />
          <Button>
            -إضافة إلى السلة{' '}
            <strong>{JSON.parse(painting.property)[size]} </strong>
          </Button>
        </div>
      </div>
      <div className="container__image">
        {imgPreview === 'previewImg' && (
          <img className="imgPreview" alt={painting.title} src={painting.img} />
        )}
      </div>
    </div>
  );
}
export default PaintingsDetail;
