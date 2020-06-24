const request = require('supertest');
const connection = require('../server/database/connection');
const dbBuild = require('../server/database/data/build');

const app = require('../server/app');

beforeAll(() => dbBuild());
afterAll(() => connection.end());

describe('get customer profile route', () => {
  test('Route /profile status 200, json header, data.id=1 ', (done) => {
    return request(app)
      .get('/api/v1/profile')
      .set('Cookie', [`token=${process.env.CUSTOMER_TOKEN}`])
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { data } = res.body;
        expect(data[0].first_name).toBe('Lina');
        done();
      });
  });

  test('Route /profile status 401 unauthorized ', (done) => {
    return request(app)
      .get('/api/v1/profile')
      .set('Cookie', [`token=${process.env.ARTIST_TOKEN}`])
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message).toBe('User only endPoints');
        done();
      });
  });
});
