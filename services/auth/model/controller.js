const _ = require('lodash');
const utils = require("../components/utils");
const logger = require('../components/logger').logger;
const Auth = require('./auth');

var auth = new Auth();

const authListCtrl = (arg) => {
  return new Promise(async (resolve, reject) => {
	auth.authList(arg).then(async function(data){
		return resolve(utils.prepareResponse(200, "success", data));
  	}).catch(function(catch_error){
		return reject(catch_error);
  	});
  });
}
const createUserCtrl = (arg) => {
  return new Promise(async (resolve, reject) => {
	auth.createUser(arg).then(async function(data){
		return resolve(utils.prepareResponse(200, "success", data));
  	}).catch(function(catch_error){
		return reject(catch_error);
  	});
  });
}


module.exports.list = function list(req, res) {
	let start_benchmark = process.hrtime();
	logger.info({
		route: 'authListCtrl',
		body: req.body,
		info: 'START - authListCtrl'
	});
	return authListCtrl(req)
	.then(function(results) {
		printEndLogs(start_benchmark, 'authListCtrl', results, 'END - authListCtrl with success');
		return res.send(results);
	})
	.catch(reason => {
		printEndLogs(start_benchmark, 'authListCtrl', reason, 'END - authListCtrl with error');
		return res.status(reason.statusCode).send(reason);
	})
};

module.exports.createUser = function createUSer(req, res) {
	let start_benchmark = process.hrtime();
	logger.info({
		route: 'createUserCtrl',
		body: req.body,
		info: 'START - authListCtrl'
	});
	return createUserCtrl(req)
	.then(function(results) {
		printEndLogs(start_benchmark, 'createUserCtrl', results, 'END - createUserCtrl with success');
		return res.send(results);
	})
	.catch(reason => {
		printEndLogs(start_benchmark, 'createUserCtrl', reason, 'END - createUserCtrl with error');
		return res.status(reason.statusCode).send(reason);
	})
};

var printEndLogs = function(start_benchmark, route, results, info) {
	const diff = process.hrtime(start_benchmark);
		logger.info({
		route: route,
		results: results,
		info: info,
		benchmark: ((((+diff[0]) * 1e9) + (+diff[1])) / 1000000)
	});
};

