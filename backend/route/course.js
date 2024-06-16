const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/CourseControllers');
const CourseControllers = require('../app/controllers/CourseControllers');

router.get('/create', CourseControllers.create)
router.post('/store', CourseControllers.store)
router.get('/:slug', CourseControllers.show)
router.delete('/:_id', CourseControllers.delete)

module.exports = router;