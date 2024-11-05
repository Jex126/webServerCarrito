import express from "express";
import route  from "./routes/statusCarrito.route.js";
const app = express();
app.listen(3000);
app.disable('x-powered-by');
app.use(route);