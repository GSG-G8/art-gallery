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
  test('Route /paintingsArtist/1 status 200, json header, data[0].title = تراث ', (done) => {
    return request(app)
      .get('/api/v1/paintingsArtist/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { data } = res.body;
        expect(data[0].title).toBe('تراث');
        done();
      });
  });

  test('Route /paintingsArtist/18 status 200, json header ', (done) => {
    return request(app)
      .get('/api/v1/paintingsArtist/18')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { data } = res.body;
        expect(data).toEqual([]);
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
  // test('Route /paintings/1 status 200, data.message = Painting deleted successfully ', (done) => {
  //   return request(app)
  //     .delete('/api/v1/paintings/1')
  //     .expect(200)
  //     .set('Cookie', [`token=${process.env.ARTIST_TOKEN}`])
  //     .expect('Content-Type', /json/)
  //     .end(async (err, res) => {
  //       const { message } = res.body;
  //       if (err) return done(err);
  //       const { rows } = await connection.query(
  //         'SELECT * from painting WHERE id = 1',
  //       );
  //       expect(rows).toHaveLength(0);
  //       expect(message).toBe('Painting deleted successfully');
  //       done();
  //     });
  // });

  test('Route /paintings/15 status 400, data.message = Painting does not exist ', (done) => {
    return request(app)
      .delete('/api/v1/paintings/15')
      .set('Cookie', [`token=${process.env.ARTIST_TOKEN}`])
      .expect(400)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        const { message } = res.body;
        if (err) return done(err);
        expect(message).toBe(
          "Painting does not exist or you don't has permission",
        );
        done();
      });
  });
});

describe('Buy Paintings', () => {
  test('Successfully Buying Painting', (done) => {
    return request(app)
      .post('/api/v1/paintings/buy')
      .set('Cookie', [`token=${process.env.CUSTOMER_TOKEN}`])
      .send({ customerId: 1, paintingId: 2, property: '40*60' })
      .expect(200)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) return done(err);
        const {
          body: { message },
        } = res;
        expect(message).toBe(`Painting with id = 2 was added succesfully`);
        done();
      });
  });

  test('Trying to buy a product with nonexist property', (done) => {
    return request(app)
      .post('/api/v1/paintings/buy')
      .set('Cookie', [`token=${process.env.CUSTOMER_TOKEN}`])
      .send({ customerId: 1, paintingId: 2, property: '100*140' })
      .expect(400)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) return done(err);
        const {
          body: { message },
        } = res;
        expect(message).toBe(`This property is not listed for this product`);
        done();
      });
  });

  test('Trying to buy a product without having enough budget', (done) => {
    return request(app)
      .post('/api/v1/paintings/buy')
      .set('Cookie', [`token=${process.env.CUSTOMER_TOKEN}`])
      .send({ customerId: 1, paintingId: 2, property: '200*140' })
      .expect(400)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) return done(err);
        const {
          body: { message },
        } = res;
        expect(message).toBe(
          `Sorry You don't have enough money for this operation`,
        );
        done();
      });
  });

  test('Trying to buy a nonexist product', (done) => {
    return request(app)
      .post('/api/v1/paintings/buy')
      .set('Cookie', [`token=${process.env.CUSTOMER_TOKEN}`])
      .send({ customerId: 1, paintingId: 200, property: '40*60' })
      .expect(400)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) return done(err);
        const {
          body: { message },
        } = res;
        expect(message).toBe(`Sorry there's no painting with this ID`);
        done();
      });
  });

  test('Trying to buy a product with wrong inputs', (done) => {
    return request(app)
      .post('/api/v1/paintings/buy')
      .set('Cookie', [`token=${process.env.CUSTOMER_TOKEN}`])
      .send({ paintingId: 'Font' })
      .expect(400)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) return done(err);
        const {
          body: { message },
        } = res;
        expect(message).toEqual([
          'paintingId must be a `number` type, but the final value was: `NaN` (cast from the value `"Font"`).',
          'property is a required field',
        ]);
        done();
      });
  });
});
