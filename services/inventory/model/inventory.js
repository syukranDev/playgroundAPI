var _ = require("lodash");
const logger = require('../components/logger').logger;
const sql = require('../components/sql/queries');

module.exports = class test {
  listWarehouse(req){ 
    return new Promise((resolve, reject) => {
      return sql.listWarehouse(req)
        .then(results => {
          logger.info({
            path: 'listWarehouse',
            data: results
          });  
          return resolve(results);
        })
        .catch(reason => {
          logger.error({
            path: 'listWarehouse catch',
            info: 'listWarehouse failed',
            reason: reason
          })
          return reject(reason);
        });
    });
  }

  createWarehouse(req){ 
    return new Promise((resolve, reject) => {
      return sql.createWarehouse(req)
        .then(results => {
          logger.info({
            path: 'createWarehouse',
            data: results
          });  
          return resolve(results);
        })
        .catch(reason => {
          logger.error({
            path: 'createWarehouse catch',
            info: 'createWarehouse failed',
            reason: reason
          })
          return reject(reason);
        });
    });
  }

  listProduct(req){ 
    return new Promise((resolve, reject) => {
      return sql.listProduct(req)
        .then(results => {
          logger.info({
            path: 'listProduct',
            data: results
          });  
          return resolve(results);
        })
        .catch(reason => {
          logger.error({
            path: 'listProduct catch',
            info: 'listProduct failed',
            reason: reason
          })
          return reject(reason);
        });
    });
  }

  createProduct(req){ 
    return new Promise((resolve, reject) => {
      return sql.createProduct(req)
        .then(results => {
          logger.info({
            path: 'createProduct',
            data: results
          });  
          return resolve(results);
        })
        .catch(reason => {
          logger.error({
            path: 'createProduct catch',
            info: 'createProduct failed',
            reason: reason
          })
          return reject(reason);
        });
    });
  }
}





