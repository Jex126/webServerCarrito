import { conexion } from "../../bd/bd.js";
export const statusCarrito = {
    getCont: async()=>{ 
        const result = await conexion.query('select * from IoTCarStatus');
        return result;
    },
}