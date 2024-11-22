import {Router} from "express";
import { getStatusCarrito, 
    postAdelante,
    postAtras,
    postVizq,
    postVder,
    postGizq,
    postGder,
    postDetenerse,
    demo,
    rutaVistaPrin,
    rutaTabla
 } from "../controllers/statusCarrito.controller.js";
const route = Router();

route.get('/',rutaVistaPrin);
route.get('/tableStatus',rutaTabla);
route.get('/statusCarrito',getStatusCarrito);
route.post('/adelante',postAdelante);
route.post('/atras',postAtras);
route.post('/detenerse',postDetenerse);
route.post('/vuelta_izq',postVizq);
route.post('/vuelta_der',postVder);
route.post('/giro_izq',postGizq);
route.post('/giro_der',postGder);
route.post('/demo',demo);
export default route