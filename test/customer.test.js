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

describe('update customer info', () => {
  test('Route /profile/customer status 201, json header, message:user info updates successfully ', (done) => {
    return request(app)
      .patch('/api/v1/profile/customer')
      .set('Cookie', [`token=${process.env.CUSTOMER_TOKEN}`])
      .send({
        firstName: 'mariam',
        lastName: 'isa',
        budget: 50.11,
      })
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message).toBe('mariam info updates successfully');
        done();
      });
  });

  test('Route /profile/customer status 401 Unauthorized ', (done) => {
    return request(app)
      .patch('/api/v1/profile/customer')
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
