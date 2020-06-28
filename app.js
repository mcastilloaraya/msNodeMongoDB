const express = require('express');
const logger = require('./libs/logger/app-logger');
const config = require('./libs/config/config.dev');
const connectToDb = require('./libs/db/connect')
const cors = require('cors');
const router_api = require('./routes/routes_api');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

const app = express();

connectToDb();

const port = config.serverPort;

logger.stream = {
    write(message, encoding) {
      logger.info(message);
    },
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(multipart());

//Rutas api 
app.use('/api', router_api);

//Index route
app.get('/', (req, res) => {
    res.send('Service');
});

app.listen(port, function() {
    logger.info('Servidor corriendo - ', port);
});



