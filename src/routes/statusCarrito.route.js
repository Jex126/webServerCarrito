import {Router} from "express";
import { getStatusCarrito, 
    getLastCarrito, 
    postCarrito,
    deleteCarrito,
    putCarrito,
    rutaVistaPrin
 } from "../controllers/statusCarrito.controller.js";
const route = Router();

route.get('/',rutaVistaPrin);
route.get('/statusCarrito',getStatusCarrito);
route.get('/lastCarrito',getLastCarrito);
route.post('/statusCarrito',postCarrito);
route.delete('/statusCarrito',deleteCarrito);
route.put('/statusCarrito',putCarrito);
export default route