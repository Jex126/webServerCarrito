import express from "express";
import route  from "./routes/statusCarrito.route.js";
import path,{dirname} from "path";
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const corsMiddleware = (req, res, next) => {
    // Permitir acceso desde cualquier origen (ajusta esto según sea necesario)
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Permitir métodos HTTP específicos
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    
    // Permitir encabezados específicos
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // Permitir el envío de cookies y credenciales (ajusta según tu necesidad)
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  
    // Si es una solicitud OPTIONS (pre-flight), responde de inmediato
    if (req.method === 'OPTIONS') {
      return res.sendStatus(204);
    }
    
    // Pasar al siguiente middleware
    next();
  };
app.use(corsMiddleware);
app.use(express.json())
app.listen(80,()=>{
    console.log("Servidor escuchando en el puerto: 80")
});
app.disable('x-powered-by');
app.use(route);

app.set('view engine','ejs');
app.set('views',path.resolve(path.join(__dirname,"views")));

app.use('/public', express.static(path.join(__dirname, '..', 'public')));

app.use('/',(req,resp,next)=>{
    return resp.json({msj:"endpoint no encontrado"});
})