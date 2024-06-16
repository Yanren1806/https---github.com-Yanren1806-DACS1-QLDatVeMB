const newsRouter = require('./new');
const meRouter = require('./me');
const sitesRouter = require('./site');
const coursesRouter = require('./course');
const SiteControler = require("../app/controllers/SiteControler");
const newsControler = require("../app/controllers/NewsController");
const coursesControler = require("../app/controllers/CourseControllers");

function route(app) {

    app.use('/choose', sitesRouter);

    app.use('/me', meRouter);

    app.use('/ticket', coursesRouter);

    app.use('/dangki', newsRouter);

    app.get('/css/:file', (req, res) => {
        const file = req.params.file;
        res.type('text/css');
        res.sendFile(path.join(__dirname, '../frontend/css', file));
    });

    app.get('/image/:file', (req, res) => {
        const file = req.params.file;
        res.sendFile(path.join(__dirname, '../frontend/image', file));
    });
}

module.exports = route;
