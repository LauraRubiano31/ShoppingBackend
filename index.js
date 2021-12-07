import express from 'express'
import rutas  from './rutas/rutas.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

//crear objeto express
const app = express()

//configuracion de conexion a mongo
mongoose.connect('mongodb://localhost/tienda_ropa', 
                  {
                        useNewUrlParser: true,
                        useUnifiedTopology: true
                  } 
)

//configuracion de bodyparser: para json exlusivamente
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//utilizar el archivo de rutas
rutas(app)

//crear y ejecutar servidor:
app.listen( 5001 , function(){
    console.log("servidor inicializado en puerto 5001")
} )