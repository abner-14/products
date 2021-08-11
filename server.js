const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

require('./database');

require('dotenv').config()

const PORT = process.env.PORT || 3000;


// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

//Rutas web
app.use('/', require('./router/rutas'));
app.use('/productos', require('./router/productos'));
app.use('/productos/inventario', require('./router/productos'));

  app.listen(PORT, () => {
    console.log(`App corriendo en el puerto ${ PORT }`);
});

