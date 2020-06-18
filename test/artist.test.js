const request = require('supertest');
const connection = require('../server/database/connection');
const dbBuild = require('../server/database/data/build');

const app = require('../server/app');

beforeAll(() => dbBuild());
afterAll(() => connection.end());

describe('Get Artist By Id', () => {
  test('Route /profile/1 status 200, json header, data.first_name =Alaa ', (done) => {
    return request(app)
      .get('/api/v1/profile/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { data } = res.body;
        expect(data.first_name).toBe('Alaa');
        done();
      });
  });

  test('Route /profile/8 status 404, json header, data.message = "Sorry There\'s no artist for this id" ', (done) => {
    return request(app)
      .get('/api/v1/profile/8')
      .expect(404)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message).toBe("Sorry There's no artist for this id");
        done();
      });
  });

  test('Route /profile/alaa status 404, json header, data.message = You enterd wrong artist ID ', (done) => {
    return request(app)
      .get('/api/v1/profile/alaa')
      .expect(404)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message).toBe('You enterd wrong artist ID');
        done();
      });
  });
});
