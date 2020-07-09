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

describe('Admin Activation', () => {
  test('Route/artists status 200, json header,get all artist ', (done) => {
    const token = `token=${process.env.ADMIN_TOKEN}`;
    return request(app)
      .get('/api/v1/artists')
      .expect(200)
      .expect('Content-Type', /json/)
      .set('Cookie', token)
      .end((err, res) => {
        if (err) return done(err);
        const { data } = res.body;
        expect(data[0].id).toBe(1);
        done();
      });
  });
  test('Route /admin/artist/id status 200, json header,switch active user ', (done) => {
    const token = `token=${process.env.ADMIN_TOKEN}`;
    return request(app)
      .patch('/api/v1/admin/artist/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .set('Cookie', token)
      .end((err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message).toBe(
          'artist with email:alaa@gmail.com,update active to true successfully',
        );
        done();
      });
  });
  test('Route /admin/artist/id status 404, json header,try to active artist not found ', (done) => {
    const token = `token=${process.env.ADMIN_TOKEN}`;
    return request(app)
      .patch('/api/v1/admin/artist/11')
      .expect(404)
      .expect('Content-Type', /json/)
      .set('Cookie', token)
      .end((err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message).toBe('no artist with this id');
        done();
      });
  });
  test('Route /admin/artist/id status 400, json header,bad request ', (done) => {
    const token = `token=${process.env.ADMIN_TOKEN}`;
    return request(app)
      .patch('/api/v1/admin/artist/hhhhh')
      .expect(400)
      .expect('Content-Type', /json/)
      .set('Cookie', token)
      .end((err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message).toBe('bad request inter integer value');
        done();
      });
  });
});

describe('PATCH /artist/avatar', () => {
  test('Route /artist/avatar status 400 bad request attatch file insted of image,  data.message = Should be an image png or jpeg', (done) => {
    const token = `token=${process.env.ARTIST_TOKEN}`;

    return request(app)
      .patch('/api/v1/artist/avatar')
      .set({
        'Content-Type': 'application/json',
      })
      .set('Cookie', token)
      .attach('profileImg', 'test/auth.test.js')
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message[0]).toBe('Should be an image png or jpeg');
        return done();
      });
  });
});

describe('PATCH artist', () => {
  const data = {
    socialMediaAccounts: ['https://www.pinterest.com/'],
    bio: 'Hello there',
    mobileNo: '0592885555',
    customized: true,
  };
  test('PATCH Route /artist status 200, json header, send data ', (done) => {
    const token = `token=${process.env.ARTIST_TOKEN}`;
    return request(app)
      .patch('/api/v1/artist')
      .set('Cookie', token)
      .send(data)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        const { rows } = await connection.query(
          'SELECT * from artist WHERE id = 1',
        );
        expect(message).toBe('Succefully update');
        expect(rows).toHaveLength(1);
        expect(rows[0].bio).toBe('Hello there');
        done();
      });
  });

  test('PATCH Route /artist status 401, json header, send data ', (done) => {
    const token = `token=${process.env.CUSTOMER_TOKEN}`;
    return request(app)
      .patch('/api/v1/artist')
      .set('Cookie', token)
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
