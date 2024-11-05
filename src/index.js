import express from "express";
import route  from "./routes/statusCarrito.route.js";
const app = express();
app.listen(80,()=>{
    console.log("Servidor escuchando en el puerto: 80")
});
app.disable('x-powered-by');
app.use(route);

app.use('/',(req,resp)=>{
    return resp.json({msj:"endpoint no encontrado"});
})