import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  notification,
  Form,
  Input,
  Radio,
  Select,
  Space,
  AutoComplete,
} from 'antd';
import PaintingSection from './index';
import './index.css';

const categories = [
  { name: ['hertage', 'تراث'] },
  { name: ['sky', 'سماء'] },
  { name: ['nature', 'طبيعة'] },
  { name: ['islamic', 'islam'] },
  { name: ['all', 'الكل'] },
];

function PaintingContainer() {
  const [paintings, setPaintings] = useState();
  const [artists, setArtists] = useState();

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

  const getArtists = async () => {
    try {
      const {
        data: { data },
      } = await axios.get('/api/v1/artists');
      const artistsArray = data.map(
        ({ first_name: fName, last_name: lName, id }) => ({
          value: `${fName} ${lName}`,
          id,
        })
      );

      setArtists(artistsArray);
    } catch (err) {
      notification.error('عذراً, لا يمكن عرض الفنانين ');
    }
  };

  useEffect(() => {
    getPaintings();
    getArtists();
  }, []);

  const [advance, setAdvance] = useState('mostPopular');
  const [price, setPrice] = useState(500);
  const [artist, setArtist] = useState(-1);
  const [category, setCategory] = useState('all');

  if (!paintings?.length || !artists?.length) return 'loading';

  const artistID = artists.find((e) => e.value === artist)?.id;

  const sortedPaintings =
    advance === 'mostPopular'
      ? [...paintings].sort((a, b) => b.count_sold - a.count_sold)
      : paintings;

  const minPriceOfPainting = (property) =>
    Object.values(property).reduce((min, e) => (min > +e ? +e : min), 9999999);

  const propertyFilter = ({ property, ...rest }) => ({
    ...rest,
    property,
    minPrice: minPriceOfPainting(property),
  });

  const minPriceFilter = ({ minPrice }) => minPrice < price;

  const categoryFilter = ({ category: paintCategory }) => {
    if (category === 'all') return true;
    return paintCategory === category;
  };

  const artistNameFilter = ({ artist_id: paintArtistId }) => {
    if (artistID) return paintArtistId === artistID;
    return true;
  };

  const finalData = sortedPaintings
    .map(propertyFilter)
    .filter(minPriceFilter)
    .filter(categoryFilter)
    .filter(artistNameFilter);

  return (
    <>
      <div className="container">
        <div className="container__filter">
          <div>
            <Select
              placeholder="بحث متقدم"
              style={{ width: 120 }}
              onChange={(value) => {
                if (value !== 'price') setPrice(999);
                setAdvance(value);
              }}
            >
              <Select.Option value="mostPopular">الأكثر مبيعاً</Select.Option>
              <Select.Option value="price">السعر</Select.Option>
            </Select>
            <AutoComplete
              style={{
                width: 200,
              }}
              options={artists}
              onChange={(value) => setArtist(value)}
              placeholder="ابحث باسم الفنان"
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
              allowClear
            />
          </div>
          {advance === 'price' && (
            <div>
              <h3>بحث حسب السعر</h3>
              <Form.Item label="أقل من" name="price">
                <Input
                  type="number"
                  style={{ width: 120 }}
                  onChange={(e) => setPrice(+e.target.value)}
                />
              </Form.Item>
            </div>
          )}
          <br />
          <div>
            <Radio.Group
              className="search__category"
              onChange={(e) => setCategory(e.target.value)}
              defaultValue="all"
            >
              <Space size="middle">
                {categories.map((e) => (
                  <Radio.Button
                    style={{ width: 120, textAlign: 'center' }}
                    value={e.name[0]}
                  >
                    {e.name[1]}
                  </Radio.Button>
                ))}
              </Space>
            </Radio.Group>
          </div>
        </div>
        <PaintingSection paintings={finalData} getPaintings={getPaintings} />
      </div>
    </>
  );
}

export default PaintingContainer;
