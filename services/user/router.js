const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const router = express.Router()
// const validation = require('./components/validation')
// const config = require('config')
const path = require('path');
const session = require('express-session')
const sql = require('./components/sql/index')
const config = require('config')

var controller = require('./model/controller');

// app.use(function (req, res, next) {
//     //for gateway
//     // res.header("Access-Control-Allow-Origin", config.ACCESS_CONTROL_ALLOW_ORIGIN);
//     // res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//     // res.header("Access-Control-Allow-Headers", "Authorization, X-reqed-With, X-HTTP-Method-Override, Content-Type, Accept");
//     // res.header('Access-Control-Allow-Credentials', true);
//     // res.header('Access-Control-Max-Age', '86400');
//     next();
// });

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.disable("x-powered-by");
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({limit: '1mb', extended: true}));
app.use(express.static(path.join(__dirname, 'static')));


// if 404 show this instead
app.use (function (err, req, res, next){
    if (err) res.status(400).json({ message: 'Invalid JSON'});
    else next();
});

//========================================================================================== Web Paages and Auth APIs
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', function(req, res) {
	// Render login template
	res.sendFile(path.join(__dirname + '/afront-login.html'));
});

app.post('/auth', function(req, res) {
	if (req.body.username && req.body.password) {
		 let query = `SELECT * FROM [${config.db.database}].[dbo].[user] WHERE username=@username AND password=@password and status=1`
		 let data = {
			"username" : req.body.username,
			"password" :  req.body.password
		 }
		 sql.executeQuery(query, data)
		 	.then(records => {
				 // if (error) throw error;
				 if (records.length > 0) {
				 	// Authenticate the user
				 	req.session.loggedin = true;
				 	req.session.username = req.body.username;
				 	res.redirect('/home');

				 } else {
				 	res.send('Incorrect Username and/or Password!');
				 }			
				 res.end();
			})
		
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
});

app.get('/home', function(req, res) {
	// If the user is loggedin
	if (req.session.loggedin) {
		// Output username
		// res.send('Welcome back, ' + req.session.username + '!');
		// res.sendFile(path.join(__dirname + '/afront-home.html'));
		// res.sendFile('afront-home.html' , { root : __dirname});
		// res.sendFile('afront-home.html' , { root : __dirname});
		res.render('afront-home.html', { username: req.session.username })
	} else {
		// Not logged in
		res.send('Please login to view this page!');
		res.end();
	}
});

//========================================================================================== User APIs
app.use('/app/portal/', router);

router.route('/user/list')
.get((...args) => controller.listUser(...args))

router.route('/user/create')
.post((...args) => controller.createUser(...args))














module.exports = app