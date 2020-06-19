const request = require('supertest');
const connection = require('../server/database/connection');
const dbBuild = require('../server/database/data/build');

const app = require('../server/app');

beforeAll(() => dbBuild());

describe('login endPoint', () => {
  test('Route /login status 200,  data.message = logged in successfully', (done) => {
    return request(app)
      .post('/api/v1/login')
      .set({
        'Content-Type': 'application/json',
      })
      .send(
        JSON.stringify({
          email: 'rana@gmail.com',
          password: '12345678',
          role: 'artist',
        }),
      )
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('logged in successfully');
        return done();
      });
  });

  test('Route /login status for incorrect password', (done) => {
    return request(app)
      .post('/api/v1/login')
      .set({
        'Content-Type': 'application/json',
      })
      .send(
        JSON.stringify({
          email: 'rana@gmail.com',
          password: '123456789',
          role: 'artist',
        }),
      )
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('Incorrect Password');
        return done();
      });
  });

  test('Route /login for unexisting email', (done) => {
    return request(app)
      .post('/api/v1/login')
      .set({
        'Content-Type': 'application/json',
      })
      .send(
        JSON.stringify({
          email: 'lina@gmail.com',
          password: '123456789',
          role: 'artist',
        }),
      )
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('You have to sign up first');
        return done();
      });
  });
});

afterAll(() => connection.end());
