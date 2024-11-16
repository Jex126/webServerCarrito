import { 
    statusCarrito,
    movimientos
} from "../models/statusCarrito.Model.js";
export const rutaVistaPrin = (req,resp)=>{
resp.render('principal.ejs');
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
    const origin = req.headers.origin;
    const id_device = req.headers['user-agent'];
    const contPet = req.body.status;
    movimientos(contPet,"Adelante",origin,id_device);
    resp.json({msj:"Petición POSTAdelante realizada"});
}

export const postAtras = (req,resp)=>{
    const origin = req.headers.origin;
    const id_device = req.headers['user-agent'];
    const contPet = req.body.status;
    movimientos(contPet,"Atrás",origin,id_device);
    resp.json({msj:"Petición POSTAtás realizada"});
}

export const postDetenerse = (req,resp)=>{
    const origin = req.headers.origin;
    const id_device = req.headers['user-agent'];
    const contPet = req.body.status;
    movimientos(contPet,"Detener",origin,id_device);
    resp.json({msj:"Petición POSTDetenerse realizada"});
}

export const postVizq = (req,resp)=>{
    const origin = req.headers.origin;
    const id_device = req.headers['user-agent'];
    const contPet = req.body.status;
    movimientos(contPet,"Vuelta_Izq",origin,id_device);
    resp.json({msj:"Petición POSTVizq realizada"});
}

export const postVder = (req,resp)=>{
    const origin = req.headers.origin;
    const id_device = req.headers['user-agent'];
    const contPet = req.body.status;
    movimientos(contPet,"Vuelta_Der",origin,id_device);
    resp.json({msj:"Petición POSTVder"});
}

export const postGizq = (req,resp)=>{
    const origin = req.headers.origin;
    const id_device = req.headers['user-agent'];
    const contPet = req.body.status;
    movimientos(contPet,"Giro_Izq",origin,id_device);
    resp.json({msj:"Petición POSTGizq"});
}

export const postGder = (req,resp)=>{
    const origin = req.headers.origin;
    const id_device = req.headers['user-agent'];
    const contPet = req.body.status;
    movimientos(contPet,"Giro_Der",origin,id_device);
    resp.json({msj:"Petición POSTGder"});
}

export const demo = (req,resp)=>{
    const origin = req.headers.origin;
    const id_device = req.headers['user-agent'];
    const contPet = req.body.status;
    movimientos(contPet,"Demo",origin,id_device);
    resp.json({msj:"Petición Demo"});
}