const mongoose = require('mongoose');
const Course = require('../controllers/model/Course');

class SiteController {

        // home(req, res) {
        // res.render('home')
        // }

    // index(req, res) {
    //     res.render('dangki')
    // }
//     // GET method for fetching all courses
//     index(req, res) {
//         Course.find({}, function(err, courses) {
//             if (!err) {
//                 res.json(courses); // Send courses as JSON response if there's no error
//             } else {
//                 res.status(400).json({ error: err }); // Send error response if there's an error
//             }
//         }); 
//     }
}

module.exports = mongoose.model('Course', Course);
