const request = require('supertest');
const connection = require('../server/database/connection');
const dbBuild = require('../server/database/data/build');

const app = require('../server/app');

beforeAll(() => dbBuild());

describe('GET /cart endPoint', () => {
  test('get cart for exisiting user with user token', (done) => {
    return request(app)
      .get('/api/v1/cart')
      .set('Cookie', [`token=${process.env.CUSTOMER_TOKEN}`])
      .expect('Content-Type', /json/)
      .expect(200)

      .end((err, res) => {
        if (err) return done(err);
        const { data } = res.body;
        expect(data[0].painting_id).toBe(1);
        done();
      });
  });
});

const customerToken =
  'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNTkyODI4NzE4fQ.3E4sQYl5PBn7ZXnZNj7IUrCJvesQiC3YBDDM0GvTrJk';

describe('Add to cart', () => {
  test('POST Route /cart status 201, json header, send data ', (done) => {
    request(app)
      .post('/api/v1/cart')
      .set('Cookie', [`token=${process.env.CUSTOMER_TOKEN}`])
      .send({
        customerId: 1,
        paintingId: 9,
      })
      .expect(201)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) return done(err);
        const {
          data: { message },
        } = res.body;
        expect(message).toBe(`Painting with id = 9 was added successfully`);
        done();
      });
  });

  test('POST Route /cart status 400, json header, send data ', (done) => {
    request(app)
      .post('/api/v1/cart')
      .set('Cookie', [`token=${process.env.CUSTOMER_TOKEN}`])
      .send({
        customerId: 1,
        paintingId: 9,
      })
      .expect(400)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) return done(err);
        const {
          data: { message },
        } = res.body;
        expect(message).toBe('Product is already in your cart');
        done();
      });
  });

  test('POST Route /cart status 400, json header, add product doesn\t exist to cart ', (done) => {
    request(app)
      .post('/api/v1/cart')
      .set('Cookie', [`token=${process.env.CUSTOMER_TOKEN}`])
      .send({
        customerId: 1,
        paintingId: 22,
      })
      .expect(400)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) return done(err);
        const {
          data: { message },
        } = res.body;
        expect(message).toEqual(
          'Key (painting_id)=(22) is not present in table "painting".',
        );
        done();
      });
  });

  test('POST Route /cart status 400, json header, send invalid request params ', (done) => {
    request(app)
      .post('/api/v1/cart')
      .set('Cookie', [`token=${process.env.CUSTOMER_TOKEN}`])
      .send({
        customerId: 'Muhammad',
        paintingId: 'طائر الاوز',
      })
      .expect(400)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) return done(err);
        const {
          data: { message },
        } = res.body;
        expect(message).toBe('Painting Id must be a number');
        done();
      });
  });
});

afterAll(() => connection.end());
