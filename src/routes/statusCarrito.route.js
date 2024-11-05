import {Router} from "express";
import { getStatusCarrito } from "../controllers/statusCarrito.controller.js";
const route = Router();


route.get('/statusCarrito',getStatusCarrito);

export default route