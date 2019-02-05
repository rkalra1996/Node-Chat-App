var socket = io();
socket.on('connect', (client)=>{
    console.log("conncetion established");
});

socket.on('disconnect', ()=>{
    console.log("connection closed");
});

socket.on('newMessage', function(data){
    console.log("recieved new message", data);
});

socket.emit('createMessage', {
    to : "RishabhKalra@gmail.com",
    body: "thanks for reporting"
});
