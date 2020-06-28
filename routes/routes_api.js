const express = require('express');
const sucursalController = require('../controllers/SucursalController');
const logger = require('../libs/logger/app-logger');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bienvenidos a la API');
});

/* ---------------------------------------------- */
router.get('/sucursal', async (req, res) => {
    logger.info("sucursales");
    await sucursalController.getAll(req, res);
});

router.get('/sucursal/:id', async (req, res) => {
    logger.info("sucursal id:" + req.params.id);
    await sucursalController.get(req, res);
});

router.get('/delsucursal/:id', async (req, res) => {
    logger.info("del sucursal id:" + req.params.id);
    await sucursalController.delSucursal(req, res);
});

router.post('/upsucursal', async (req, res) => {
    logger.info("post upsucursal");
    await sucursalController.upSucursal(req, res);
});

router.post('/sucursal', async (req, res) => {
    logger.info("post sucursal");
    await sucursalController.addSucursal(req, res);
});
/* ---------------------------------------------- */

module.exports = router;   