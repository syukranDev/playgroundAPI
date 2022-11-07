const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const router = express.Router()
const router2 = express.Router()
const validation = require('./components/validation')
// const config = require('config')
// const path = require('path');

var controller = require('./model/controller')

app.disable("x-powered-by");
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({limit: '1mb', extended: true}));
// app.use(express.static(path.join(__dirname, 'static')));

// if 404 show this instead
app.use (function (err, req, res, next){
    if (err) res.status(400).json({ message: 'Invalid JSON'});
    else next();
});

// For warehouse APIs
app.use('/app/portal/', router);

router.route('/warehouse/list')
.post((...args) => controller.listWarehouse(...args))

router.route('/warehouse/add')
.post((...args) => controller.createWarehouse(...args))

router.route('/warehouse/remove/')
.get((...args) => controller.removeWarehouse(...args))

// For product @ stock APIs
router.route('/product/list')
.post((...args) => controller.listProduct(...args))

router.route('/product/add')
.post((...args) => controller.createProduct(...args))

router.route('/product/remove/:warehouse_id')
.get((...args) => controller.list(...args))

module.exports = app