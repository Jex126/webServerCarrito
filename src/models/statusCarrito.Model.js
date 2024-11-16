import { conexion } from "../../bd/bd.js";
export const statusCarrito = {
    getCont: async()=>{ 
        const result = await conexion.query('select * from IoTCarStatus order by id DESC');
        return result;
    },
}

export const movimientos = async(status,statusName,origin,id_device)=>{ 
    const result = await conexion.query(`insert into IoTCarStatus (status,ip_client,name,id_device) values (?,?,?,?);`,[status,origin,statusName,id_device]);
        return status;
    }