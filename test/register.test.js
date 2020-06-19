const request = require('supertest');
const connection = require('../server/database/connection');
const dbBuild = require('../server/database/data/build');

const app = require('../server/app');

beforeAll(() => dbBuild());

describe('register endPoint', () => {
  test('Route /register status 200,  data.message = WELCOME,user fist name,your account created successfully', (done) => {
    return request(app)
      .post('/api/v1/register')
      .set({
        'Content-Type': 'application/json',
      })
      .send(
        JSON.stringify({
          email: 'rana-obaid@gmail.com',
          password: '12345678',
          confirmPassword: '12345678',
          firstName: 'Rana',
          lastName: 'obaid',
          role: 'artist',
        }),
      )
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe(
          'WELCOME,Rana,your account created successfully',
        );
        return done();
      });
  });

  test('Route /register status for bad request', (done) => {
    return request(app)
      .post('/api/v1/register')
      .set({
        'Content-Type': 'application/json',
      })
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('email is a required field');
        return done();
      });
  });
  test('Route /register status for email exist !!', (done) => {
    return request(app)
      .post('/api/v1/register')
      .set({
        'Content-Type': 'application/json',
      })
      .send(
        JSON.stringify({
          email: 'rana@gmail.com',
          password: '12345678',
          confirmPassword: '12345678',
          firstName: 'Rana',
          lastName: 'obaid',
          role: 'artist',
        }),
      )
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('email exist !!');
        return done();
      });
  });
});

afterAll(() => connection.end());
