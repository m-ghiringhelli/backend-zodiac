const { Router } = require('express');
const { zodiac } = require('../../data/zodiac');

module.exports = Router()
  .get('/', (req, res) => {
    const zodiacData = zodiac.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    res.json(zodiacData);
  });
