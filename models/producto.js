const mongoose = require('mongoose');
const {Schema} = mongoose;

const productoSchema = new Schema({
  nombre_producto:  String,
  categoria: String,
  proveedor: String,
  precio: String,
  existencia: String
});

// Creando el modelo

module.exports = mongoose.model('Producto', productoSchema, 'Producto');