 var io = io.connect('http://localhost:3000');
  

 // elemetons del Dom
var ouput = document.getElementById('output');
var message = document.getElementById('message');
var send = document.getElementById('btnSend');
 

 // añadir evento al btn send 
  send.addEventListener('click', function(){
        io.emit('chat', {
            message: message.value
        }); 
 });


 // escuchar al servidor 
 
io.on('chat', function(data){
  output.innerHTML += '<p>'+ data.message + '</p>'; 
});
