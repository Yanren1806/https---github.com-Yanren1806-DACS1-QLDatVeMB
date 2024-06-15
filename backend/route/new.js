const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// router.use('/dangki/:slug', newsController.index)
router.use('/dangki', newsController.index)

module.exports = router;