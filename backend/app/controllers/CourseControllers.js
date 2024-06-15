const mongoose = require('mongoose');
const Course = require('../controllers/model/Course');
const {multipleMongooseToObjects} = require("../../util/mongooes")

class courseController {

    show (req, res) {
        res.send('coures detail')
    }
}

module.exports = new courseController;

