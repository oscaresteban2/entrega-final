import express from 'express'; // creando la aplicacion de Express
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";
import connectionMongo from "./config/db.js";

import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import viewsRouter from './routes/views.router.js';
import http from "http";
import dotenv from "dotenv";

//inicializamos las variables de entorno
dotenv.config();


const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

connectionMongo();

//Motores de plantillas y visualizaciones:
app.engine("handlebars", handlebars.engine());
app.set('views', `${__dirname}/views`)
app.set("view engine", "handlebars");

//Middlewares
app.use(express.static(`${__dirname}/public`))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rutas
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use("/", viewsRouter);

//Esucha el server:
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);  //Se llama la Variable del puerto al que se va a escuchar la conexion
});