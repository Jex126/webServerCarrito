import {Router} from "express";
import { getStatusCarrito, getLastCarrito } from "../controllers/statusCarrito.controller.js";
const route = Router();


route.get('/statusCarrito',getStatusCarrito);
route.get('/lastCarrito',getLastCarrito);
export default route