const mongoose = require('mongoose');
const Course = require('../controllers/model/Course');

class CourseController {

    // Phương thức bất đồng bộ để lấy và hiển thị khóa học theo slug
    async show(req, res, next) {
        try {
            const course = await Course.findOne({slug: req.params.slug}).exec();
            res.json(course);
        } catch (error) {
            next(error);
        }
    }

    // Phương thức để xử lý việc tạo khóa học
    create(req, res) {
        res.render('create');
    }

    store(req, res) {
        const course = new Course(req.body);
        course.save()
        .then(() => res.redirect('/choose'))
        .catch(error => {
            
        })

    }
}

module.exports = new CourseController();