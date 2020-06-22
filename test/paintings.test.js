const request = require('supertest');
const connection = require('../server/database/connection');
const dbBuild = require('../server/database/data/build');

const app = require('../server/app');

beforeAll(() => dbBuild());
afterAll(() => connection.end());

describe('Get all Paintings', () => {
  test('Route /paintings status 200, json header, data length to be checked', (done) => {
    return request(app)
      .get('/api/v1/paintings')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { data } = res.body;
        expect(data).toHaveLength(10);
        done();
      });
  });
});

describe('Get artist paints by id', () => {
  test('Route /paintings/1 status 200, json header, data[0].title = طائر الاوز ', (done) => {
    return request(app)
      .get('/api/v1/paintings/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { data } = res.body;
        expect(data[0].title).toBe('طائر الاوز');
        done();
      });
  });

  test('Route /projects/18 status 200, json header ', (done) => {
    return request(app)
      .get('/api/v1/paintings/18')
      .expect(404)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message).toBe("Sorry There's no paintings for this artist");
        done();
      });
  });

  test('Route /projects/gg status 404, json header ', (done) => {
    return request(app)
      .get('/api/v1/paintings/gg')
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message).toBe('You enterd wrong artist ID');
        done();
      });
  });
});

describe('Delete painting )', () => {
  const artistToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6ImFydGlzdCIsImlhdCI6MTU5MjY3NTkwOX0.lLUsLRZqnPfEzSoH8W3aDDRnuq4ax5L5dpko07g7uhY';

  test('Route /paintings/1 status 200, data.message = Painting deleted successfully ', (done) => {
    return request(app)
      .delete('/api/v1/paintings/1')
      .set('Cookie', artistToken)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        const { message } = res.body;
        if (err) return done(err);
        const { rows } = await connection.query(
          'SELECT * from painting WHERE id = 1',
        );
        expect(rows).toHaveLength(0);
        expect(message).toBe('Painting deleted successfully');
        done();
      });
  });

  test('Route /paintings/15 status 400, data.message = Painting does not exist ', (done) => {
    return request(app)
      .delete('/api/v1/paintings/15')
      .set('Cookie', artistToken)
      .expect(400)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        const { message } = res.body;
        if (err) return done(err);
        expect(message).toBe('Painting does not exist');
        done();
      });
  });
});
