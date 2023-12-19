import express from 'express';
import router from '../Routes/Routes.js';
import routeError from '../Utils/RouteError.js';

const server = express();

server.use(express.json());
server.use(router);

server.use(routeError)
export default server;