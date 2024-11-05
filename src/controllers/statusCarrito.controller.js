import { statusCarrito} from "../models/statusCarrito.Model.js";
export const getStatusCarrito = async(req,resp)=>{
    try{
        const [status] = await statusCarrito.getCont();
        console.log(status[status.length-1]);
        resp.json(status);
    }catch(e){
    resp.status(500).json({error:'Error'})
    }
}
export const getLastCarrito = async(req,resp)=>{
    const [status] = await statusCarrito.getCont();
    const last = status[status.length-1];
    resp.json(last)
}