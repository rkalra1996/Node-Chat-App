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
    socket.on('disconnect', () => {console.log("user disconnected")});

    //emit a custom event
    socket.emit('newMessage', {
        from : 'RishabhKalra@gmail.com',
        text : 'Hie, this is rishabh kalra. Reporing for duty.',
        date : new Date().toLocaleDateString(),
        time : new Date().toLocaleTimeString()
    });
    //emit the greeting text to the new connection
    socket.emit('welcomeText','Rishabh Kalra');

    //broadcast to rest of the connections about the above connection
    socket.broadcast.emit('newUser', 'Rishabh Kalra');

    socket.on('createMessage', (data)=>{
        console.log("new message created ", data);
    });
});

server.listen(port, ()=>{
    console.log(`app active on port ${port}`);
});
