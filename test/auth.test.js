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

  test('Route /login for not register email', (done) => {
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
  test('Route admin/login status 200,  data.message = logged in successfully', (done) => {
    return request(app)
      .post('/api/v1/admin')
      .set({
        'Content-Type': 'application/json',
      })
      .send(
        JSON.stringify({
          email: 'admin-artist@gmail.com',
          password: 'admin123',
          role: 'admin',
        }),
      )
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('logged in successfully');
        return done();
      });
  });
  test('Route admin/login for not register email', (done) => {
    return request(app)
      .post('/api/v1/admin')
      .set({
        'Content-Type': 'application/json',
      })
      .send(
        JSON.stringify({
          email: 'admin@gmail.com',
          password: 'admin123',
          role: 'admin',
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

describe('testing for /logout', () => {
  test('testing for /logout ', (done) => {
    request(app)
      .get('/api/v1/logout')
      .set('Cookie', [`token=${process.env.CUSTOMER_TOKEN}`])
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('logout success');
        return done();
      });
  });
});

afterAll(() => connection.end());
