import express from "express";
import route  from "./routes/statusCarrito.route.js";
import path from "path";
const app = express();
app.listen(80,()=>{
    console.log("Servidor escuchando en el puerto: 80")
});
app.disable('x-powered-by');
app.use(route);

app.set('view engine','ejs');
app.set('views',path.resolve("src/views"));

app.use('/public',express.static(path.resolve("public")))

app.use('/',(req,resp)=>{
    return resp.json({msj:"endpoint no encontrado"});
})