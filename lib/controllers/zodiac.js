const { Router } = require('express');
const { zodiac } = require('../../data/zodiac');

module.exports = Router()
  .get('/', (req, res) => {
    res.json(zodiac);
  });
