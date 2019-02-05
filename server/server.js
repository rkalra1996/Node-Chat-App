const path = require('path');
const http = require('http');
//specific path to the public directory
const publicPath = path.join(__dirname, '../public');

const express = require('express');
const app = express();

const socketIO = require('socket.io');

const port = process.env.PORT || 3000

const server = http.createServer(app);
//create a web-socket basesd server
const client = socketIO(server);

app.use(express.static(publicPath));


//listen to socket connection
client.on('connection', (socket)=>{
    console.warn("A new socket is now active");
});

client.on('disconnect', () => {console.log("user disconnected")});

server.listen(port, ()=>{
    console.log(`app active on port ${port}`);
});
