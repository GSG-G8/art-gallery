const request = require('supertest');
const connection = require('../server/database/connection');
const dbBuild = require('../server/database/data/build');

const app = require('../server/app');

beforeAll(() => dbBuild());
afterAll(() => connection.end());

describe('Delete Paintings from cart for login user', () => {
  test('Route /cart/:paintingsId status 200,message="your order with id 1 deleted!!"', (done) => {
    return request(app)
      .delete('/api/v1/cart/1')
      .set('Cookie', [`token=${process.env.CUSTOMER_TOKEN}`])
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message).toBe('your order with id 1 deleted!!');
        done();
      });
  });

  test('Route /cart/:paintingsId status 400,message=painting not on cart', (done) => {
    return request(app)
      .delete('/api/v1/cart/100')
      .set('Cookie', [`token=${process.env.CUSTOMER_TOKEN}`])
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message).toBe("you don't have this painting on your cart!");
        done();
      });
  });
});
