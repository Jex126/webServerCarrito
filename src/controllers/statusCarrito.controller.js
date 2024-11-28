import { 
    statusCarrito,
    movimientos
} from "../models/statusCarrito.Model.js";
export const rutaVistaPrin = async (req,resp)=>{
    const [status] = await statusCarrito.getCont();
resp.render('principal.ejs',{status});
}
export const rutaTabla = async (req,resp)=>{
    const [status] = await statusCarrito.getCont();
resp.render('statusTable.ejs',{status});
}
export const getStatusCarrito = async(req,resp)=>{
    try{
        const [status] = await statusCarrito.getCont();
        resp.json(status);
    }catch(e){
    resp.status(500).json({error:'Error'})
    }
}
export const postAdelante = async(req,resp)=>{
    const origin = req.body.ip;
    const id_device = req.headers['user-agent'];
    const contPet = req.body.status;
    const name = req.body.nombre || "unknow";
    movimientos(contPet,name,origin,id_device);
    resp.json({msj:"Petición POSTAdelante realizada"});
}

export const postAtras = (req,resp)=>{
    const origin = req.body.ip;
    const id_device = req.headers['user-agent'];
    const contPet = req.body.status;
    const name = req.body.nombre || "unknow";
    movimientos(contPet,name,origin,id_device);
    resp.json({msj:"Petición POSTAtás realizada"});
}

export const postDetenerse = (req,resp)=>{
    const origin = req.body.ip;
    const id_device = req.headers['user-agent'];
    const contPet = req.body.status;
    const name = req.body.nombre || "unknow";
    movimientos(contPet,name,origin,id_device);
    resp.json({msj:"Petición POSTDetenerse realizada"});
}

export const postVizq = (req,resp)=>{
    const origin = req.body.ip;
    const id_device = req.headers['user-agent'];
    const contPet = req.body.status;
    const name = req.body.nombre || "unknow";
    movimientos(contPet,name,origin,id_device);
    resp.json({msj:"Petición POSTVizq realizada"});
}

export const postVder = (req,resp)=>{
    const origin = req.body.ip;
    const id_device = req.headers['user-agent'];
    const contPet = req.body.status;
    const name = req.body.nombre || "unknow";
    movimientos(contPet,name,origin,id_device);
    resp.json({msj:"Petición POSTVder"});
}

export const postGizq = (req,resp)=>{
    const origin = req.body.ip;
    const id_device = req.headers['user-agent'];
    const contPet = req.body.status;
    const name = req.body.nombre || "unknow";
    movimientos(contPet,name,origin,id_device);
    resp.json({msj:"Petición POSTGizq"});
}

export const postGder = (req,resp)=>{
    const origin = req.body.ip;
    const id_device = req.headers['user-agent'];
    const contPet = req.body.status;
    const name = req.body.nombre || "unknow";
    movimientos(contPet,name,origin,id_device);
    resp.json({msj:"Petición POSTGder"});
}

export const demo = (req,resp)=>{
    const origin = req.body.ip;
    const id_device = req.headers['user-agent'];
    const contPet = req.body.status;
    const name = req.body.nombre || "unknow";
    movimientos(contPet,name,origin,id_device);
    resp.json({msj:"Petición Demo"});
}