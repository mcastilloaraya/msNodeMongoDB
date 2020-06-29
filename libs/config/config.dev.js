const path = require('path');

let config = {};

config.logFileDir = path.join(__dirname, '../../log');
config.logFileName = 'app.log';
config.dbHost = process.env.dbHost || 'mongo';
config.dbPort = process.env.dbPort || '27017';
config.dbName = process.env.dbName || 'kiberapp-db';
config.serverPort = process.env.serverPort || 5000;

config.secret = 'supersecret';
config.database_url_dev = 'mongodb://127.0.0.1:27017/'+config.dbName;


module.exports = config;