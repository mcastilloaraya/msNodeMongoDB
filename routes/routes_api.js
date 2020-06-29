const express = require('express');
const jwt = require('jsonwebtoken');
const sucursalController = require('../controllers/SucursalController');
const logger = require('../libs/logger/app-logger');
const config = require('../libs/config/config.dev');

const router = express.Router();
const app = express();

app.set('llave', config.secret);

router.get('/', (req, res) => {
    res.send('Bienvenidos a la API');
});


const rutasProtegidas = express.Router(); 
rutasProtegidas.use((req, res, next) => {
    const token = req.headers['access-token'];
	
    if (token) {
      jwt.verify(token, app.get('llave'), (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Token no proveída.' 
      });
    }
 });

/* ---------------------------------------------- */
router.get('/sucursal',rutasProtegidas, async (req, res) => {
    logger.info("sucursales");
    await sucursalController.getAll(req, res);
});

router.get('/sucursal/:id', rutasProtegidas, async (req, res) => {
    logger.info("sucursal id:" + req.params.id);
    await sucursalController.get(req, res);
});

router.get('/delsucursal/:id', rutasProtegidas, async (req, res) => {
    logger.info("del sucursal id:" + req.params.id);
    await sucursalController.delSucursal(req, res);
});

router.post('/upsucursal', rutasProtegidas, async (req, res) => {
    logger.info("post upsucursal");
    await sucursalController.upSucursal(req, res);
});

router.post('/sucursal', rutasProtegidas, async (req, res) => {
    logger.info("post sucursal");
    await sucursalController.addSucursal(req, res);
});
/* ---------------------------------------------- */

module.exports = router;   