const mongoose = require('mongoose');
const Course = require('./model/Course');
const { multipleMongooseToObjects } = require("../../util/mongooes");

class MeController {
    
   async storedCourses(req, res, next) {
    
    try {
        const courses = await Course.find({}).exec();
        const coursesPlain = multipleMongooseToObjects(courses);

   res.render('stored-Courses', {
            courses: coursesPlain
    }); // Trả về danh sách các khóa học dưới dạng JSON
    } catch (error) {
        next(error); // Chuyển lỗi đến middleware error handling (nếu có)
    }
        
    }
}

module.exports = new MeController();