const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater'); // Plugin để tạo slug

mongoose.plugin(slug);

const CourseSchema = new Schema({
    logohhk: { type: String, maxLength: 255 },
    mave: { type: String, maxLength: 255 },
    noixp: { type: String, maxLength: 255 },
    logomb: { type: String, maxLength: 255 },
    noihc: { type: String, maxLength: 255 },
    tgxp: { type: String, maxLength: 255 },
    tghc: { type: String, maxLength: 255 },
    giave: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now},
    slug: { type: String, slug: ['noixp', 'noihc', 'tgxp', 'tghc'], unique: true }
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
