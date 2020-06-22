const request = require('supertest');
const connection = require('../server/database/connection');
const dbBuild = require('../server/database/data/build');

const app = require('../server/app');

beforeAll(() => dbBuild());

describe('GET /cart endPoint', () => {
  test('get cart for exisiting user with user token', (done) => {
    return request(app)
      .get('/api/v1/cart')
      .set('Cookie', process.env.customer_token)
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

afterAll(() => connection.end());
