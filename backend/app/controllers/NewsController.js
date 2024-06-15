class NewsController {

    index(req, res) {
        res.render('dangki.handlebars')
    }

    // show(req, res) {
    //     res.send('news detail!!');
    // }
}

module.exports = new NewsController; // Exportando o controller