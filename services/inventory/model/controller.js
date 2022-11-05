const _ = require('lodash');
const utils = require("../components/utils");
const logger = require('../components/logger').logger;
const Inventory = require('./inventory');

var inventory = new Inventory();

// const authListCtrl = (arg) => {
//   return new Promise(async (resolve, reject) => {
// 	auth.authList(arg).then(async function(data){
// 		return resolve(utils.prepareResponse(200, "success", data));
//   	}).catch(function(catch_error){
// 		return reject(catch_error);
//   	});
//   });
// }

// module.exports.list = function list(req, res) {
// 	let start_benchmark = process.hrtime();
// 	logger.info({
// 		route: 'authListCtrl',
// 		body: req.body,
// 		info: 'START - authListCtrl'
// 	});
// 	return authListCtrl(req)
// 	.then(function(results) {
// 		printEndLogs(start_benchmark, 'authListCtrl', results, 'END - authListCtrl with success');
// 		return res.send(results);
// 	})
// 	.catch(reason => {
// 		printEndLogs(start_benchmark, 'authListCtrl', reason, 'END - authListCtrl with error');
// 		return res.status(reason.statusCode).send(reason);
// 	})
// };



var printEndLogs = function(start_benchmark, route, results, info) {
	const diff = process.hrtime(start_benchmark);
		logger.info({
		route: route,
		results: results,
		info: info,
		benchmark: ((((+diff[0]) * 1e9) + (+diff[1])) / 1000000)
	});
};

