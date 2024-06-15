const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteControler');


// router.use('/dangki/:slug', newsController.show)
router.get('/', siteController.home)

module.exports = router;