const request = require('supertest');
const connection = require('../server/database/connection');
const dbBuild = require('../server/database/data/build');

const app = require('../server/app');

beforeAll(() => dbBuild());
afterAll(() => connection.end());

describe('Get all Paintings', () => {
  test('Route /paintings status 200, json header, data length to be checked', (done) => {
    return request(app)
      .get('/api/v1/paintings/all')
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
  test('Route /paintingsArtist/1 status 200, json header, data[0].title = طائر الاوز ', (done) => {
    return request(app)
      .get('/api/v1/paintingsArtist/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { data } = res.body;
        expect(data[0].title).toBe('طائر الاوز');
        done();
      });
  });

  test('Route /paintingsArtist/18 status 200, json header ', (done) => {
    return request(app)
      .get('/api/v1/paintingsArtist/18')
      .expect(404)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message).toBe("Sorry There's no paintings for this artist");
        done();
      });
  });

  test('Route /paintingsArtist/gg status 404, json header ', (done) => {
    return request(app)
      .get('/api/v1/paintingsArtist/gg')
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

describe('POST /painting', () => {
  const filePath = `${__dirname}/1610-Brain-Games-Study-workout.jpg`;

  test('Route /painting status 201,  data.message = Painting added successfully', (done) => {
    // if this test doesn't pass and you get server error, that's mean u have problem with internet connection, try later
    return request(app)
      .post('/api/v1/painting')
      .set({
        'Content-Type': 'application/json',
      })
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywicm9sZSI6ImFydGlzdCIsImlhdCI6MTU5MjY0MDUxN30.KzX9yQLO6YvrUl6r--b-mzcvdVutoxehmTH8-JBaHao',
      ])
      .attach('paintingImg', filePath)
      .field('title', 'لوحة فنية')
      .field('description', ' الحياة جميلة')
      .field('category', 'طبيعة')
      .field('property', '{40*60 : 70 , 100*120 : 150 , 140*200 : 250}')
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('Painting added successfully');
        return done();
      });
  });

  test('Route /painting status 400 bad request empty title,  data.message = title is a required field', (done) => {
    return request(app)
      .post('/api/v1/painting')
      .set({
        'Content-Type': 'application/json',
      })
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywicm9sZSI6ImFydGlzdCIsImlhdCI6MTU5MjY0MDUxN30.KzX9yQLO6YvrUl6r--b-mzcvdVutoxehmTH8-JBaHao',
      ])
      .attach('paintingImg', filePath)
      .field('title', '')
      .field('description', ' الحياة جميلة')
      .field('category', 'طبيعة')
      .field('property', '{40*60 : 70 , 100*120 : 150 , 140*200 : 250}')
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message[0]).toBe('title is a required field');
        return done();
      });
  });

  test('Route /painting status 400 bad request attatch file insted of image,  data.message = Should be an image png or jpeg', (done) => {
    return request(app)
      .post('/api/v1/painting')
      .set({
        'Content-Type': 'application/json',
      })
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywicm9sZSI6ImFydGlzdCIsImlhdCI6MTU5MjY0MDUxN30.KzX9yQLO6YvrUl6r--b-mzcvdVutoxehmTH8-JBaHao',
      ])
      .attach('paintingImg', 'test/auth.test.js')
      .field('title', 'hi')
      .field('description', ' الحياة جميلة')
      .field('category', 'طبيعة')
      .field('property', '{40*60 : 70 , 100*120 : 150 , 140*200 : 250}')
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message[0]).toBe('Should be an image png or jpeg');
        return done();
      });
  });
});
