const express = require('express');
const logger = require('./libs/logger/app-logger');
const config = require('./libs/config/config.dev');
const connectToDb = require('./libs/db/connect')
const cors = require('cors');
const router_api = require('./routes/routes_api');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();

// Establece conexion con Base de Datos MongoDB
connectToDb();

const port = config.serverPort;

logger.stream = {
    write(message, encoding) {
      logger.info(message);
    },
};

/* Middleware */

app.set('llave', config.secret);

// Permite las peticiones de referencias cruzadas entre dominios
app.use(cors());

// Para que el body-parser nos convierta lo que viene del cliente
app.use(bodyParser.urlencoded({ extended: false }));

// Se pasa a JSON 
app.use(bodyParser.json());

// Inicia el servidor
app.listen(port, function() {
    logger.info('Servidor corriendo - ', port);
});


// Ruta base
app.get('/', (req, res) => {
    res.send('Service');
});

// Autenticación
app.post('/autenticar', (req, res) => {
    if(req.body.usuario === "mca" && req.body.contrasena === "123") {
		const payload = {
			check:  true
		};
		const token = jwt.sign(payload, app.get('llave'), {
			expiresIn: 1440
		});
		res.json({
			mensaje: 'Autenticación correcta',
			token: token
		});
    } else {
        res.json({ mensaje: "Usuario o contraseña incorrectos"})
    }
})

// Rutas api 
app.use('/api', router_api);



