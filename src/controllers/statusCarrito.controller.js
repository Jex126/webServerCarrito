import { statusCarrito} from "../models/statusCarrito.Model.js";
export const getStatusCarrito = async(req,resp)=>{
    try{
        const [status] = await statusCarrito.getCont();
        resp.json(status);
    }catch(e){
    resp.status(500).json({error:'Error'})
    }
}