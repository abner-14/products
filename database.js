const mongoose = require('mongoose');
const { mongodb } = require('./keys');

mongoose.connect(mongodb.uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('Base de Datos Conectada')) 
    .catch(e => console.log(e));
  