const homeRouter = require('./home');
const productRouter = require('./product');
const siteRouter = require('./site');
const accountRouter = require('./account');

function route(app) {
    //product
    app.use('/product', productRouter);
    //home
    app.use('/home', homeRouter);
    app.use('/register' , accountRouter);
    app.use('/', siteRouter);
}
module.exports = route;
