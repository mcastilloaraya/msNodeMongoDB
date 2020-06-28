const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Definicion del esquena */
var SucursalSchema = new Schema({
        codigo:   { type: Number },
        nombre:   { type: String },
        estado:   { type: String }    
});
let SucursalModel =  mongoose.model('Sucursal', SucursalSchema);

/* Inserta un elementos a la coleccion */
SucursalModel.addSucursal = (sucursal) => {
        return sucursal.save();
}

/* Retorna todos los elementos de la coleccion */
SucursalModel.getAll = () => {
        return SucursalModel.find({});
}

/* Busca un elemento en la coleccion */
SucursalModel.get = (id) => {
        let suc = {};
        suc.codigo = id;
        return SucursalModel.find(suc);
}

/* Actualiza un elemento en la coleccion */
SucursalModel.upSucursal = (sucursal) => {
        let actualiza = {};
        actualiza.codigo = sucursal.codigo;
        actualiza.nombre = sucursal.nombre;
        let busca = {};
        busca.codigo = sucursal.codigo;
        return SucursalModel.updateOne(busca, actualiza);
}

/* Elimina un elemento de la coleccion */
SucursalModel.delSucursal = (id) => {
        let suc = {};
        suc.codigo = id;
        return SucursalModel.deleteOne(suc);
}

module.exports = mongoose.model('Sucursal');