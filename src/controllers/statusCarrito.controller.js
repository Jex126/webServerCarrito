import { statusCarrito} from "../models/statusCarrito.Model.js";
export const getStatusCarrito = async(req,resp)=>{
    try{
        const [status] = await statusCarrito.getCont();
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

export const postCarrito = (req,resp)=>{
    resp.json({msj:"Petición POST realizada"});
}

export const deleteCarrito = (req,resp)=>{
    resp.json({msj:"Petición DELETE realizada"});
}

export const putCarrito = (req,resp)=>{
    resp.json({msj:"Petición PUT realizada"});
}

export const rutaVistaPrin = (req,resp)=>{
    resp.render("principal.ejs");
}