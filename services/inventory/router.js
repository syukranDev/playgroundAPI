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
app.use('/app/portal/warehouse/', router);

router.route('/list')
.get((...args) => controller.listWarehouse(...args))

router.route('/add')
.post((...args) => controller.createWarehouse(...args))

router.route('/edit/:warehouse_id')
.post((...args) => controller.editWarehouse(...args))

router.route('/remove/:warehouse_id')
.get((...args) => controller.removeWarehouse(...args))

// For product @ stock APIs
app.use('/app/portal/stock/', router2);

router2.route('/list')
.get((...args) => controller.listProduct(...args))

router2.route('/add')
.post((...args) => controller.createProduct(...args))

router2.route('/edit/:warehouse_id')
.post((...args) => controller.createUser(...args))

router2.route('/remove/:warehouse_id')
.get((...args) => controller.list(...args))












module.exports = app