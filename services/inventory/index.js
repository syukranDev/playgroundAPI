const logger = require('./components/logger').logger;
const config = require("config");
logger.info('NODE_ENV: ' + config.util.getEnv('NODE_ENV'));
const PORT = config.get('INVENTORY_SERVICE_PORT');
const http = require('http');
const https = require('https');
const app = require('./router')

var server;
if (process.env.NODE_ENV === 'dev') {
 
  server = http.createServer(app).listen(PORT, function() {
    logger.info(`Inventory Services start at port ${PORT}`);
   console.log(`Inventory Services start at port ${PORT}`);
  })


} else {
  server = http.createServer(app).listen(PORT, function() {
    logger.info(`Inventory Services start at port ${PORT}`);
    console.log(`Inventory Services start at port ${PORT}`);
  })
}