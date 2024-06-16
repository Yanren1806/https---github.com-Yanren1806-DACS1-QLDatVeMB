const mongoose = require('mongoose');
const Course = require('../controllers/model/Course');
const { multipleMongooseToObjects } = require("../../util/mongooes")

class SiteController {

    async choose(req, res, next) {
        try {
            const courses = await Course.find({}).exec();
            const coursesPlain = multipleMongooseToObjects(courses);

        res.render('choose', {
                courses: coursesPlain
        }); // Trả về danh sách các khóa học dưới dạng JSON
        } catch (error) {
            next(error); // Chuyển lỗi đến middleware error handling (nếu có)
        }
    }

        show(req, res) {
        res.send('news detail!!');
    }


    
}

module.exports = new SiteController;

