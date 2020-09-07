const express = require('express');

const socketIO = require('socket.io');

const http = require('http');

const path = require('path');

const app = express();

//socket io trabaj con http (viene por defecto), no con express; express se basa en http
//asi que añadiendo app implicitamente trabajamos con http
let server = http.createServer(app)

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//IO =esta es la comunicacion con el backend
module.exports.io = socketIO(server);
require('./sockets/socket');




//se cambia app.listen 
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});