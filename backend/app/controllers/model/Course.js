const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    logohanghangkhong: { type: String, maxLeng:255 },
    mave: { type: String, maxLenght:255},
    noixp: { type: String, maxLenght:255},
    logomb: { type: String, maxLenght:255},
    noihc: { type: String, maxLenght:255},
    tgxp: { type: String, maxLenght:255},
    tghc: { type: String, maxLenght:255},
    giave: { type: String, maxLenght:255},
  });

  module.exports = mongoose.model('Course', Course)