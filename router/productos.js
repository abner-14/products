const express = require('express');
const router = express.Router();
const Producto = require('../models/producto')


router.get('/', async (req, res) => {
  try {

    Producto.find(function (err, data) {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
      
  } catch (error) {
      console.log(error)
  }
})

router.post('/', async (req, res) => {
  const body = req.body
  console.log(body)
  try {
      const productoDB = new Producto(body)
      await productoDB.save()
      res.redirect('/productos')
  } catch (error) {
      console.log('error', error)
  }
})

router.get('/:nombre_producto', async(req, res) => {
  const nombre_producto = req.params.nombre_producto

  try {
      const productoDB = await Producto.findOne({ _nombre_producto: nombre_producto })
      console.log(productoDB)
      res.render('detalle', {
          producto: productoDB,
          error: false
      })
  } catch (error) {
      console.log('erroooooooooorrr', error)
      res.render('detalle', {
          error: true,
          mensaje: 'No se encuentra el producto seleccionado...'
      })
  }
})

router.delete('/:nombre_producto', async (req, res) => {
  const nombre_producto  = req.params.nombre_producto;
  console.log('nombre_producto desde backend', nombre_producto )
  try {

      const productoDB = await Producto.deleteOne({ nombre_producto: nombre_producto });
      console.log(productoDB)

      if (!productoDB) {
          res.json({
              estado: false,
              mensaje: 'No se puede eliminar'
          })
      } else {
          res.json({
              estado: true,
              mensaje: 'Eliminado!'
          })
      }
      
  } catch (error) {
      console.log(error)
  }
})


router.patch('/productos/inventario/:nombre_producto', async (req, res) => {
  const nombre_producto  = req.params.nombre_producto;
  const  existencia = req.body.existencia;
  console.log('nombre_producto desde backend', nombre_producto )
  console.log('Producto en Inventario desde backend', existencia )
  try {

      const productoDB = await Producto.updateOne({ nombre_producto: nombre_producto }, {existencia: existencia });
      console.log(productoDB)

      if (!productoDB) {
          res.json({
              estado: false,
              mensaje: 'No se puede modificar'
          })
      } else {
          res.json({
              estado: true,
              mensaje: 'Modificado!'
          })
      }
      
  } catch (error) {
      console.log(error)
  }
})



module.exports = router;