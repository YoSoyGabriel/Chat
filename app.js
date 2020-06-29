
// import packages
var todoComtrollers = require('./public/controllers/todoControllers');
const socket = require('socket.io'); 
const express = require('express');
const path = require('path');
const app = express(); 
const port = 3000; 

app.use(express.static('public'));


app.get('/', (red, res) => {});

app.get('/cuenta', (red, res) => {
       res.sendFile('cuenta.html', {root: __dirname + '/public/views/'} );
});

todoComtrollers(app);


// app.get('/cuenta', (red, res) => {
//       res.sendFile('');
// });



// create a server using express 
// listen to port 3000

const server = app.listen(port, () =>{
  console.log('listening on port 3000');
});


 var io = socket(server); 

 io.on('connection',function(socket) {
   console.log('socket connected'  + socket.id); 
      socket.on('chat', function(data){
          io.emit('chat', data)
      });

     socket.on('typing', function(data){
         socket.broadcast.emit('typing', data);
     });  

 });


 