const mongoose = require('mongoose');
// Conectar a la base de datos
mongoose.connect(`${process.env.MONGOURI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = mongoose