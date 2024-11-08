import { conexion } from "../../bd/bd.js";
export const statusCarrito = {
    getCont: async()=>{ 
        const result = await conexion.query('select * from IoTCarStatus order by id DESC');
        return result;
    },
}