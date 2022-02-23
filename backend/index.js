

const express = require('express');
const http = require('http');
// const path = require('path');
const socket = require('socket.io');


const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log('server running on http://localhost:' + PORT);

})

const io = socket(server);

io.on('connection', socket =>{
    console.log("Connection established");

    //skickar till backend och backend emittar till alla för att alla ska få det måste vi ha useeffect hook i rect
    socket.on('play', playMsg => {
        io.emit('play', playMsg);
    });
    socket.on("stop", msg => io.emit("stop"));
});
