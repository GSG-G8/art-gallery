const request = require('supertest');
const connection = require('../server/database/connection');
const dbBuild = require('../server/database/data/build');

const app = require('../server/app');

beforeAll(() => dbBuild());

afterAll(() => connection.end());

describe('test if authorized or not if was customer', () => {
  test('testing for /is-auth ', (done) => {
    request(app)
      .get('/api/v1/is-auth')
      .set('Cookie', [`token=${process.env.CUSTOMER_TOKEN}`])
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const {
          body: { data },
        } = res;
        expect(data).toEqual({ id: 1, role: 'customer' });
        return done();
      });
  });

  test('testing for /is-auth if was artist ', (done) => {
    request(app)
      .get('/api/v1/is-auth')
      .set('Cookie', [`token=${process.env.ARTIST_TOKEN}`])
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const {
          body: { data },
        } = res;
        expect(data).toEqual({ id: 1, role: 'artist' });
        return done();
      });
  });

  test("testing for /is-auth if wasn't authorized ", (done) => {
    request(app)
      .get('/api/v1/is-auth')
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        const {
          body: { message },
        } = res;
        expect(message).toBe('Un-Authorized');
        return done();
      });
  });
});
