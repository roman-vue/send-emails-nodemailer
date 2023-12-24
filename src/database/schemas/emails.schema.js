const mongoose = require('mongoose');

// Esquema para los datos de correo
const correoSchema = new mongoose.Schema({
  email: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Modelo de Correo
const Correo = mongoose.model('Correo', correoSchema);

module.exports = Correo;
