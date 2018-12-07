'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoeSchema = new Schema({
  brand: {
    type: String,
  },
  color: {
    type: String,
  }
});

const Shoe = mongoose.model('shoe', shoeSchema);

module.exports = Shoe;