import mongoose from 'mongoose'

//Crear un objeto mongo:Schema:
const Schema = mongoose.Schema

//construir un esquema para contactos:
const RopaSchema = new Schema({

    tipo_prenda: {
        type: String,
        required: 'tipo de prenda vacia'
    },
    cantidad: {
        type: Number,
        required: 'numero vacio'
    },
    marca:{
        type: String
    },
    nombre_cliente: {
        type: String
    },
    numero_cliente: {
        type: Number
    },
    fecha_creacion: {
        type: Date,
        default: Date.now
    }
})

export default RopaSchema 