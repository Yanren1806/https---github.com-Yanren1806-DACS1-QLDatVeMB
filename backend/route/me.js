const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController'); // Sử dụng tên biến nhất quán

router.get('/', meController.storedCourses); // Đảm bảo sử dụng tên biến đúng

module.exports = router;
