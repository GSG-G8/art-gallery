const request = require('supertest');
const connection = require('../server/database/connection');
const dbBuild = require('../server/database/data/build');

const app = require('../server/app');

beforeAll(() => dbBuild());
afterAll(() => connection.end());

describe('Get Artist By Id', () => {
  test('Route /profile/1 status 200, json header, data.id=1 ', (done) => {
    return request(app)
      .get('/api/v1/profile/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { data } = res.body;
        expect(data[0].id).toBe(1);
        done();
      });
  });

  test('Route /profile/888 status 404, json header, data.message = "Sorry There\'s no artist for this id" ', (done) => {
    return request(app)
      .get('/api/v1/profile/888')
      .expect(404)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message).toBe("Sorry There's no artist for this id");
        done();
      });
  });
  test('Route /profile/alaa status 400, json header, data.message = You entered wrong artist ID ', (done) => {
    return request(app)
      .get('/api/v1/profile/alaa')
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message).toBe('You entered wrong artist ID');
        done();
      });
  });
});

describe('PATCH artist', () => {
  const data = {
    socialMediaAccounts: ['https://www.pinterest.com/'],
    profileImg:
      'https://i.pinimg.com/236x/cf/33/14/cf33144a0706df281372bfe83d44a070.jpg',
    bio: 'Hello there',
    mobileNo: '0592885555',
    customized: true,
  };
  test('PATCH Route /artist status 200, json header, send data ', (done) => {
    return request(app)
      .patch('/api/v1/artist')
      .set('Cookie', [`token=${process.env.ARTIST_TOKEN}`])
      .send(data)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) return done(err);
        const { message } = res.body.data;
        const { rows } = await connection.query(
          'SELECT * from artist WHERE id = 1',
        );
        expect(message).toBe('Succefully update');
        expect(rows).toHaveLength(1);
        expect(rows[0].bio).toBe('Hello there');
        done();
      });
  });

  test('PATCH Route /artist status 404, json header, send data ', (done) => {
    return request(app)
      .patch('/api/v1/artist')
      .set('Cookie', [`token=${process.env.CUSTOMER_TOKEN}`])
      .send(data)
      .expect(401)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) return done(err);
        const { message } = res.body;

        expect(message).toBe('Artist only endPoints');
        done();
      });
  });
});
