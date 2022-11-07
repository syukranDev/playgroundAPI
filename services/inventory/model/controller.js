const _ = require('lodash');
const utils = require("../components/utils");
const logger = require('../components/logger').logger;
const Inventory = require('./inventory');

var inventory = new Inventory();

// Controller - Warehouse

const listWarehouseCtrl = (arg) => {
  return new Promise(async (resolve, reject) => {
	inventory.listWarehouse(arg).then(async function(data){
		return resolve(utils.prepareResponse(200, "success", data));
  	}).catch(function(catch_error){
		return reject(catch_error);
  	});
  });
}

const createWarehouseCtrl = (arg) => {
  return new Promise(async (resolve, reject) => {
	inventory.createWarehouse(arg).then(async function(data){
		return resolve(utils.prepareResponse(200, "success", data));
  	}).catch(function(catch_error){
		return reject(catch_error);
  	});
  });
}

const removeWarehouseCtrl = (arg) => {
  return new Promise(async (resolve, reject) => {
	inventory.removeWarehouse(arg).then(async function(data){
		return resolve(utils.prepareResponse(200, "success", data));
  	}).catch(function(catch_error){
		return reject(catch_error);
  	});
  });
}

// Controller - Product

const listProductCtrl = (arg) => {
  return new Promise(async (resolve, reject) => {
	inventory.listProduct(arg).then(async function(data){
		return resolve(utils.prepareResponse(200, "success", data));
  	}).catch(function(catch_error){
		return reject(catch_error);
  	});
  });
}

const createProductCtrl = (arg) => {
  return new Promise(async (resolve, reject) => {
	inventory.createProduct(arg).then(async function(data){
		return resolve(utils.prepareResponse(200, "success", data));
  	}).catch(function(catch_error){
		return reject(catch_error);
  	});
  });
}

module.exports.listWarehouse = function listWarehouse(req, res) {
	let start_benchmark = process.hrtime();
	logger.info({
		route: 'listWarehouseCtrl',
		body: req.body,
		info: 'START - listWarehouseCtrl'
	});
	return listWarehouseCtrl(req)
	.then(function(results) {
		printEndLogs(start_benchmark, 'listWarehouseCtrl', results, 'END - listWarehouseCtrl with success');
		return res.send(results);
	})
	.catch(reason => {
		printEndLogs(start_benchmark, 'listWarehouseCtrl', reason, 'END - listWarehouseCtrl with error');
		return res.status(reason.statusCode).send(reason);
	})
};

module.exports.createWarehouse = function createWarehouse(req, res) {
	let start_benchmark = process.hrtime();
	logger.info({
		route: 'createWarehouseCtrl',
		body: req.body,
		info: 'START - createWarehouseCtrl'
	});
	return createWarehouseCtrl(req)
	.then(function(results) {
		printEndLogs(start_benchmark, 'createWarehouseCtrl', results, 'END - createWarehouseCtrl with success');
		return res.send(results);
	})
	.catch(reason => {
		printEndLogs(start_benchmark, 'createWarehouseCtrl', reason, 'END - createWarehouseCtrl with error');
		return res.status(reason.statusCode).send(reason);
	})
};

module.exports.removeWarehouse = function removeWarehouse(req, res) {
	let start_benchmark = process.hrtime();
	logger.info({
		route: 'removeWarehouseCtrl',
		body: req.body,
		info: 'START - removeWarehouseCtrl'
	});
	return removeWarehouseCtrl(req)
	.then(function(results) {
		printEndLogs(start_benchmark, 'removeWarehouseCtrl', results, 'END - removeWarehouseCtrl with success');
		return res.send(results);
	})
	.catch(reason => {
		printEndLogs(start_benchmark, 'removeWarehouseCtrl', reason, 'END - removeWarehouseCtrl with error');
		return res.status(reason.statusCode).send(reason);
	})
};

module.exports.listProduct = function listProduct(req, res) {
	let start_benchmark = process.hrtime();
	logger.info({
		route: 'listProductCtrl',
		body: req.body,
		info: 'START - listProductCtrl'
	});
	return listProductCtrl(req)
	.then(function(results) {
		printEndLogs(start_benchmark, 'listProductCtrl', results, 'END - listProductCtrl with success');
		return res.send(results);
	})
	.catch(reason => {
		printEndLogs(start_benchmark, 'listProductCtrl', reason, 'END - listProductCtrl with error');
		return res.status(reason.statusCode).send(reason);
	})
};

module.exports.createProduct = function createProduct(req, res) {
	let start_benchmark = process.hrtime();
	logger.info({
		route: 'createProductCtrl',
		body: req.body,
		info: 'START - ccreateProductCtrl'
	});
	return createProductCtrl(req)
	.then(function(results) {
		printEndLogs(start_benchmark, 'createProductCtrl', results, 'END - createProductCtrl with success');
		return res.send(results);
	})
	.catch(reason => {
		printEndLogs(start_benchmark, 'createProductCtrl', reason, 'END - createProductCtrl with error');
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

