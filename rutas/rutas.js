//construccion de 
//endpoint: ruta en un proyecto REST orientado a servicios
//          responder como mensajes en formato JSON 
import { response } from "express";
import {  addPrenda, 
          getPrendasById, 
          deletePrenda, 
          updatePrenda, 
          getPrendas} from "../controladores/PrendaController.js";

const rutas = function(app){
       app.route('/prenda') 
            .get( getPrendas  )
            .post( addPrenda  )
       app.route('/prendas/:prendaid')  
            .get(getPrendasById)
            .put( updatePrenda)
            .delete( deletePrenda )      
}

export default rutas;

