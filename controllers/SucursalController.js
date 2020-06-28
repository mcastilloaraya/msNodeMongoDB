const Sucursal = require('../models/Sucursal');
const logger = require('../libs/logger/app-logger');

const controller = {};

controller.addSucursal = async (req, res) => {

    let sucursalToAdd = Sucursal({
      codigo: req.body.codigo,
      nombre: req.body.nombre,
      estado: req.body.estado
    });
  
    logger.info(sucursalToAdd);  
    try {
      const saveSucursal = await Sucursal.addSucursal(sucursalToAdd);
      res.status(200).send("Agregado");
    }
    catch(err) {
      logger.error('Error agregando sucursal: '+ err);
      res.status(500).send('Error agregando sucursal');
    }
}
  
controller.getAll = async (req, res) => {
  try {
    const sucursal = await Sucursal.getAll();
    res.send(sucursal);
  }
  catch(err) {
    logger.error('Error listar sucursal: '+ err);
    res.status(500).send('Error listando sucursal');
  }
}

controller.get = async (req, res) => {
  try {
    const sucursal = await Sucursal.get(req.params.id);
    res.send(sucursal);
  }
  catch(err) {
    logger.error('Error consulta sucursal: '+ err);
    res.status(500).send('Error Consulta sucursal');
  }
}

controller.upSucursal = async (req, res) => {
  let sucursalToUp = Sucursal({
    codigo: req.body.codigo,
    nombre: req.body.nombre,
    estado: req.body.estado
  });

  logger.info(sucursalToUp);  

  try {
    const sucursal = await Sucursal.upSucursal(sucursalToUp);
    res.status(200).send("Actualizado");
  }
  catch(err) {
    logger.error('Error actualizar sucursal: '+ err);
    res.status(500).send('Error actualizar sucursal');
  }
}

controller.delSucursal = async (req, res) => {
  try {
    const sucursal = await Sucursal.delSucursal(req.params.id);
    res.send(sucursal);
  }
  catch(err) {
    logger.error('Error eliminar sucursal: '+ err);
    res.status(500).send('Error eliminar sucursal');
  }
}

module.exports = controller;