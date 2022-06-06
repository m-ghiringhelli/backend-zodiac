const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { zodiac } = require('../data/zodiac.js');

describe('backend-zodiac routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/zodiac should return zodiac signs', async () => {
    const response = await request(app).get('/zodiac');
    const expected = zodiac.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    expect(response.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
