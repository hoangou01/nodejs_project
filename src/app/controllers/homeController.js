class homeController {
    //GET /home
    index(req, res) {
        res.render('home');
    }
    show(req, res) {
        res.send('hihi');
    }
}
module.exports = new homeController();
