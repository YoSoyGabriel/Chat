 var io = io.connect('http://localhost:3000');
 

 // elemetons del Dom
var ouput = document.getElementById('output');
var message = document.getElementById('message');
var send = document.getElementById('btnSend');
 

 // añadir evento al btn send 
   send.addEventListener('click', function(){
       if(message.value != null && message.value != ""){
            io.emit('chat', {
                message: message.value
            }); 
       }
        
  });

message.addEventListener('keypress', function(event){
   if(event.keyCode == 13){
        io.emit('chat', {
            message: message.value      
        });
   }
 
}); 

 // escuchar al servidor 
 
io.on('chat', function(data){
    //  if(id == data.id_cliente){
    //     output.innerHTML += '<p id="cliente">'+ data.message + '</p><br/>'; 
    //  }
    output.innerHTML += '<p>'+ data.message + '</p><br/>'; 
});
