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

socket.emit('createEmail', {
    from : "Rishabhkalra96@gmail.com",
    to : "RishabhKalra@gmail.com",
    body: "thanks for reporting"
});

socket.on('emailSent', function(){
    console.log("email sent successfully");
});