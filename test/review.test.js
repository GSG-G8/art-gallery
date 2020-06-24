const request = require('supertest');
const connection = require('../server/database/connection');
const dbBuild = require('../server/database/data/build');

const app = require('../server/app');

beforeAll(() => dbBuild());

describe('get artist reviews', () => {
  test('GET Route /review/1 status 200, json header, send data ', (done) => {
    request(app)
      .get('/api/v1/review/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) return done(err);
        const { data } = res.body;
        expect(data[0].details).toBe('عمل رائع جدا');
        done();
      });
  });

  test('GET Route /review/k status 200, json header, send data ', (done) => {
    request(app)
      .get('/api/v1/review/k')
      .expect(400)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message).toBe('Artist ID should be number');
        done();
      });
  });
});

describe('post review', () => {
  test('POST Route /review status 201, json header, send data ', (done) => {
    request(app)
      .post('/api/v1/review')
      .set('Cookie', [`token=${process.env.CUSTOMER_TOKEN}`])
      .send({
        details: 'good work',
        rate: 4,
        artistID: 2,
      })
      .expect(201)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message).toBe('review added successfully');
        done();
      });
  });

  test('POST Route /review status 400 ', (done) => {
    request(app)
      .post('/api/v1/review')
      .set('Cookie', [`token=${process.env.CUSTOMER_TOKEN}`])
      .send({
        details: 'good work',
        rate: 4.4,
        artistID: 2,
      })
      .expect(400)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message).toBe('rate should be integer');
        done();
      });
  });
});

afterAll(() => connection.end());
