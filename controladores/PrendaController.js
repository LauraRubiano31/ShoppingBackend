import mongoose from 'mongoose'
import RopaSchema from '../modelos/PrendaModel.js'

//objet creado a partir del Schema de contacto
const Prenda = mongoose.model('ropa' , RopaSchema)

//accion de añadir nuevo Contacto
export const addPrenda = (request, response) => {
    //nuevo objeto basado en el DAO
    let nuevoPrenda = new Prenda(   request.body )
    //grabar contacto en mongo
    nuevoPrenda.save( (error , prenda )=>{
           if(error){
               response.send(`Error detectado: ${error}`)
           }else{
               response.json(prenda)
           } 

    })
}
//accion para obetener todas las personas
export const getPrendas = (r , s ) =>{
    Prenda.find(  {} , (error , prendas ) => {
        if(error){
            s.send(error)
        }else{
            s.json(prendas)
        }
    })
}

//accion detalles de contactos
export const getPrendasById = (request , response )=> {
    Prenda.findById( request.params.prendaid , (error , prenda ) => {
        if(error){
            response.send(error)
        }else{
            response.json(prenda)
        }
    }  )
}

//accion para borrar contacto
export const deletePrenda = (request , response ) => {
    Prenda.deleteOne ({ _id: request.params.prendaid} , (error , prenda_borrada )=>{
                if(error ) { response.send(error) }
                else {  response.json(  { "mensaje" : "borrado exitoso"     }    )   }
    })
}

//accion para actualizar contacto
export const updatePrenda = (request , response ) => {
    Prenda.findOneAndUpdate ({ _id:request.params.prendaid } 
                                , request.body
                                , {
                                    new:true
                                }
                                , (error , prenda_actualizada) => {
                                       if(error){ response.send(error) }
                                       else{   response.json(prenda_actualizada)  }
                                }   )
}


