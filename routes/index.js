'use strict'

const express = require('express');
const router = express.Router();
const Shoe = require('../models/shoes');

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('something');
  Shoe.find()
    .then(shoes => {
      console.log(shoes);
      res.json({shoes});
    })
    .catch((error) => {
      next(error);
    })
});

// router.get('/create', (req, res, next) => {

// });

module.exports = router;
