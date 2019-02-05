var socket = io();
socket.on('connect', (client)=>{
    console.log("conncetion established");
});

socket.on('disconnect', ()=>{
    console.log("connection closed");
});

socket.on('newEmail', function(data){
    console.log("recieved new email", data);
});