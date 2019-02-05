var socket = io();
socket.on('connect', (client)=>{
    console.log("conncetion established");
});

client.on('disconnect', ()=>{
    console.log("connection closed");
});