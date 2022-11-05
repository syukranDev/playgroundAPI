var _ = require("lodash");
const logger = require('../components/logger').logger;
const sql = require('../components/sql/queries');

//renaming class auth for future auth implementation
module.exports = class test {
  authList(req){ 
    return new Promise((resolve, reject) => {
      return sql.authList(req)
        .then(results => {
          logger.info({
            path: 'authList',
            data: results
          });  
          return resolve(results);
        })
        .catch(reason => {
          logger.error({
            path: 'authList catch',
            info: 'authList failed',
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

  
}





