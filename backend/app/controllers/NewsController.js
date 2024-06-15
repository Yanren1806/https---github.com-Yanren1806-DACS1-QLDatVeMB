class NewsController {

    index(req, res) {
        res.render('dangki')
    }

    // show(req, res) {
    //     res.send('news detail!!');
    // }
}

module.exports = new NewsController; // Exportando o controller