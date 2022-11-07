const _ = require('lodash');
const utils = require("../components/utils");
const logger = require('../components/logger').logger;
const User = require('./user');

var user = new User();

const listUserCtrl = (arg) => {
  return new Promise(async (resolve, reject) => {
	user.listUser(arg).then(async function(data){
		return resolve(utils.prepareResponse(200, "success", data));
  	}).catch(function(catch_error){
		return reject(catch_error);
  	});
  });
}
const createUserCtrl = (arg) => {
  return new Promise(async (resolve, reject) => {
	user.createUser(arg).then(async function(data){
		return resolve(utils.prepareResponse(200, "success", data));
  	}).catch(function(catch_error){
		return reject(catch_error);
  	});
  });
}
const approveUserCtrl = (arg) => {
  return new Promise(async (resolve, reject) => {
	user.approveUser(arg).then(async function(data){
		return resolve(utils.prepareResponse(200, "success", data));
  	}).catch(function(catch_error){
		return reject(catch_error);
  	});
  });
}
const removeUserCtrl = (arg) => {
  return new Promise(async (resolve, reject) => {
	user.createUser(arg).then(async function(data){
		return resolve(utils.prepareResponse(200, "success", data));
  	}).catch(function(catch_error){
		return reject(catch_error);
  	});
  });
}

module.exports.listUser = function listUser(req, res) {
	let start_benchmark = process.hrtime();
	logger.info({
		route: 'listUserCtrl',
		body: req.body,
		info: 'START - listUserCtrl'
	});
	return listUserCtrl(req)
	.then(function(results) {
		printEndLogs(start_benchmark, 'listUserCtrl', results, 'END - listUserCtrl with success');
		return res.send(results);
	})
	.catch(reason => {
		printEndLogs(start_benchmark, 'listUserCtrl', reason, 'END - listUserCtrl with error');
		return res.status(reason.statusCode).send(reason);
	})
};

module.exports.createUser = function createUSer(req, res) {
	let start_benchmark = process.hrtime();
	logger.info({
		route: 'createUserCtrl',
		body: req.body,
		info: 'START - createUserCtrl'
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

module.exports.approveUser = function approveUser(req, res) {
	let start_benchmark = process.hrtime();
	logger.info({
		route: 'approveUserCtrl',
		body: req.body,
		info: 'START - approveUserCtrl'
	});
	return approveUserCtrl(req)
	.then(function(results) {
		printEndLogs(start_benchmark, 'approveUserCtrl', results, 'END - approveUserCtrl with success');
		return res.send(results);
	})
	.catch(reason => {
		printEndLogs(start_benchmark, 'approveUserCtrl', reason, 'END - approveUserCtrl with error');
		return res.status(reason.statusCode).send(reason);
	})
};

module.exports.removeUser = function removeUSer(req, res) {
	let start_benchmark = process.hrtime();
	logger.info({
		route: 'removeUserCtrl',
		body: req.body,
		info: 'START - removeUserCtrl'
	});
	return removeUserCtrl(req)
	.then(function(results) {
		printEndLogs(start_benchmark, 'removeUserCtrl', results, 'END - removeUserCtrl with success');
		return res.send(results);
	})
	.catch(reason => {
		printEndLogs(start_benchmark, 'removeUserCtrl', reason, 'END - removeUserCtrl with error');
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

