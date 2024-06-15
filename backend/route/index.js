const newsRouter = require('./new');
const sitesRouter = require('./site');
const SiteControler = require("../app/controllers/SiteControler");
const newsControler = require("../app/controllers/NewsController");

function route(app) {

    app.use('/home', sitesRouter);

    app.use('/dangki', newsRouter);

    // Các đoạn code khác ở dưới có thể đã bị comment lại

    // app.get('/:page', (req, res) => {
    //     const page = req.params.page;
    //     const filePath = path.join(__dirname, '../frontend/html/', `${page}.html`);
    //     res.sendFile(filePath);
    // });

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
