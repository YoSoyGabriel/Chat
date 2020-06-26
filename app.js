// import packages
const socket = require('socket.io');
const express = require('express');
const app = express(); 
const port = 3000; 

// create a server using express 
// listen to port 3000

const server = app.listen(port, () =>{
  console.log('listening on port 3000');
});

app.use('/', express.static('public'));

// start the socket

const io = socket(server);

io.on('connection', (socket) =>{
  console.log('connnection establecida');
});

 