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

afterAll(() => connection.end());
