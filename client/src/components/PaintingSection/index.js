import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Card } from 'antd';

function PaintingsSection({ paintings }) {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      {paintings && (
        <div className="container">
          {paintings.map((painting) => (
            <>
              <Card
                // loading
                className="card"
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    className="card__img"
                    alt={painting.title}
                    src={`https://res.cloudinary.com/dacf3uopo/image/upload/v1593353472/${painting.img}`}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  />
                }
              >
                <Card.Meta
                  title={painting.title}
                  description={painting.description}
                />
              </Card>
            </>
          ))}
        </div>
      )}
    </>
  );
}
PaintingsSection.propTypes = {
  paintings: propTypes.arrayOf(propTypes.object).isRequired,
};
export default PaintingsSection;
