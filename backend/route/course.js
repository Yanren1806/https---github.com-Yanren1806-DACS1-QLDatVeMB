const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/CourseControllers');
const CourseControllers = require('../app/controllers/CourseControllers');

router.get(':/slug', CourseControllers.show)

module.exports = router;