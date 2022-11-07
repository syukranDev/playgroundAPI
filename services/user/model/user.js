var _ = require("lodash");
const logger = require('../components/logger').logger;
const sql = require('../components/sql/queries');

module.exports = class userAPI {
  
  listUser(req){ 
    return new Promise((resolve, reject) => {
      return sql.listUser(req)
        .then(results => {
          logger.info({
            path: 'listUser',
            data: results
          });  
          return resolve(results);
        })
        .catch(reason => {
          logger.error({
            path: 'listUser catch',
            info: 'listUser failed',
            reason: reason
          })
          return reject(reason);
        });
    });
  }

  createUser(req){ 
    return new Promise((resolve, reject) => {
      return sql.createUser(req)
        .then(results => {
          logger.info({
            path: 'createUser',
            data: results
          });  
          return resolve(results);
        })
        .catch(reason => {
          logger.error({
            path: 'createUser catch',
            info: 'createUser failed',
            reason: reason
          })
          return reject(reason);
        });
    });
  }

  approveUser(req){ 
    return new Promise((resolve, reject) => {
      return sql.approveUser(req)
        .then(results => {
          logger.info({
            path: 'approveUser',
            data: results
          });  
          return resolve(results);
        })
        .catch(reason => {
          logger.error({
            path: 'approveUser catch',
            info: 'approveUser failed',
            reason: reason
          })
          return reject(reason);
        });
    });
  }

  removeUser(req){ 
    return new Promise((resolve, reject) => {
      return sql.removeUser(req)
        .then(results => {
          logger.info({
            path: 'removeUser',
            data: results
          });  
          return resolve(results);
        })
        .catch(reason => {
          logger.error({
            path: 'removeUser catch',
            info: 'removeUser failed',
            reason: reason
          })
          return reject(reason);
        });
    });
  }

  
}





